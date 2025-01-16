/*
    Utility Functions
*/
/**
 * Converts a binary or boolean value to a "Cargo boolean" ("Yes"/"No").
 *
 * @param {(0|1|boolean)} boolean
 * @return {*} string ("Yes"/"No")
 */
function binaryToCargo(boolean: 0|1|boolean) {
    return boolean ? "Yes" : "No";
}

const positionToName = { //these are not arbitrary - they match the allowed values declared in the cargo stores
    sex: ["Male","Female"],
    race: ["Human","Newman","CAST","Beast"],
    class: ["Hunter","Ranger","Force","Fighgunner","Guntecher","Wartecher","Fortefighter","Fortegunner","Fortetecher","Protranser","Acrofighter","Acrotecher","Fighmaster","Gunmaster","Masterforce","Acromaster"],
    element: ["Neutral","Fire","Ice","Lightning","Ground","Light","Dark"],
};

/*
    Combat Concepts
*/

interface StatusEffect { 
    id: number,
    level: number,
    chance?: number
}

interface BuffDataList {
    stat_modifier: [
        hp: number,
        atp: number,
        ata: number,
        dfp: number,
        evp: number,
        mst: number,
        sta: number,
        lck: number,
        exp: number,
        meseta: number
    ],
    damage_resistance: [
        striking: number,
        range: number,
        technic: number,
        blast: number
    ]
    hit_flag_immunity: number[],
    status_resistance: number[]
}

interface EnemyAttackData {
    element_group: number,
    attack_list: [{
        id: number,
        type: 0|1, //0: ATP, 1: TP
        modifier: { //multiplicative
            damage_stat: number,
            accuracy: number,
        },
        element: {
            id: number,
            amount: number,
        },
        can_guard: 0|1,
        hit_flag: number,
        recovery_time: number,
        status_effect: StatusEffect
    }]
}

interface DamageContribution {
    strike_mod: number,
    ranged_mod: number,
    technic_mod: number
}

/*
    Economy / Storage Concepts
*/

interface LegacySellableItemJson {
    price: [
        buy_price: number,
        sell_price: number
    ]
}

interface SellableItemJson {
    buy_price: number,
    sell_price: number,
}

interface TradableJson {
    tradability: {
        can_sell: boolean,
        can_drop: boolean,
        can_trade: boolean,
        can_store: boolean,
    }
}

/**
 * Any item that can be stacked past 1.
 *
 * @interface StackableItemJson
 */
interface StackableItemJson {
    maximum_quantity: number,
}

/*
    Equipment Concepts
*/
interface EquippableJson {
    requirement: {
        stat: number;
        sex: [
            male: 0|1,
            female: 0|1
        ];
        race: [
            human: 0|1,
            newman: 0|1,
            cast: 0|1,
            beast: 0|1
        ];
        class: [
            hunter: 0|1,
            ranger: 0|1,
            force: 0|1,
            fighgunner: 0|1,
            guntecher: 0|1,
            wartecher: 0|1,
            fortefighter: 0|1,
            fortegunner: 0|1,
            fortetecher: 0|1,
            protranser: 0|1,
            acrofighter: 0|1,
            acrotecher: 0|1,
            fighmaster: 0|1,
            gunmaster: 0|1,
            masterforce: 0|1,
            acromaster: 0|1
        ];
    };
}

interface RequirementJson {
    requirement: {
        stat?: number; //Traps do not have a stat requirement. All other equipment does.
        sex_race: [
            human: 0|1,
            newman: 0|1,
            cast: 0|1,
            beast: 0|1,
            male: 0|1,
            female: 0|1
        ];
        type_restriction: [
            hunter: 0|1,
            ranger: 0|1,
            force: 0|1,
            fighgunner: 0|1,
            guntecher: 0|1,
            wartecher: 0|1,
            fortefighter: 0|1,
            fortegunner: 0|1,
            fortetecher: 0|1,
            protranser: 0|1,
            acrofighter: 0|1,
            acrotecher: 0|1,
            fighmaster: 0|1,
            gunmaster: 0|1,
            masterforce: 0|1,
            acromaster: 0|1
        ];
    };
}

/*
    Items
*/
/**
 * Anything that can be put into a player's inventory.
 * 
 * @export
 * @interface ItemJson
 */
