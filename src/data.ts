/**
 * Converts a binary or boolean value to a "Cargo boolean" ("Yes"/"No").
 *
 * @param {(0|1|boolean)} boolean
 * @return {*} string ("Yes"/"No")
 */
function binaryToCargo(boolean: 0|1|boolean) {
    return boolean ? "Yes" : "No";
}


//these are not arbitrary - they match the allowed values declared in the cargo templates
const positionToName = {
    sex: ["Male","Female"],
    race: ["Human","Newman","CAST","Beast"],
    class: ["Hunter","Ranger","Force","Fighgunner","Guntecher","Wartecher","Fortefighter","Fortegunner","Fortetecher","Protranser","Acrofighter","Acrotecher","Fighmaster","Gunmaster","Masterforce","Acromaster"],
    element: ["Neutral","Fire","Ice","Lightning","Ground","Light","Dark"],
};
/**
 * 
 */
export type WeaponJson = {
    item_id: string;
    name: string;
    description: string;
    rarity: number;
    rank: number;
    price: number[];
    sort_order: number;
    requirement: {
        stat: number;
        sex: [0|1, 0|1];
        race: [0|1, 0|1, 0|1, 0|1];
        class: [0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1];
    };
    stat: {
        attack_variance: number;
        max_attack: number[];
        max_pp: number[];
        hit_rate: number;
        max_grind: number;
        max_target: number;
        pp_recovery_tick: number;
        pp_recovery_attack: number;
        modifier: {
            atp: number;
            ata: number;
            dfp: number;
            tp: number;
            evp: number;
            mst: number;
            sta: number;
            normal_attack: number;
            critical_attack: number;
            pa_damage: number;
            pp_damage: number;
            se_rate: number;
            striking_range: number;
            striking_speed: number;
            bullet_range: number;
            bullet_speed: number;
            technic_range: number;
            technic_speed: number;
        };
        available_element: number[];
    };
    meta_data: {
        equip_hand: number;
        weapon_type_flag: number;
        action_label: number;
        set_bonus_id: number[];
        model_id: number;
        visual_effect_id: number;
        sound_effect_id: number[];
        hit_box: number[];
    };
    attack_data: {
        can_miss: boolean;
        can_back_attack: boolean;
        hit_flag: number;
        inflict_self_status: [number, number, number];
        inflict_target_status: [[number,number,number],[number,number,number],[number,number,number],[number,number,number],[number,number,number],[number,number,number],[number,number,number]];
    };
    account_bound: 0|1;
}

/**
 * 
 */
type WeaponWikitext = {
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
    "accuracy" : number;
    "max grind" : number;
    "max target" : number;
    "pp tick" : number;
    "pp normal" : number;
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
}

/**
 * Data container for the Weapon PageForms form.
 *
 * @class Weapon
 */
