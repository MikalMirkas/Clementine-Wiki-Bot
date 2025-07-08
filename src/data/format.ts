/**
 * @file Contains the transformations and relevant data structures for converting the schemas to a form's format. 
 */

import { ItemJson, SynthesisJson, SynthesisTableJson, WeaponJson } from "./schemas";

/*
 * UTILITIES
 */

type CargoBoolean = "Yes" | "No";

/**
 * Converts a binary or boolean value to a "Cargo boolean" ("Yes"/"No").
 *
 * @export
 * @param {(0|1|boolean)} boolean
 * @return {*}  {CargoBoolean}
 */
export function binaryToCargo(boolean: 0|1|boolean): CargoBoolean {
    return boolean ? "Yes" : "No";
}

/* 
 * Magic index resolution table
 * These are used for resolving the JSON magic indexes and placing them in a Cargo list. 
 * 
 * TO-DO: Benchmark whether using Cargo lists are faster than making their own dedicated tables for them.
 */
export const magicIndexes = { 
    sex: ["Male","Female"],
    race: ["Human","Newman","CAST","Beast"],
    class: ["Hunter","Ranger","Force","Fighgunner","Guntecher","Wartecher","Fortefighter","Fortegunner","Fortetecher","Protranser","Acrofighter","Acrotecher","Fighmaster","Gunmaster","Masterforce","Acromaster"],
    element: ["Neutral","Fire","Ice","Lightning","Ground","Light","Dark"],
};

/* 
 * ACTORS
 */

/* export class PageFormEnemy {
    enemy_id: number;
    
    attack?: EnemyAttackData[];

    constructor(enemy_id: number, attack: EnemyAttackData[]) {
        this.enemy_id = enemy_id;
        this.attack = attack;
    }
}*/

/*export class PageFormBoss {
    boss_id: number;
    element: number;
    name: string;
    attack?: BossAttackData[];

    constructor() {

    }
} */

/*
 * SYNTHESIS
 */

class PageFormSynthesisTable {
    board_id: string;
    material_table: {
        material: string
        quantity: number
    }[] = [];
    item_id: string;
    element: number;
    element_percent?: number;
    constructor(parent: string, table: SynthesisTableJson) {
        for (let i = 0; i < table.material_table.length; i++) {
            const material = table.material_table[i][0];
            const quantity = table.material_table[i][1];

            this.material_table.push({
                material: material,
                quantity: quantity
            });
        }
        this.board_id = parent;
        this.item_id = table.item_id[0]; //god help us if this changes
        this.element = table.element;
        this.element_percent = table.element_percent;
    }
}

class PageFormSynthesis {
    board_id: string;
    success_rate: number;
    max_nb_craft: number;
    craft_time: number;
    bot_stat: {
        striking: number,
        ranged: number,
        technic: number,
        armor: number,
        unknown: number,
    };
    select_quantity: boolean;
    select_slot: [
        0|1|2, 0|1|2, 0|1|2, 0|1|2
    ];
    synthesis_table: PageFormSynthesisTable[];
    constructor(synthesis: SynthesisJson)
    {
        this.board_id = synthesis.board_id;
        this.success_rate = synthesis.success_rate;
        this.max_nb_craft = synthesis.max_nb_craft;
        this.craft_time = synthesis.craft_time;
        this.bot_stat = {
            striking: synthesis.bot_stat[0],
            ranged: synthesis.bot_stat[1],
            technic: synthesis.bot_stat[2],
            armor: synthesis.bot_stat[3],
            unknown: synthesis.bot_stat[4],
        };
        this.select_quantity = synthesis.select_quantity;
        this.select_slot = synthesis.select_slot;

        const synth_table: PageFormSynthesisTable[] = [];
        for (let i = 0; i < synthesis.synthesis_table.length; i++) {
            const element = new PageFormSynthesisTable(
                this.board_id, synthesis.synthesis_table[0][i]
            );
            synth_table.push(element);
        }
        this.synthesis_table = synth_table;
    }
}

/* 
 * ITEMS
 */

//TODO: Consider mixins instead for maintainability?

class PageFormItem {
    id: string;
    name: string;
    description: string;
    rarity: number;
    rank: number;
    "buy price": number;
    "sell price": number;
    "account bound"?: CargoBoolean;
    constructor(item: ItemJson) {
        //assignments
        this.id = item.item_id;
        this.name = item.name;
        this.description = item.description;
        this.rarity = item.rarity;
        this.rank = item.rank;
    }
}

/**
 * Data container for the Weapon PageForm.
 *
 * @export
 * @class PageFormWeapon
 */
