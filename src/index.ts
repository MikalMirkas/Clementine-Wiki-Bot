import { Weapon, WeaponJson } from "./data";
import { Mwn } from "mwn";
import { readFile, opendir, rename } from "fs/promises";
import JSON5 from "json5";

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
            userAgent: "Clementine Wiki Auto Updater v2024319 ([[User:Mika:Talk]])",
            defaultParams: {
                assert: "user"
            },
            silent: false,
            retryPause: 5000,
            maxRetries: 3
        });

        //prepare files
        /*
            should i not use batchoperation for this? seems like i want to fire it the moment i get it, even if i get dozens of files.
            presumably speed is paramount here
            not sure if memory is a concern here either (assuming each file is 1.93kb, probably not), and streams probably aren't the answer?
        */
        const weapons: Weapon[] = [];
        const names: string[] = [];
        const weaponStrings: string[] = [];
        for(let i = 0; i < entries.length; i++)
        {
            const contents: string = await readFile(`${pendingPath}\\${entries[i]}`, { encoding: "utf8" });
            const data: WeaponJson = JSON5.parse(contents);
            const weapon = new Weapon(data);

            //required for batch operation
            weapons.push(weapon);
            weaponStrings.push(Weapon.constructQueryString(weapon.props));
            names.push(weapon.props.name);
        }

        //send files

        bot.batchOperation(names, (page, index) => {
            return bot.request({
                action: "pfautoedit",
                form: "Weapon",
                target: page,
                query: weaponStrings[index]
            }).then((data => {
                if(data.status == 200) { //IIRC, the MediaWiki API will never return any successes other than 200
                    //move the file to the "done" folder
                    console.info(`${data.target} returned ${data.status}. URL: ${data.redirect}.`);
                    rename(`${pendingPath}\\${entries[index]}`, `${donePath}\\${entries[index]}`);
                }
                else {
                    console.error(`${data.target} returned ${data.status}. Process failed.`);
                }
            }));
        }, 5, 2);
    
    } catch (error) {
        console.error(error);
    }
})();