export class Weapon {
    props: WeaponWikitext = {
        id: "",
        name: "",
        description: "",
        rarity: 0,
        rank: 0,
        "buy price": 0,
        "sell price": 0,
        "account bound": "Yes",
        "stat required": 0,
        sex: [],
        race: [],
        class: [],
        variance: 0,
        "attack grinds": [],
        "pp grinds": [],
        accuracy: 0,
        "max grind": 0,
        "max target": 0,
        "pp tick": 0,
        "pp normal": 0,
        elements: [],
        atp: 0,
        ata: 0,
        dfp: 0,
        tp: 0,
        evp: 0,
        mst: 0,
        sta: 0,
        "normal attack mod": 0,
        "critical attack mod": 0,
        "pa mod": 0,
        "pp mod": 0,
        "se mod": 0,
        "striking range": 0,
        "striking speed": 0,
        "bullet range": 0,
        "bullet speed": 0,
        "technic range": 0,
        "technic speed": 0,
        miss: "Yes",
        "back attack": "Yes",
        hitflag: 0,
        "self status id": 0,
        "self status level": 0,
        "self status chance": 0,
        "neutral status id": 0,
        "neutral status level": 0,
        "neutral status chance": 0,
        "fire status id": 0,
        "fire status level": 0,
        "fire status chance": 0,
        "ice status id": 0,
        "ice status level": 0,
        "ice status chance": 0,
        "lightning status id": 0,
        "lightning status level": 0,
        "lightning status chance": 0,
        "ground status id": 0,
        "ground status level": 0,
        "ground status chance": 0,
        "light status id": 0,
        "light status level": 0,
        "light status chance": 0,
        "dark status id": 0,
        "dark status level": 0,
        "dark status chance": 0,
        "equip hand": 0,
        "weapon type flag": 0,
        "set bonus": [],
        "model id": 0,
        "visual effect id": 0,
        "sound bank id": 0,
        "sound effect id": 0,
        "weapon range": 0,
        "normal attack width": 0,
        "normal attack angle": 0,
        "normal attack height": 0
    };
    constructor(weapon: WeaponJson) {
        //item properties
        this.props.id = weapon.item_id;
        this.props.name = weapon.name;
        this.props.description = weapon.description;
        this.props.rarity = weapon.rarity;
        this.props.rank = weapon.rank;
        this.props["buy price"] = weapon.price[0];
        this.props["sell price"] = weapon.price[1];
        this.props["account bound"] = binaryToCargo(weapon.account_bound);

        //requirements
        this.props["stat required"] = weapon.requirement.stat;
        this.props.sex = Weapon.convertBooleanArrayToStringArray(weapon.requirement.sex, positionToName.sex); 
        this.props.race = Weapon.convertBooleanArrayToStringArray(weapon.requirement.race, positionToName.race);
        this.props.class = Weapon.convertBooleanArrayToStringArray(weapon.requirement.class, positionToName.class);

        //stats
        this.props.variance = weapon.stat.attack_variance;
        this.props["attack grinds"] = weapon.stat.max_attack;
        this.props["pp grinds"] = weapon.stat.max_pp;
        this.props.accuracy = weapon.stat.hit_rate;
        this.props["max grind"] = weapon.stat.max_grind;
        this.props["max target"] = weapon.stat.max_target;
        this.props["pp tick"] = weapon.stat.pp_recovery_tick;
        this.props["pp normal"] = weapon.stat.pp_recovery_attack;
        this.props.elements = weapon.stat.available_element.map((_x, i) => positionToName.element[i]);

        //stats: modifiers
        this.props.atp = weapon.stat.modifier.atp;
        this.props.ata = weapon.stat.modifier.ata;
        this.props.dfp = weapon.stat.modifier.ata;
        this.props.tp = weapon.stat.modifier.tp;
        this.props.evp = weapon.stat.modifier.evp;
        this.props.mst = weapon.stat.modifier.mst;
        this.props.sta = weapon.stat.modifier.sta;
        this.props["normal attack mod"] = weapon.stat.modifier.normal_attack;
        this.props["critical attack mod"] = weapon.stat.modifier.critical_attack;
        this.props["pa mod"] = weapon.stat.modifier.pa_damage;
        this.props["pp mod"] = weapon.stat.modifier.pp_damage;
        this.props["se mod"] = weapon.stat.modifier.se_rate;
        this.props["striking range"] = weapon.stat.modifier.striking_range;
        this.props["striking speed"] = weapon.stat.modifier.striking_speed;
        this.props["bullet range"] = weapon.stat.modifier.bullet_range;
        this.props["bullet speed"] = weapon.stat.modifier.bullet_speed;
        this.props["technic range"] = weapon.stat.modifier.technic_range;
        this.props["technic speed"] = weapon.stat.modifier.technic_speed;

        //metadata
        this.props["equip hand"] = weapon.meta_data.equip_hand;
        this.props["weapon type flag"] = weapon.meta_data.weapon_type_flag;
        this.props["set bonus"] = weapon.meta_data.set_bonus_id;
        this.props["model id"] = weapon.meta_data.model_id;
        this.props["visual effect id"] = weapon.meta_data.visual_effect_id;

        this.props["sound bank id"] = weapon.meta_data.sound_effect_id[0];
        this.props["sound effect id"] = weapon.meta_data.sound_effect_id[1];

        this.props["weapon range"] = weapon.meta_data.hit_box[0];
        this.props["normal attack width"] = weapon.meta_data.hit_box[1];
        this.props["normal attack angle"] = weapon.meta_data.hit_box[2];
        this.props["normal attack height"]  = weapon.meta_data.hit_box[3];

        //attack data
        this.props.miss = binaryToCargo(weapon.attack_data.can_miss);
        this.props["back attack"] = binaryToCargo(weapon.attack_data.can_back_attack);
        this.props.hitflag = weapon.attack_data.hit_flag;
        this.props["self status id"]  = weapon.attack_data.inflict_self_status[0];
        this.props["self status level"]  = weapon.attack_data.inflict_self_status[1];
        this.props["self status chance"]  = weapon.attack_data.inflict_self_status[2];
        this.props["neutral status id"]  = weapon.attack_data.inflict_target_status[0][0];
        this.props["neutral status level"]  = weapon.attack_data.inflict_target_status[0][1];
        this.props["neutral status chance"]  = weapon.attack_data.inflict_target_status[0][2];
        this.props["fire status id"]  = weapon.attack_data.inflict_target_status[1][0];
        this.props["fire status level"]  = weapon.attack_data.inflict_target_status[1][1];
        this.props["fire status chance"]  = weapon.attack_data.inflict_target_status[1][2];
        this.props["ice status id"]  = weapon.attack_data.inflict_target_status[2][0];
        this.props["ice status level"]  = weapon.attack_data.inflict_target_status[2][1];
        this.props["ice status chance"]  = weapon.attack_data.inflict_target_status[2][2];
        this.props["lightning status id"]  = weapon.attack_data.inflict_target_status[3][0];
        this.props["lightning status level"]  = weapon.attack_data.inflict_target_status[3][1];
        this.props["lightning status chance"]  = weapon.attack_data.inflict_target_status[3][2];
        this.props["ground status id"]  = weapon.attack_data.inflict_target_status[4][0];
        this.props["ground status level"]  = weapon.attack_data.inflict_target_status[4][1];
        this.props["ground status chance"]  = weapon.attack_data.inflict_target_status[4][2];
        this.props["light status id"]  = weapon.attack_data.inflict_target_status[5][0];
        this.props["light status level"]  = weapon.attack_data.inflict_target_status[5][1];
        this.props["light status chance"]  = weapon.attack_data.inflict_target_status[5][2];
        this.props["dark status id"]  = weapon.attack_data.inflict_target_status[6][0];
        this.props["dark status level"]  = weapon.attack_data.inflict_target_status[6][1];
        this.props["dark status chance"]  = weapon.attack_data.inflict_target_status[6][2];
    }

    /**
     *
     *
     * @static
     * @param {any[]} booleans
     * @param {string[]} stringMap
     * @return {*} 
     * @memberof Weapon
     */
    static convertBooleanArrayToStringArray(booleans: string[] | number[], stringMap: string[]): string[]
    {
        return stringMap.filter((_x, i) => booleans[i]);
    }

    static constructQueryString(props: WeaponWikitext) {
        let query = "";
        const form = "Weapon";

        query = Object.entries(props)
            .map(([key, val]) => {
                return `${form}[${encodeURIComponent(key)}] += ${encodeURIComponent(val.toString())}`; //the + is a hack to allow + weapons to go through. not sure what exactly causes it, but lmao
            })
            .join("&");

        return query;
    }
}