export interface ItemJson {
    item_id: string,
    name: string,
    description: string,
    rarity: number,
    rank: number,
    sort_order: number, //wiki-irrelevant
    account_bound?:	number
}

export interface EventJson extends ItemJson {}

/*
    Items: Categories
*/
/**
 * An item that is classified as a Board.
 *
 * @interface BoardJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 */
export interface BoardJson extends ItemJson, SellableItemJson {
    //board max stacks are always 1, regardless of values set
    branch_type: number
}

/**
 * An item that is classified as a consumable Boost. Differs from normal consumables.
 *
 * @interface BoostJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {StackableItemJson}
 */
export interface BoostJson extends ItemJson, SellableItemJson, StackableItemJson {
    use_time: number,
    boost_table: [
        type: number,
            //Boost Types
            //0 : boost none
            //1 : boost experience
            //2 : boost mission_point
            //3 : boost photon_art
            //4 : boost meseta
            //5 : boost drop_rate
            //6 : boost rare mission chance
            //7 : boost rare enemy
        power: number,
    ]
}

/**
 * An item that is classified as a cosmetic.
 *
 * @interface CosmeticJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {TradableJson}
 */
interface CosmeticJson extends ItemJson, SellableItemJson, TradableJson {
    /* 
        Both Clothing and Parts do NOT use the ID of the item to determine the manufacturer, unlike all other items.
        Instead, it uses an explicit field to refer to an enum.

        0 = Kubara Product
        1 = Cubic Girl
        2 = Cubic Star
        3 = Cubic Mode
        4 = MATOI
        5 = MUTAN
        6 = MINAMO
        7 = ASFA
        8 = Do - GAIM
        9 = monivan
    */
        manufacturer: number,
        sex_race: [
            human: 0|1,
            newman: 0|1,
            cast: 0|1,
            beast: 0|1,
            male: 0|1,
            female: 0|1
        ];
        /* 
            0: No Check
            1: Check Short
            2: Check Long
        */
        arrow: [
            up: number,
            down: number
        ],
}

/**
 * An item that is classified as Clothes.
 *
 * @interface ClothingJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {TradableJson}
 * @extends {CosmeticJson}
 */
export interface ClothingJson extends ItemJson, SellableItemJson, TradableJson, CosmeticJson {
    style: {
        jp_style: boolean,
        appearance_type: number,
        appearance_id: [
            vanilla: string,
            aoti: string
        ],
        /*
            The colour field is an array of 15 fields, denoting the colour the clothing can appear in.
            It is in a 2 byte format. Each byte determines the colour. First byte is for the dominant color and vice-versa.

            0 = No color
            1 = L red
            2 = Red
            3 = Dark red
            4 = L green
            5 = Green
            6 = D green
            7 = L blue
            8 = Blue
            9 = D blue
            A = Black
            B = Gray
            C = White
            D = Yellow
            E = D yellow
            F = Purple
        */
        colour: string[]
    }
}

/**
 * An item that is classified as a CAST Part.
 *
 * @interface PartJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {TradableJson}
 * @extends {CosmeticJson}
 */
export interface PartJson extends ItemJson, SellableItemJson, TradableJson, CosmeticJson {
    style: {
        jp_style: boolean,
        appearance_type: number,
        appearance_id: string,
    }
}

/**
 * An item that is classified as a consumable that is usable out in fields.
 *
 * @interface ConsumableJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {StackableItemJson}
 */
export interface ConsumableJson extends ItemJson, SellableItemJson, StackableItemJson {
    action: number,
    use_condition: number,
    target_flag: [
        all: number,
        b: number,
        weapon: number,
        d: number
    ]
    affect_variable: number,
    affect_flag: [
        a: number,
        b: number,
        c: number,
        d: number,
        strength: number,
        player_condition: number,
        cure_status: number,
        resurrect: number
    ],
    status_effect: StatusEffect
}

/**
 * An item that is classified as a Grinder.
 *
 * @interface GrinderJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {StackableItemJson}
 */
export interface GrinderJson extends ItemJson, SellableItemJson, StackableItemJson {
    grind_rank: number,
    grind_quality: number,
}

/**
 * An item that is classified as a Line Shield.
 *
 * @interface LineshieldJson
 * @extends {ItemJson}
 * @extends {RequirementJson}
 * @extends {SellableItemJson}
 * @extends {TradableJson}
 */
