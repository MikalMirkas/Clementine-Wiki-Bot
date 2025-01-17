import { PageFormWeapon } from "./data/structure";
import { ItemJson, BoardJson, BoostJson, ClothingJson, ConsumableJson, EventJson, GrinderJson, LineshieldJson, MaterialJson, PADiscJson, PartJson, PMDeviceJson, RoomDecorationJson, RoomMusicJson, RoomTicketJson, UnitJson, WeaponJson, EnemyJsonSchema } from "./data/schemas";
import { Mwn } from "mwn";
import { readFile, opendir, rename } from "fs/promises";
import JSON5 from "json5";
import { ambiguations, blacklist, new_style_pages } from "./filter";


/**
 * Determines the type of PSUC data file that is provided.
 * @param data 
 * @returns 
 */
function parseData(data: BoardJson | BoostJson | ClothingJson | ConsumableJson | EventJson | GrinderJson | LineshieldJson | MaterialJson | PADiscJson | PartJson | PMDeviceJson | RoomDecorationJson | RoomMusicJson | RoomTicketJson | UnitJson | WeaponJson | EnemyJsonSchema): PageFormWeapon {
    let result: PageFormWeapon;

    /**
     * In the context of this program, data falls into one of several categories:
     * - A Boss enemy
     * - An item, or any of its logical children; including its properties
     * 
     * - An enemy's drop table
     * - A board extension (Synthesis)
     * - Loot
     * - Photon Arts (not implemented)
     */
    /*if(data as EnemyJson) {
        throw new Error("Enemy not implemented.");
    }
    else { */
    const id = (data as ItemJson).item_id.substring(0,2);

    switch (id) {
    case "01": { //weapons
        result = new PageFormWeapon(data as WeaponJson);
        break;
    }
    case "02": {//ls
        throw new Error("Line Shields not implemented.");
    }
    case "03": { //consumables
        throw new Error("Consumables not implemented.");
    }
    case "04": //striking disc
    case "05": //ranged disc
    case "06": { //tech disc
        throw new Error("Photon Art Discs not implemented.");
    }  
    case "07": { //mats
        throw new Error("Materials not implemented.");
    }
    case "08": {//units
        throw new Error("Units not implemented.");
    }
    case "09": //clothes
    case "0A": {//parts
        throw new Error("Clothing not implemented.");
    }
    case "0B": {//decos/music/tickets
        throw new Error("Room Items not implemented.");
    }
    case "0C": {//traps
        throw new Error("Traps not implemented.");
    }
    case "0D": {//board
        throw new Error("Boards not implemented.");
    }
    case "0E": {//pmds
        throw new Error("PM Devices not implemented.");
    }
    case "0F": {//grinders
        throw new Error("Grinders not implemented.");
    }
    case "10": {//boost
        throw new Error("Boosts not implemented.");
    }
    case "11":
    default: {//event
        throw new Error("Events not implemented.");
    }
    }
    //}
    return result;
}

