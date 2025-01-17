/**
 * @file Contains the transformations for converting structured JSONs to Wikitext. 
 */

/* 
 * PAGEFORM STRUCTURES
 */

/**
 * The shape of what the Weapon PageForm looks like.
 *
 * @export
 * @interface WeaponWikitext
 */
export interface WeaponWikitext {
    "id" : string;
    "name" : string;
    "description" : string;
    "rarity" : number;
    "rank" : number;
    "buy price" : number;
    "sell price" : number;
    "account bound" : "Yes"|"No";
    "stat required" : number;
    "sex" : string[];
    "race" : string[];
    "class" : string[];
    "variance" : number;
    "attack grinds" : number[];
    "pp grinds" : number[];
    "grind rate variance": number;
    "accuracy" : number;
    "max grind" : number;
    "max target" : number;
    "pp tick" : number;
    "pp normal" : number;
    "pen override": "Yes"|"No";
    "elements" : string[];
    "atp" : number
    "ata" : number
    "dfp" : number
    "tp" : number
    "evp" : number
    "mst" : number
    "sta" : number
    "normal attack mod" : number
    "critical attack mod" : number
    "pa mod" : number
    "pp mod" : number
    "se mod" : number
    "striking range" : number
    "striking speed" : number
    "bullet range" : number
    "bullet speed" : number
    "technic range" : number
    "technic speed" : number
    "miss" : "Yes"|"No";
    "back attack" : "Yes"|"No";
    "hitflag" : number
    "self status id" : number
    "self status level" : number
    "self status chance" : number
    //Unfolded Status Effect Inflicts
    "neutral status id" : number
    "neutral status level" : number
    "neutral status chance" : number
    "fire status id" : number
    "fire status level" : number
    "fire status chance" : number
    "ice status id" : number
    "ice status level" : number
    "ice status chance" : number
    "lightning status id" : number
    "lightning status level" : number
    "lightning status chance" : number
    "ground status id" : number
    "ground status level" : number
    "ground status chance" : number
    "light status id" : number
    "light status level" : number
    "light status chance" : number
    "dark status id" : number
    "dark status level" : number
    "dark status chance" : number
    "equip hand" : number
    "weapon type flag" : number
    "set bonus" : number[]
    "model id" : number
    "visual effect id" : number
    //Unfolded Sound Effect ID
    "sound bank id" : number
    "sound effect id" : number
    //Unfolded Hitbox
    "weapon range": number
    "normal attack width": number
    "normal attack angle": number
    "normal attack height": number
    //RCSM Data
    "rcsm fire time": number,
    "rcsm penetration flag": number,
    "rcsm number of shot": number,
    "rcsm bullet type": number,
    "rcsm bullet velocity": number,
    "rcsm bullet size": number,
    "rcsm bullet range": number,
    "generate"?: "Yes"|"No",
}