export interface LineshieldJson extends ItemJson, RequirementJson, SellableItemJson, TradableJson {
    blocking: number,
    set_bonus_id?: [number, number, number, number];
    slot: [
        head: boolean,
        arm: boolean,
        body: boolean,
        extra: boolean
    ],
    element: [
        available: [
            neutral: boolean,
            fire: boolean,
            ice: boolean,
            lightning: boolean,
            ground: boolean,
            light: boolean,
            dark: boolean
        ],
        stat: { //all missing stats are treated as 0
            defense?: number,
            mental?: number,
            evasion?: number,
            endurance?: number,
            accuracy?: number,
            attack?: number,
            tech?: number,
        },
        drop_percent: [ //not the drop chance, but the bounds of the element that can drop on it
            minima: number,
            maxima: number
        ],
        shop_element: number,
        shop_percent: number,
    ]
}

/**
 * An item that is classified as a Material.
 *
 * @interface MaterialJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 * @extends {TradableJson}
 */
export interface MaterialJson extends ItemJson, SellableItemJson, TradableJson {   
}

/**
 * An item that has no special field to itself **in the JSON**. Examples include PA Discs and PM Devices.
 * 
 * @interface DummyJson
 * @extends {ItemJson}
 * @extends {SellableItemJson}
 */
interface DummyJson extends ItemJson, SellableItemJson {
    //The ID that is given from each disc presumably matches the ID for an equivalent Photon Art on the server.
}

export interface PADiscJson extends DummyJson {}
export interface PMDeviceJson extends DummyJson {}

/**
 * An item that is classified as a Room Decoration.
 *
 * @interface RoomDecorationJson
 * @extends {ItemJson}
 * @extends {TradableJson}
 */
export interface RoomDecorationJson extends ItemJson, TradableJson {
	decoration_type: number,
	decoration_id: number,
}

/**
 * An item that is classified as a Music Disc.
 *
 * @interface RoomMusicJson
 * @extends {ItemJson}
 */
export interface RoomMusicJson extends ItemJson {
    music_id: number
}

/**
 * An item that is classified as a Room Renovation Ticket.
 *
 * @interface RoomTicketJson
 * @extends {ItemJson}
 */
export interface RoomTicketJson extends ItemJson {
    ticket_data: [
        planet_id: number,
        room_id: number,
    ]
}

/**
 * An item that is classified as a consumable Trap.
 *
 * @interface TrapJson
 * @extends {ItemJson}
 * @extends {StackableItemJson}
 * @extends {RequirementJson}
 * @extends {TradableJson}
 */
export interface TrapJson extends ItemJson, StackableItemJson, RequirementJson, TradableJson {
    trap_data: {
        /*
            0: Damage Tier 1 (Normal)
            1: Status Tier 1 (Normal)
            2: Damage Tier 2 (G/EX)
            3: Status Tier 2 (G/EX)
            4: Firework
        */
        trap_type: number,
        trap_coefficient: number,
        max_target: number,
        max_radius: number,
        max_placement: number, //max: 5
        effect_id: number,
        status_effect: StatusEffect,
        detonation: {
            timer: number,
            remote: boolean,
            proximity: boolean,
            /*
                The repeat timer is the interval between hits.

                0: One hit
                15: Repeating, once every 500ms
            */
            repeat_timer: number,
            /* 
                The delay timer is the number of time (server ticks?) after detonation that the trap takes to do its effects.

                0: Immediate
                64: About 3 seconds (server runs at 20TPS?)
            */
            delay_timer: number,
        }
    }
}

/**
 * The shape of the stat field for an Arm Unit.
 *
 * @interface ArmUnitStat
 */
interface ArmUnitStat {
    att: number,
    acc: number,
    auto_damage_level: number,
    striking_range_modifier: number,
    striking_pp_modifier: number,
    striking_speed_modifier: number,
    gun_range_modifier: number,
    gun_pp_modifier: number,
    gun_speed_modifier: number,
}

/**
 * The shape of the stat field for a Body Unit.
 *
 * @interface BodyUnitStat
 */
interface BodyUnitStat {
    def: number,
    eva: number,
    element_boost: number, //elemental defense
    status_resist: [
        burn: boolean,
        poison: boolean,
        infection: boolean,
        shock: boolean,
        silence: boolean,
        freeze: boolean,
        sleep: boolean,
        stun: boolean,
        confuse: boolean,
        incapacitate: boolean,
        stat_up: boolean,
        stat_down: boolean
    ]
}