async function uploadFile(pendingPath: string, donePath: string) {
    //get files
    const dir = await opendir(pendingPath);
    const entries: string[] = [];

    for await (const entry of dir)
    {
        entries.push(entry.name);
    }

    if(entries.length == 0) {
        console.log(`No files present in ${pendingPath}.`);
    }

    //authenticate
    const bot = await Mwn.init({
        apiUrl: process.env.WIKI_ENDPOINT,
        username: process.env.WIKI_USERNAME,
        password: process.env.WIKI_PASSWORD,
        userAgent: "Clementine Wiki Auto Updater/v20240601 ([[User:Mika:Talk]])",
        defaultParams: {
            assert: "user"
        },
        silent: false,
        retryPause: 15000,
        maxRetries: 3
    });

    //prepare files
    /*
        should i not use batchoperation for this? seems like i want to fire it the moment i get it, even if i get dozens of files.
        presumably speed is paramount here
        not sure if memory is a concern here either (assuming each file is 1.93kb, probably not), and streams probably aren't the answer?
    */
    const destinations: string[] = [];
    const queryStrings: string[] = [];
    const entriesToWiki: string[] = [];
    for(let i = 0; i < entries.length; i++) {
        const contents: string = await readFile(`${pendingPath}\\${entries[i]}`, { encoding: "utf8" });
        const entity = parseData(JSON5.parse(contents));

        if(!blacklist.includes(entity.props.id)) {
            //psu/clem's parser has strange symbol encoding
            entity.props.name = entity.props.name.replaceAll(new RegExp(/<(?<digits>.+)>/g), (_match: unknown, digits: string) => {
                return String.fromCharCode(parseInt(digits, 16));
            });

            //hack for all new items after June 2024
            if(new_style_pages.includes(entity.props.id)) {
                entity.props.generate = "Yes"; //defaults to No server-side
            }
        
            //required for batch operation
            entriesToWiki.push(entries[i]);
            try {
                //figure out what category the JSON is
                queryStrings.push(PageFormWeapon.constructQueryString(entity.props));
            }
            catch (error) {
                console.log(`${entity.props.name} threw an error: ${error}`);
            }

            if(ambiguations.includes(entity.props.name)) {
                entity.props.name = `${entity.props.name}/${entity.props.rarity + 1}★`; //this assumes that there will never be a weapon with the same rarity and name, god help us if there is
            }
            destinations.push(entity.props.name);
        }
        else
        {
            //otherwise it is an aesthetic change of a weapon, bob doesn't want individual pages for them.
            console.log(`Skipping over filtered item: ${entity.props.id} / ${entity.props.name}`);
            try {
                rename(`${pendingPath}\\${entries[i]}`, `${donePath}\\${entries[i]}`);
            }
            catch (e: unknown) {
                if(e instanceof Error)
                {
                    console.error(e.message);
                }
            }
        }
    }

    //send files
    /* */
    const maxSizePerBatch = 50;
    const batches = Math.ceil(destinations.length / maxSizePerBatch);

    for (let i = 0; i < batches; i++) {
        const batchStart = i * maxSizePerBatch;
        let batchedDestinations: string[];
        let batchedQueryStrings: string[];
        let batchedEntriesToWiki: string[];

        console.log("Starting at: " + destinations[batchStart]);
            
        if(i == batches - 1) {
            batchedDestinations = destinations.slice(batchStart);
            batchedQueryStrings = queryStrings.slice(batchStart);
            batchedEntriesToWiki = entriesToWiki.slice(batchStart);
        }
        else {
            batchedDestinations = destinations.slice(batchStart, batchStart + maxSizePerBatch);
            batchedQueryStrings = queryStrings.slice(batchStart, batchStart + maxSizePerBatch);
            batchedEntriesToWiki = entriesToWiki.slice(batchStart, batchStart + maxSizePerBatch);
        }

        await bot.batchOperation(batchedDestinations, (page, index) => {
            return bot.request({
                action: "pfautoedit",
                form: "Weapon",
                target: page,
                query: batchedQueryStrings[index]
            }).then((async data => {
                //success, 200
                console.info(`${data.target} returned ${data.status}. URL: ${data.redirect}.`);
                try {
                    await rename(`${pendingPath}\\${batchedEntriesToWiki[index]}`, `${donePath}\\${batchedEntriesToWiki[index]}`);
                }
                catch (e: unknown) {
                    if(e instanceof Error)
                    {
                        console.error(e.message);
                    }
                }
            }), (async data => {
                if(data.code == "invalidjson") {
                    console.log(`Response for ${batchedEntriesToWiki[index]} returned error code ${data.code}`); //??????
                    try {
                        await rename(`${pendingPath}\\${batchedEntriesToWiki[index]}`, `${donePath}\\${batchedEntriesToWiki[index]}`);
                    }
                    catch (e: unknown) {
                        if(e instanceof Error)
                        {
                            console.error(e.message);
                        }
                    }
                }
                else if(data.response.status) {
                    console.error(`Response returned ${data.response.status}.`);
                }
            }));
        }, 5, 2);
    }
}

(async () => {
    //LOGGER TO BE WRITTEN HERE
    //ITEM ROUTINE
    let pendingPath = "./data/pending/items";
    let donePath = "./data/done/items";
    try {
        await uploadFile(pendingPath, donePath);
    } catch (error) {
        console.error(error);
    }

    //ENEMY ROUTINE
    pendingPath = "./data/pending/enemies";
    donePath = "./data/done/enemies";
    try {
        await uploadFile(pendingPath, donePath);
    } catch (error) {
        console.error(error);
    }
})();