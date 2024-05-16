import { Weapon, WeaponJson } from "./data";
import { Mwn } from "mwn";
import { readFile, opendir, rename } from "fs/promises";
import JSON5 from "json5";
import { blacklist, ambiguations } from "./filter";

(async () => {
    try {
        const pendingPath = "./data/pending";
        const donePath = "./data/done";
        
        //get files
        const dir = await opendir(pendingPath);
        const entries: string[] = [];
        for await (const entry of dir)
        {
            entries.push(entry.name);
        }
        if(entries.length == 0) {
            throw Error("No files present in the pending folder.");
        }

        //authenticate
        const bot = await Mwn.init({
            apiUrl: process.env.WIKI_ENDPOINT,
            username: process.env.WIKI_USERNAME,
            password: process.env.WIKI_PASSWORD,
            userAgent: "Clementine Wiki Auto Updater v20240401 ([[User:Mika:Talk]])",
            defaultParams: {
                assert: "user"
            },
            silent: false,
            retryPause: 10000,
            maxRetries: 3
        });

        //prepare files
        /*
            should i not use batchoperation for this? seems like i want to fire it the moment i get it, even if i get dozens of files.
            presumably speed is paramount here
            not sure if memory is a concern here either (assuming each file is 1.93kb, probably not), and streams probably aren't the answer?
        */
        const names: string[] = [];
        const weaponStrings: string[] = [];
        const entriesToWiki: string[] = [];
        for(let i = 0; i < entries.length; i++)
        {
            const contents: string = await readFile(`${pendingPath}\\${entries[i]}`, { encoding: "utf8" });
            const data: WeaponJson = JSON5.parse(contents);
            //hardcoded filter. todo: make modular/put into own file?
            const weapon = new Weapon(data);
           
            if(!blacklist.includes(weapon.props.id))
            {
                //psu/clem's parser has strange symbol encoding
                weapon.props.name = weapon.props.name.replaceAll(new RegExp(/<(?<digits>.+)>/g), (_match: unknown, digits: string) => {
                    return String.fromCharCode(parseInt(digits, 16));
                });
                
                //required for batch operation
                entriesToWiki.push(entries[i]);
                try{ 
                    weaponStrings.push(Weapon.constructQueryString(weapon.props));
                }
                catch (error) {
                    console.log(`${weapon.props.name} threw an error: ${error}`);
                }
                
                if(ambiguations.includes(weapon.props.name)) {
                    weapon.props.name = `${weapon.props.name}/${weapon.props.rarity + 1}★`; //this assumes that there will never be a weapon with the same rarity and name
                }
                names.push(weapon.props.name);
            }
            else
            {
                //otherwise it is an aesthetic change of a weapon, bob doesn't want individual pages for them.
                console.log(`Skipping over filtered weapon: ${weapon.props.id} / ${weapon.props.name}`);
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
        bot.batchOperation(names, (page, index) => {
            return bot.request({
                action: "pfautoedit",
                form: "Weapon",
                target: page,
                query: weaponStrings[index]
            }).then((async data => {
                if(data.status == 200) { //IIRC, the MediaWiki API will never return any successes other than 200
                    //move the file to the "done" folder
                    console.info(`${data.target} returned ${data.status}. URL: ${data.redirect}.`);
                    try {
                        await rename(`${pendingPath}\\${entriesToWiki[index]}`, `${donePath}\\${entriesToWiki[index]}`);
                    }
                    catch (e: unknown) {
                        if(e instanceof Error)
                        {
                            console.error(e.message);
                        }
                    }
                }
                else {
                    console.error(`${data.target} returned ${data.status}. Process failed.`);
                }
            }));
        }, 3, 2);
    
    } catch (error) {
        console.error(error);
    }
})();