/**
 * The shape of the stat field for a Head Unit.
 *
 * @interface HeadUnitStat
 */
interface HeadUnitStat {
    tech: number,
    ment: number,
    technic_range_modifier: number,
    technic_pp_modifier: number,
    technic_speed_modifier: number,
}

/**
 * The shape of the stat field for an Extra Unit.
 *
 * @interface ExtraUnitStat
 */
interface ExtraUnitStat {
    end: number,
    auto_recovery_level: number,
    pp_recovery: number,
}

/**
 * An item that is classified as a Unit.
 *
 * @interface UnitJson
 * @extends {ItemJson}
 * @extends {TradableJson}
 */
export interface UnitJson extends ItemJson, TradableJson {
    manufacturer: number, //does this do anything?
    visual_effect?: number, //only on extra units
    requirement: {
        shield_rank: number,
        sex_race: [
            human: 0|1,
            newman: 0|1,
            cast: 0|1,
            beast: 0|1,
            male: 0|1,
            female: 0|1
        ];
        stat: ArmUnitStat | BodyUnitStat | HeadUnitStat | ExtraUnitStat,
        suv?: {
            meta_data: [
                a_id: number,
                b_id: number,
            ],
            model_id: number,
            flag: number,
            status_effect: StatusEffect,
            attack_range: number,
            attack_speed: number,
            attack_delay: number,
            attack_time: number,
            damage_modifier: number,
        }
    }
}

/**
 * An item that is classified as a Weapon.
 *
 * @export
 * @interface WeaponJson
 * @extends {ItemJson}
 * @extends {EquippableJson}
 * @extends {LegacySellableItemJson}
 */
export interface WeaponJson extends ItemJson, EquippableJson, LegacySellableItemJson {
    stat: {
        penetration_override: boolean;
        attack_variance: number;
        max_attack: number[];
        max_pp: number[];
        hit_rate: number;
        max_grind: number;
        grind_rate_variance?: number;
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
        rcsm_data?: {
            fire_time: number;
            penetration_flag: number;
            number_of_shot: number;
            bullet_type: number;
            bullet_velocity: number;
            bullet_size: number;
            bullet_range: number;
        };
        can_miss: boolean;
        can_back_attack: boolean;
        hit_flag: number;
        inflict_self_status: StatusEffect;
        inflict_target_status: [StatusEffect, StatusEffect, StatusEffect, StatusEffect, StatusEffect, StatusEffect, StatusEffect];
    };
    account_bound: 0|1;
    properties?: {
        can_sell: boolean;
        can_drop: boolean;
        can_trade: boolean;
        can_store: boolean;
        can_max_grind_down: boolean;
        can_grind_repair: boolean;
        can_reskin: boolean;
        can_player_shop: boolean;
    }
}

/**
 * The shape of what the Weapon PageForm looks like.
 */
interface WeaponWikitext {
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
}

/**
 * Data container for the Weapon PageForm.
 *
 * @class Weapon
 */
export class PageFormWeapon {
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
        "normal attack height": 0,
        "pen override": "No",
        //RCSM Props
        "rcsm fire time": 0,
        "rcsm penetration flag": 0,
        "rcsm number of shot": 0,
        "rcsm bullet type": 0,
        "rcsm bullet velocity": 0,
        "rcsm bullet size": 0,
        "rcsm bullet range": 0,
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
        this.props.sex = PageFormWeapon.convertBooleanArrayToStringArray(weapon.requirement.sex, positionToName.sex); 
        this.props.race = PageFormWeapon.convertBooleanArrayToStringArray(weapon.requirement.race, positionToName.race);
        this.props.class = PageFormWeapon.convertBooleanArrayToStringArray(weapon.requirement.class, positionToName.class);

