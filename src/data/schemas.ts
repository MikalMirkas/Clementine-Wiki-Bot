/** 
 * @file Contains the schemas and relevant data structures for validating files.
 * Note that these are not JSON-Schemas, they are all interfaces with type guards.
*/

/*
    Combat Concepts
*/

interface StatusEffect {
    0: number, //ID
    1: number, //Level
    2: number, //Chance
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

export interface DamageModifier {
    strike_mod: number,
    ranged_mod: number,
    technic_mod: number
}

export interface EnemyAttackData {
    element_group: number,                  //element
    attack_list: [{
        id: number,
        type: 0|1,                          //0: ATP, 1: TP
        modifier: EnemyStatContribution,    //multiplicative for damage
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

interface EnemyStatContribution {
    strike_mod: number,
    technic_mod: number
}

export interface BossAttackData {
    attack_id: number,
    attack_modifier: BossStatContribution,
    status_effect: StatusEffect
}

interface BossStatContribution {
    strike_mod: number,
    accuracy: number,
    technic_mod: number
}

interface BossStatModifier {
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
        inflict_target_status: [StatusEffect,StatusEffect,StatusEffect,StatusEffect,StatusEffect,StatusEffect,StatusEffect];
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

/* 
    Entities
*/
export interface EnemyJson {
    name: string,
    id: number,
    element: [
        number,     //element ID
        number],    //unknown
    buff_data_list: [
        crown: BuffDataList,
        normal: BuffDataList,
        sword: BuffDataList,
        shield: BuffDataList,
        magic: BuffDataList,
        boot: BuffDataList
    ],
    hitbox_modifier: BossStatContribution[],
    attack_data: EnemyAttackData[]
}

export interface BossJson {
    boss_id: number,
    element: number,
    name: string,
    stat_modifier: BossStatModifier,
    attack_data: BossAttackData[],
    hitbox_modifier: BossStatContribution[]
}