export class PageFormWeapon extends PageFormItem {
    declare "account bound": CargoBoolean;
    "stat required": number;
    sex: string[] = [];
    race: string[] = [];
    class: string[] = [];
    variance: number;
    "attack grinds": number[] = [];
    "pp grinds": number[] = [];
    "grind rate variance": number;
    accuracy: number;
    "max grind": number;
    "max target": number;
    "pp tick": number;
    "pp normal": number;
    elements: string[] = [];
    atp: number;
    ata: number;
    dfp: number;
    tp: number;
    evp: number;
    mst: number;
    sta: number;
    "normal attack mod": number;
    "critical attack mod": number;
    "pa mod": number;
    "pp mod": number;
    "se mod": number;
    "striking range": number;
    "striking speed": number;
    "bullet range": number;
    "bullet speed": number;
    "technic range": number;
    "technic speed": number;
    miss: CargoBoolean;
    "back attack": CargoBoolean;
    hitflag: number;
    "self status id": number;
    "self status level": number;
    "self status chance": number;
    "neutral status id": number;
    "neutral status level": number;
    "neutral status chance": number;
    "fire status id": number;
    "fire status level": number;
    "fire status chance": number;
    "ice status id": number;
    "ice status level": number;
    "ice status chance": number;
    "lightning status id": number;
    "lightning status level": number;
    "lightning status chance": number;
    "ground status id": number;
    "ground status level": number;
    "ground status chance": number;
    "light status id": number;
    "light status level": number;
    "light status chance": number;
    "dark status id": number;
    "dark status level": number;
    "dark status chance": number;
    "equip hand": number;
    "weapon type flag": number;
    "set bonus": number[];
    "model id": number;
    "visual effect id": number;
    "sound bank id": number;
    "sound effect id": number;
    "weapon range": number;
    "normal attack width": number;
    "normal attack angle": number;
    "normal attack height": number;
    "pen override": CargoBoolean;
    //RCSM Props
    "rcsm fire time"?: number;
    "rcsm penetration flag"?: number;
    "rcsm number of shot"?: number;
    "rcsm bullet type"?: number;
    "rcsm bullet velocity"?: number;
    "rcsm bullet size"?: number;
    "rcsm bullet range"?: number;
    "generate": CargoBoolean  = "Yes";
    constructor(weapon: WeaponJson) {
        //item properties
        super({
            item_id: weapon.item_id,
            name: weapon.name,
            description: weapon.description,
            rarity: weapon.rarity,
            rank: weapon.rank,
            sort_order: weapon.sort_order
        });
        this.id = weapon.item_id;
        this.name = weapon.name;
        this.description = weapon.description;
        this.rarity = weapon.rarity;
        this.rank = weapon.rank;
        this["buy price"] = weapon.price[0];
        this["sell price"] = weapon.price[1];
        this["account bound"] = binaryToCargo(weapon.account_bound);

        //requirements
        this["stat required"] = weapon.requirement.stat;
        this.sex = PageFormWeapon.convertBooleanArrayToStringArray(weapon.requirement.sex, magicIndexes.sex); 
        this.race = PageFormWeapon.convertBooleanArrayToStringArray(weapon.requirement.race, magicIndexes.race);
        this.class = PageFormWeapon.convertBooleanArrayToStringArray(weapon.requirement.class, magicIndexes.class);

        //stats
        this.variance = weapon.stat.attack_variance;
        this["attack grinds"] = weapon.stat.max_attack;
        this["pp grinds"] = weapon.stat.max_pp;
        this.accuracy = weapon.stat.hit_rate;
        this["max grind"] = weapon.stat.max_grind;
        this["max target"] = weapon.stat.max_target;
        this["pp tick"] = weapon.stat.pp_recovery_tick;
        this["pp normal"] = weapon.stat.pp_recovery_attack;
        this["pen override"] = binaryToCargo(weapon.stat.penetration_override);
        this.elements = weapon.stat.available_element.map((_x, i) => magicIndexes.element[i]);
        this["grind rate variance"] = weapon.stat.grind_rate_variance ?? 0;

        //stats: modifiers
        this.atp = weapon.stat.modifier.atp;
        this.ata = weapon.stat.modifier.ata;
        this.dfp = weapon.stat.modifier.dfp;
        this.tp = weapon.stat.modifier.tp;
        this.evp = weapon.stat.modifier.evp;
        this.mst = weapon.stat.modifier.mst;
        this.sta = weapon.stat.modifier.sta;
        this["normal attack mod"] = weapon.stat.modifier.normal_attack;
        this["critical attack mod"] = weapon.stat.modifier.critical_attack;
        this["pa mod"] = weapon.stat.modifier.pa_damage;
        this["pp mod"] = weapon.stat.modifier.pp_damage;
        this["se mod"] = weapon.stat.modifier.se_rate;
        this["striking range"] = weapon.stat.modifier.striking_range;
        this["striking speed"] = weapon.stat.modifier.striking_speed;
        this["bullet range"] = weapon.stat.modifier.bullet_range;
        this["bullet speed"] = weapon.stat.modifier.bullet_speed;
        this["technic range"] = weapon.stat.modifier.technic_range;
        this["technic speed"] = weapon.stat.modifier.technic_speed;

        //metadata
        this["equip hand"] = weapon.meta_data.equip_hand;
        this["weapon type flag"] = weapon.meta_data.weapon_type_flag;
        this["set bonus"] = weapon.meta_data.set_bonus_id || [0];
        this["model id"] = weapon.meta_data.model_id;
        this["visual effect id"] = weapon.meta_data.visual_effect_id;

        this["sound bank id"] = weapon.meta_data.sound_effect_id[0];
        this["sound effect id"] = weapon.meta_data.sound_effect_id[1];

        this["weapon range"] = weapon.meta_data.hit_box[0];
        this["normal attack width"] = weapon.meta_data.hit_box[1];
        this["normal attack angle"] = weapon.meta_data.hit_box[2];
        this["normal attack height"]  = weapon.meta_data.hit_box[3];

        //attack data
        this.miss = binaryToCargo(weapon.attack_data.can_miss);
        this["back attack"] = binaryToCargo(weapon.attack_data.can_back_attack);
        this.hitflag = weapon.attack_data.hit_flag;
        this["self status id"]  = weapon.attack_data.inflict_self_status[0];
        this["self status level"]  = weapon.attack_data.inflict_self_status[1];
        this["self status chance"]  = weapon.attack_data.inflict_self_status[2] ?? 100;
        this["neutral status id"]  = weapon.attack_data.inflict_target_status[0][0];
        this["neutral status level"]  = weapon.attack_data.inflict_target_status[0][1];
        this["neutral status chance"]  = weapon.attack_data.inflict_target_status[0][2] ?? 100;
        this["fire status id"]  = weapon.attack_data.inflict_target_status[1][0];
        this["fire status level"]  = weapon.attack_data.inflict_target_status[1][1];
        this["fire status chance"]  = weapon.attack_data.inflict_target_status[1][2] ?? 100;
        this["ice status id"]  = weapon.attack_data.inflict_target_status[2][0];
        this["ice status level"]  = weapon.attack_data.inflict_target_status[2][1];
        this["ice status chance"]  = weapon.attack_data.inflict_target_status[2][2] ?? 100;
        this["lightning status id"]  = weapon.attack_data.inflict_target_status[3][0];
        this["lightning status level"]  = weapon.attack_data.inflict_target_status[3][1];
        this["lightning status chance"]  = weapon.attack_data.inflict_target_status[3][2] ?? 100;
        this["ground status id"]  = weapon.attack_data.inflict_target_status[4][0];
        this["ground status level"]  = weapon.attack_data.inflict_target_status[4][1];
        this["ground status chance"]  = weapon.attack_data.inflict_target_status[4][2] ?? 100;
        this["light status id"]  = weapon.attack_data.inflict_target_status[5][0];
        this["light status level"]  = weapon.attack_data.inflict_target_status[5][1];
        this["light status chance"]  = weapon.attack_data.inflict_target_status[5][2] ?? 100;
        this["dark status id"]  = weapon.attack_data.inflict_target_status[6][0];
        this["dark status level"]  = weapon.attack_data.inflict_target_status[6][1];
        this["dark status chance"]  = weapon.attack_data.inflict_target_status[6][2] ?? 100;

        //RCSM Data
        if(weapon.attack_data.rcsm_data)
        {
            this["rcsm fire time"] = weapon.attack_data.rcsm_data.fire_time;
            this["rcsm penetration flag"] = weapon.attack_data.rcsm_data.penetration_flag;
            this["rcsm number of shot"] = weapon.attack_data.rcsm_data.number_of_shot;
            this["rcsm bullet type"] = weapon.attack_data.rcsm_data.bullet_type;
            this["rcsm bullet velocity"] = weapon.attack_data.rcsm_data.bullet_velocity;
            this["rcsm bullet size"] = weapon.attack_data.rcsm_data.bullet_size;
            this["rcsm bullet range"] = weapon.attack_data.rcsm_data.bullet_range;
        }
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

    static constructQueryString(props: PageFormWeapon) {
        let query = "";
        const form = "Weapon";

        query = Object.entries(props)
            .map(([key, val]) => {
                if(val != undefined) {
                    return `${form}[${encodeURIComponent(key)}] += ${encodeURIComponent(val.toString())}`; //the + is a hack to allow + weapons to go through. not sure what exactly causes it, but lmao
                }
            })
            .join("&");

        return query;
    }
}

export class PageFormLineShield extends PageFormItem {

}
export class PageFormPlayerConsumable extends PageFormItem {
    
}
export class PageFormPhotonArtDisc extends PageFormItem {
    
}
export class PageFormMaterial extends PageFormItem {
    
}
export class PageFormUnit extends PageFormItem {
    
}
export class PageFormCosmetic extends PageFormItem {
    
}
export class PageFormRoomConsumable extends PageFormItem {
    
}
export class PageFormTrap extends PageFormItem {
    
}
export class PageFormBoard extends PageFormItem {
    
}
export class PageFormPartnerMachineDevice extends PageFormItem {
    
}
export class PageFormGrinder extends PageFormItem {
    
}
export class PageFormBoost extends PageFormItem {
    
}
export class PageFormEvent extends PageFormItem {
    
}