        //stats
        this.props.variance = weapon.stat.attack_variance;
        this.props["attack grinds"] = weapon.stat.max_attack;
        this.props["pp grinds"] = weapon.stat.max_pp;
        this.props.accuracy = weapon.stat.hit_rate;
        this.props["max grind"] = weapon.stat.max_grind;
        this.props["max target"] = weapon.stat.max_target;
        this.props["pp tick"] = weapon.stat.pp_recovery_tick;
        this.props["pp normal"] = weapon.stat.pp_recovery_attack;
        this.props["pen override"] = binaryToCargo(weapon.stat.penetration_override);
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
        this.props["set bonus"] = weapon.meta_data.set_bonus_id || [0];
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
        this.props["self status id"]  = weapon.attack_data.inflict_self_status.id;
        this.props["self status level"]  = weapon.attack_data.inflict_self_status.level;
        this.props["self status chance"]  = weapon.attack_data.inflict_self_status.chance ?? 100;
        this.props["neutral status id"]  = weapon.attack_data.inflict_target_status[0].id;
        this.props["neutral status level"]  = weapon.attack_data.inflict_target_status[0].level;
        this.props["neutral status chance"]  = weapon.attack_data.inflict_target_status[0].chance ?? 100;
        this.props["fire status id"]  = weapon.attack_data.inflict_target_status[1].id;
        this.props["fire status level"]  = weapon.attack_data.inflict_target_status[1].level;
        this.props["fire status chance"]  = weapon.attack_data.inflict_target_status[1].chance ?? 100;
        this.props["ice status id"]  = weapon.attack_data.inflict_target_status[2].id;
        this.props["ice status level"]  = weapon.attack_data.inflict_target_status[2].level;
        this.props["ice status chance"]  = weapon.attack_data.inflict_target_status[2].chance ?? 100;
        this.props["lightning status id"]  = weapon.attack_data.inflict_target_status[3].id;
        this.props["lightning status level"]  = weapon.attack_data.inflict_target_status[3].level;
        this.props["lightning status chance"]  = weapon.attack_data.inflict_target_status[3].chance ?? 100;
        this.props["ground status id"]  = weapon.attack_data.inflict_target_status[4].id;
        this.props["ground status level"]  = weapon.attack_data.inflict_target_status[4].level;
        this.props["ground status chance"]  = weapon.attack_data.inflict_target_status[4].chance ?? 100;
        this.props["light status id"]  = weapon.attack_data.inflict_target_status[5].id;
        this.props["light status level"]  = weapon.attack_data.inflict_target_status[5].level;
        this.props["light status chance"]  = weapon.attack_data.inflict_target_status[5].chance ?? 100;
        this.props["dark status id"]  = weapon.attack_data.inflict_target_status[6].id;
        this.props["dark status level"]  = weapon.attack_data.inflict_target_status[6].level;
        this.props["dark status chance"]  = weapon.attack_data.inflict_target_status[6].chance ?? 100;

        //RCSM Data
        if(weapon.attack_data.rcsm_data)
        {
            this.props["rcsm fire time"] = weapon.attack_data.rcsm_data.fire_time;
            this.props["rcsm penetration flag"] = weapon.attack_data.rcsm_data.penetration_flag;
            this.props["rcsm number of shot"] = weapon.attack_data.rcsm_data.number_of_shot;
            this.props["rcsm bullet type"] = weapon.attack_data.rcsm_data.bullet_type;
            this.props["rcsm bullet velocity"] = weapon.attack_data.rcsm_data.bullet_velocity;
            this.props["rcsm bullet size"] = weapon.attack_data.rcsm_data.bullet_size;
            this.props["rcsm bullet range"] = weapon.attack_data.rcsm_data.bullet_range;
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


/* 
    Entities
*/
export interface EnemyJson {
    name: string,
    id: number,
    element: [number, number],
    buff_data_list: [
        normal: BuffDataList,
        crown: BuffDataList,
        sword: BuffDataList,
        shield: BuffDataList,
        magic: BuffDataList,
        boot: BuffDataList
    ],
    hitbox_modifier: DamageContribution[],
    attack_data: EnemyAttackData[]
}

/* type EnemyWikitext = {

}

export class PageFormEnemy {

}*/

interface BossAttackData {
    attack_id: number,
    attack_modifier: DamageContribution,
    status_effect: StatusEffect
}

export interface BossJson {
    boss_id: number,
    element: number,
    name: string,
    stat_modifier: [
        hp: number,
        atp: number,
        ata: number,
        tp: number,
        dfp: number,
        evp: number,
        mst: number,
        sta: number,
        exp: number,
        strike_mod: number,
        ranged_mod: number,
        technic_mod: number
    ],
    attack_data: BossAttackData[],
    hitbox_modifier: DamageContribution[]
}

/*
type BossWikitext = {

}

export class PageFormBoss {
    
}
*/