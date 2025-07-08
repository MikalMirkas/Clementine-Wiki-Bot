/** 
 * @file Contains the IDs to be skipped during processing.
 * This current filter is a stopgap and is currently planned to be removed in a future version.
*/

export const blacklist = [
    "01020000", //Knuckles (fix me)
    "01011A03", "01013E03", "01013F03", "01014003", "01014103", //Test weapons (Daisy Chain)
    "01020D03", "01022103", "01022203", "01022303", "01022403", //Test weapons (Judgment Hearts)
    "01032D03", "01032E03", "01032F03", "01031603", "01033003", "01033103", "01033203", "01033303", //Test weapons (Ultimate Knights)
    "01042003", "01042103", "01042203", "01042303", "01042903", //Test weapons (Shippudotohs)
    "01052303", "01052403", "01052503", "01050B03", "01051903", //Test weapons (End-Ifs)
    "01071A03", "01072B03", "01072C03", "01072D03", "01072E03", "01072F03", //Test weapons (Sacrificial Daggers)
    "01081103", "01082003", "01082103", "01082203", "01082303", //Test weapons (Gleaming Punishment)
    "01064303", "01064403", "01064203", "01061D03", //Test weapons (Celestial Blades/Blaze)
    "01092F03", "01095D03", "01095E03", //Test weapons (Lucifers)
    "010A0E03", "010A2703", "010A2803", "010A2903", //Test weapons (Gilgames)
    "010B1A03", //Test weapons (Gleaming Trickster)
    "010C0903", "010C1903", "010C1A03", "010C1B03", "010C1C03", //Test weapons (Bladed Paradisos)
    "010D0C03", "010D1E03", //Test weapons (Draconic Ages)
    "010E1E03", "010E1F03", "010E2003", "010E2A03", "010E2B03", //Test weapons (Astral Risers)
    "010F0B03", "010F1803", "010F1903", "010F1A03", "010F1B03", //Test weapons (Infinite Gazers)
    "01100903", "01101A03", "01101C03", "01101D03", //Test weapons (Divine Raikous)
    "01112003", "01112103", "01112203", "01112303", //Test weapons (SSPN Launchers)
    "01121603", "01121703", "01121803", "01121903", //Test weapons (Satellite Starmines)
    "01131A03", "01131B03", "01131C03", "01131D03", "01132B03",  //Test weapons (Dual Mistilteinns)
    "01141013", "01143003", //Test weapons (Cursed Mistilteinns)
    "01161703", "01161903", //Test weapons (Mirage Crusades)
    "01170B03", "01171D03", "01171E03", "01171F03", "01172003",  //Test weapons (Final Fenders)
    "011B1603", "011B2503", "011B2603", "011B2703", "011B2803", "011B2903", //Test weapons (Variable Launchers)
    "01183503", "01182503", "01182303", "01182403", //Test weapons (Archservants)
    "01184B03", "01184A03", "01184903", "01184C03", //Test weapons (Eternal Psychodrives)
    "01185003", "01184F03", "01184E03", "01184D03", //Test weapons (Chao Staves)
    "01192003", "01193103", "01193203", "01193303", "01193403", //Test weapons (Cursed Barbatos)
    "011A1C03", "011A2503", "011A2603", "011A2703", "011A2803", //Test weapons (Sunrisers)
    "01180F03", "01013A03", "01012103", "01021A03", "01031003", "01030D03", "01030600", "01063603", "01062F03", "01081503", "01081D03", "01094A03", "01094B03", "01094103", "01095703", "01092803", "01091B03", "01151D03", "01150603", "010B0B03", "010B1503", "01141F03", "01142603", "01161103", "01161003", "01161303", "01161403", "01161603", "01160E03", "01160F03", "01161503", "01171903", "011B0302", "011A1303", "011A1603", //Unreleased weapons
    "011BFE03", "011BFD03", "01043D03", "0114FF00", "011BFF03", "01060C01", "010CFF03", "0105FF03", "0115FF03", //Debug/admin weapons
    "011A1B03", "010F0C03", "01022603", "01141903", "01151403", "01171003", "01192303", "01192303", //Duplicate weapons
];

//Any weapon that has a name field that matches any of the following strings will have a page created that is suffixed with its rarity.
export const ambiguations = [
    //Customize Weapons
    "Daisy Chain",
    "Judgment Hearts",
    "Ultimate Knight",
    "Shippudotoh",
    "End-If",
    "Celestial Blades",
    "Sacrificial Daggers",
    "Gleaming Punishment",
    "Lucifer",
    "Gilgames",
    "Gleaming Trickster",
    "Bladed Paradiso",
    "Draconic Age",
    "Astral Riser",
    "Infinite Gazer",
    "Divine Raikou",
    "SSPN Launcher",
    "Satellite Starmine",
    "Dual Mistilteinn",
    "Cursed Mistilteinn",
    "Wicked Exime",
    "Mirage Crusade",
    "Final Fender",
    "Variable Launcher",
    "Archservant",
    "Cursed Barbatos",
    "Sunriser",
];

export const new_style_pages = [
    "01011401", //Aoryu/U+
    "01011900", //De Ragan Slayer/U+
    "01017003", //Cursed Dark Flow/U+
    "01017103", //Cursed Dark Flow/U*+
    "01017203", //Heart of Despair/U+
    "01017303", //Tradicion/U+
    "01017403", //Tradicion/U*+
    "01017503", //Ga Vorge/U+
    "01017603", //Holynight Sion/U+
    "01017703", //Chainsawd/U+
    "01017803", //Forging Hearts/U+
    "01017903", //Zanba/U+
    "01017A03", //Dunas Fluge/U+
    "01017B03", //Dunas Fluge/U*+
    "01017C03", //Genfu/U+
    "01017D03", //True Yonohate/U+
    "01017E03", //True Akatsuki/U+
    "01011A00", //Hanzo/U+
    "01011B00", //Creasword/U+
    "01011C00", //Gran Orca/U+
    "01011501", //Cresaud/U+
    "01011601", //Shuzak/U+
    "01011701", //Haktora/U+
    "01011801", //Zantetsu/U+
    "01010C02", //Soda Riban/U+
    "01010D02", //Soda Crea/U+
    "01017F03", //Flamberge/U+
    "01018003", //Steel Hearts/U+
    "01018103", //Agito Repca/U+
    "01018203", //Magana Slayer/U+
    "01018303", //Kokuintou Kagachi/U+
    "01018403", //Kokuintou Houzaki/U+
    "01018503", //Dragon Slayer/U+
    "01018603", //Dyran Slayer/U+
    "01018703", //Varl Combat Mode/U+
    "01018803", //Madam's Parasole
    "01018903", //Lost Breaker/U+
    "01018A03", //Tsumikiri Nodachi/U+
    "01018B03", //Ancient Saber/U+
    "01021502", //Gudda Igga/U+
    "01023803", //God Hands/U+
    "01023903", //Gear Experience/U+
    "01023A03", //Master Galactis/U+
    "01023B03", //Spark Fists/U+
    "01023C03", //Brave Knuckles/U+
    "01023D03", //Drill Knuckles/U+
    "01023E03", //Melan Knuckles/U+
    "01023F03", //Sacred Dusters/U+
    "01024003", //Grinna Bete Fists/U+
    "01020900", //Brain Spiral/U+
    "01020A00", //Weisse Komet/U+
    "01020901", //Brebacle/U+
    "01021602", //Gudda Breba/U+
    "01021702", //Gudda Skela/U+
    "01021802", //Gudda Hon/U+
    "01024103", //Juggernaut/U+
    "01024203", //Pom-pom Smash/U+
    "01024303", //Glorious Wings/U+
    "01024403", //Steam Knuckles/U+
    "01024503", //Fighting Beat/U+
    "01024603", //Puyo Pop Fists/U+
    "01024703", //Vermillion/U+
    "01024803", //Rocket Punchers/U+
    "01024903", //Degga Knuckles/U+
    "01030D01", //Gekitsnata/U+
    "01031702", //Muktengek/U+
    "01031802", //Mugunburga/U+
    "01034603", //Bloodspear V. Bram/U+
    "01034703", //Bloodspear V. Bram/U*+
    "01034803", //Theiadoru/U+
    "01034903", //Grandia/U+
    "01034A03", //Knight Lancer/U+
    "01034B03", //Cho Hee/U+
    "01034C03", //Xmas Tree Spear/U+
    "01034D03", //Rep Nasur/U+
    "01034E03", //Halva Tornado/U+
    "01032000", //Zooming Scissor/U+
    "01030E01", //Gungnata/U+
    "01030F01", //Bajunata/U+
    "01031001", //Lanzanata/U+
    "01031902", //Muktrand/U+
    "01031A02", //Alucart/U+
    "01034F03", //Trident Crusher/U+
    "01035003", //Ubakrada Headbutt/U+
    "01035103", //Weisse Lilie/U+
    "01035203", //Chrome Lance/U+
    "01035303", //Mobius Drill/U+
    "01035403", //Hand Spear/U+
    "01035503", //Regal Lancer/U+
    "01035603", //Witch Broom/U+
    "01041300", //Sweet Death/U+
    "01044303", //Ultimate Chain/U+
    "01044403", //Ebony Nyoibo/U+
    "01044503", //Demolition Comet/U+
    "01044603", //Double Waber/U+
    "01044703", //Rengokuto Rensa/U+
    "01044803", //Rengokuto Rensa/U*+
    "01044903", //Vivienne/U+
    "01044A03", //Unity Will/U+
    "01044B03", //Carriguine-Rucar/U+
    "01044C03", //Meteor Cudgel/U+
    "01041400", //Double Agito/U+
    "01041500", //Ragan-Ragan/U+
    "01041001", //Mehren Nenka/U+
    "01044D03", //Absolute Blade/U+
    "01044E03", //Ten'imuso/U+
    "01044F03", //Girasole/U+
    "01045003", //Double Cannon/U+
    "01045103", //Double Cannon/U*+
    "01045203", //Winning Apple/U+
    "01045303", //Romulus/U+
    "01045403", //Ashviens/U+
    "01045503", //Jinrai/U+
    "01051C02", //Ank Foil+/U+
    "01051D02", //Ank Dedda/U+
    "01051E02", //Gale Bringer/U+
    "01051F02", //Gale Bringer/U*+
    "01053903", //Ill Gill Testament/U+
    "01053A03", //Bigetsu/U+
    "01053B03", //Roasted Welldone/U+
    "01053C03", //Svaltia Tomahawk/U+
    "01053D03", //Ank Kakka/U+
    "01053E03", //Laia Axe/U+
    "01053F03", //Bil De Axe/U+
    "01054003", //Bil De Horn Axe/U+
    "01054103", //Gaia Crusher/U+
    "01050A01", //Okanoh/U+
    "01050B01", //Badernoh/U+
    "01050C01", //Ikazuchi/U+
    "01052002", //Ank Tomho/U+
    "01052102", //Ank Buti/U+
    "01052202", //Ank Zagza/U+
    "01054203", //Calamity Soul/U+
    "01054303", //Pretty Hearts Club/U+
    "01054403", //Lollipop/U+
    "01054503", //Boost Impact/U+
    "01054603", //Piko Piko Hammer/U+
    "01054703", //Twilight Rune/U+
    "01054803", //Imperial Pick/U+
    "01054903", //Morat Machinas/U+
    "01061C00", //Two-headed Ragnus/U+
    "01061D00", //Yuzu & Iyokan/U+
    "01066F03", //Ameno Murakumo/U+
    "01067003", //World of Guardians/U+
    "01067103", //Twin Kendo/U+
    "01067203", //Twin Survivors/U+
    "01067303", //Ignis+/U+
    "01067403", //Sangeyasha/U+
    "01067503", //Sangeyasha/U*+
    "01067603", //Divine Yaoroz/U+
    "01067703", //Delnadiblaze/U+
    "01067803", //Red Twin Saber/U+
    "01067903", //Eternal Dimension/U+
    "01067A03", //Demon's Disaster/U+
    "01061E00", //Heavy Twins/U+
    "01061F00", //Twin Crea Saber/U+
    "01062000", //Tyrant Spada/U+
    "01061001", //Ryo-Creasabra/U+
    "01061002", //Alseva Borega/U+
    "01061102", //Alseva Cresa/U+
    "01067B03", //Menesis Cruz/U+
    "01067C03", //Esperanza/U+
    "01067D03", //Dios Despertar/U+
    "01067E03", //Hyakkaryolan/U+
    "01067F03", //Gemini Stars/U+
    "01068003", //Kagu-tsuchi/U+
    "01068103", //Melton's Skillet Set/U+
    "01068203", //Setsuko's Skillet Set/U+
    "01068303", //Astral Blades/U+
    "01068403", //Lambda Excalibur/U+
    "01068503", //Lambda Excalibur/U*+
    "01068603", //Twin Durandal/U+
    "01068703", //Orochi Agito/U+
    "01068803", //Twin Dil Edge/U+
    "01068903", //Dilnazen Blades/U+
    "01068A03", //Del Jagnus/U+
    "01068B03", //Twin Harisen Fans/U+
    "01068C03", //Ikotenyoku/U+
    "01068D03", //Jizai/U+
    "01068E03", //Twin Distortion/U+
    "01074703", //Nanoblast Scythes/U+
    "01074803", //Nanoblast Scythes/U*+
    "01074903", //Lavis Cyclone/U+
    "01074A03", //Pan Arms Daggers/U+
    "01074B03", //Ra Bangler/U+
    "01074C03", //Twin Kamui/U+
    "01074D03", //Al Tippies/U+
    "01074E03", //Nightmare Blood/U+
    "01074F03", //Nightmare Blood/U*+
    "01075003", //Tsumikiri Hyori/U+
    "01075103", //Brandish/U+
    "01075203", //Rappy Tippies/U+
    "01075303", //Assassin Cross/U+
    "01070B00", //Lumiess Blau/U+
    "01070C00", //Twin Crea Dagger/U+
    "01071201", //Gizaha-zashi/U+
    "01071301", //Togeha-zashi/U+
    "01071401", //Tamagiri-zashi/U+
    "01070902", //Aldaga Cresa/U+
    "01075403", //S-Red Blades/U+
    "01075503", //S-Gold Blades/U+
    "01075603", //S-Beat Blades/U+
    "01075703", //Dagger of Serafi/U+
    "01075803", //Blitz Slugger/U+
    "01075903", //Floating Edges/U+
    "01075A03", //Featherhands/U+
    "01075B03", //Twin Kunai/U+
    "01075C03", //Edge Quolia/U+
    "01081101", //Shide-Misaki/U+
    "01082202", //Twin Phyteuma/U+
    "01082302", //Arza Diaddo/U+
    "01083C03", //Arza Diaddo/U*+
    "01083D03", //Twin Gabridant/U+
    "01083E03", //Twin Gabridant/U*+
    "01083F03", //Twin Falclaw+/U+
    "01084003", //Twin Diabolic/U+
    "01084103", //Heart of Poumn/U+
    "01084203", //Twin Kitty Claw/U+
    "01084303", //Twin Kitty Claw/U*+
    "01084403", //King of Blood/U+
    "01084503", //EX Bete Blades/U+
    "01081201", //Ran-Misaki/U+
    "01081301", //Fuka-Misaki/U+
    "01081401", //Yamata-Misaki/U+
    "01082402", //Arza Garbot/U+
    "01082502", //Twin Impact Claws/U+
    "01084603", //Morning Glory/U+
    "01084703", //Assassin Traitor/U+
    "01084803", //Nightmare Dust/U+
    "01084903", //Phantom Mist/U+
    "01084A03", //Dual 'Ntar Claws/U+
    "01084B03", //Go Booma Claws/U+
    "01084C03", //Jigo Booma Claws/U+
    "01084D03", //Devil Chains/U+
    "01084E03", //Dual Phantasm/U+
    "01091C00", //Alis/U+
    "01091D00", //Crimson/U+
    "01098803", //Bloody Flow/U+
    "01098903", //Kusanagi/U+
    "01098A03", //Kan Kyu/U+
    "01098B03", //Amatsu-mikaboshi/U+
    "01098C03", //Kuraokami/U+
    "01098D03", //Karakasa Jikomi/U+
    "01098E03", //Valkyrian Lance/U+
    "01098F03", //Elec Distortion/U+
    "01099003", //Excalibre/U+
    "01099103", //Excalibre/U*+
    "01099203", //Fluorescent Bulb/U+
    "01099303", //Demonic Laevateinn/U+
    "01099403", //Holy Elsydeon/U+
    "01099503", //Delnadiblade/U+
    "01099603", //Shippujinlai/U+
    "01099703", //Gekkavijin/U+
    "01091E00", //Jitseen/U+
    "01091F00", //Tiga Ragan/U+
    "01092000", //Apocalypse/U+
    "01092100", //Crea Saber/U+
    "01091001", //Creasabra/U+
    "01090C02", //Seva Cresa/U+
    "01090D02", //Seva Borega/U+
    "01099803", //Evil Satanas/U+
    "01099903", //Eclipse Star/U+
    "01099A03", //Weisheit/U+
    "01099B03", //Rengokuto Ensa/U+
    "01099C03", //Rengokuto Guren/U+
    "01099D03", //Ice Warden/U+
    "01099E03", //Yasha/U+
    "01099F03", //Sange Shin'uchi/U+
    "0109A003", //Saguraki Blade/U+
    "0109A103", //Skia Blade/U+
    "0109A203", //Traicion/U+
    "0109A303", //Axeon/U+
    "0109A403", //Melton's Frying Pan/U+
    "0109A503", //Setsuko's Skillet/U+
    "0109A603", //Kotetsu/U+
    "0109A703", //Wing Saber
    "0109A803", //Dilnazen Edge
    "0109A903", //Bangasa Jikomi
    "0109AA03", //Guren/U+
    "0109AB03", //Shouren/U+
    "010A4903", //Nanoblast Edge/U+
    "010A4A03", //Nanoblast Edge/U*+
    "010A4B03", //Lavis Slasher/U+
    "010A4C03", //Migium Dagger/U+
    "010A4D03", //Ra Bangle/U+
    "010A4E03", //Kamui/U+
    "010A4F03", //Al Tip/U+
    "010A5003", //Floating Dagger/U+
    "010A5103", //Kunai/U+
    "010A5203", //Baselard/U+
    "010A5303", //Rappy Tip/U+
    "010A5403", //Dilla Blade/U+
    "010A5503", //Assassin Dagger/U+
    "010A0D00", //Blumier/U+
    "010A0E00", //Crea Dagger/U+
    "010A1201", //Deva-zashi/U+
    "010A1301", //Shiraha-zashi/U+
    "010A1401", //Deraga-zashi/U+
    "010A0B02", //Gimlet/U+
    "010A0C02", //Daga Cresa/U+
    "010A5603", //S-Red Dagger/U+
    "010A5703", //S-Gold Dagger/U+
    "010A5803", //S-Beat Dagger/U+
    "010A5903", //Featherhand/U+
    "010A5A03", //Halp Serafi/U+
    "010A5B03", //Blood Edge/U+
    "010A5C03", //Kan'na Kamui/U+
    "010A5D03", //Spike Slugger/U+
    "010A5E03", //Reaping Stinger/U+
    "010B1101", //Ohga-Misaki/U+
    "010B3103", //Gabridant/U+
    "010B3203", //Gabridant/U*+
    "010B3303", //Zaks Diaddo/U+
    "010B3403", //Falclaw/U+
    "010B3503", //Phantasma Gauntlet/U+
    "010B3603", //Saint Alys/U+
    "010B3703", //Shark Puppet/U+
    "010B3803", //Drago Puppet/U+
    "010B3903", //Fenrir/U+
    "010B3A03", //Monster Killer/U+
    "010B1102", //Impact Claw/U+
    "010B1201", //Misaki/U+
    "010B1301", //Daiga-Misaki/U+
    "010B1401", //Zanshu-Misaki/U+
    "010B1202", //Zaks Gabot/U+
    "010B1302", //Phytuema/U+
    "010B3B03", //Assassin Claw/U+
    "010B3C03", //Go Booma Claw/U+
    "010B3D03", //Jigo Booma Claw/U+
    "010B3E03", //Faz'ntar Head/U+
    "010B3F03", //Seg'ntar Head
    "010B4003", //Evil Fang/U+
    "010C0C00", //Dilas Whip/U+
    "010C0D00", //Bloody Shower/U+
    "010C0E00", //Peace Breaker/U+
    "010C2B03", //Golden Skeletos/U+
    "010C2C03", //Golden Skeletos/U*+
    "010C3003", //Splendor Rose/U+
    "010C2D03", //Big Fisher/U+
    "010C2E03", //Ouroboros/U+
    "010C2F03", //Vitace Reacher/U+
    "010C0F00", //Hurricane Spinner/U+
    "010C1000", //Sonic Splendor/U+
    "010C1401", //Algoretzha/U+
    "010C1602", //Vish/U+
    "010C1702", //Vish Adan/U+
    "010C1802", //Vish Feara/U+
    "010C1902", //Vish Diraga/U+
    "010C3103", //Griena Cracker/U+
    "010C3203", //Cutie Crown/U+
    "010C3303", //Accodion Whip/U+
    "010C3403", //Gigas Spinner/U+
    "010C3503", //Ophidian Medusa/U+
    "010D3A03", //Furinkazan/U+
    "010D3B03", //Soul Slasher/U+
    "010D3C03", //Mjolnir/U+
    "010D3D03", //Brother-in-Arms/U+
    "010D3E03", //Fuma Shuriken/U+
    "010D3F03", //Rep Yupke/U+
    "010D4003", //Catastrophe/U+
    "010D4103", //Nagesen/U+
    "010D4203", //Blitzgazer/U+
    "010D4303", //Uchi-wa/U+
    "010D4403", //Uchi-wa/U*+
    "010D4503", //Enma-hiken/U+
    "010D0600", //Tri Magenta/U+
    "010D1301", //Hiken/U+
    "010D1401", //Sylpheed/U+
    "010D1501", //Sanzu-hiken/U+
    "010D1601", //Shura-hiken/U+
    "010D1701", //Asura-hiken/U+
    "010D1801", //Kamade-hiken/U+
    "010D4703", //Divine Breath/U+
    "010D4803", //Toop Yupke/U+
    "010D4903", //Starfish Slicer/U+
    "010D4A03", //Rappy Fan/U+
    "010D4B03", //Maisen/U+
    "010D4C03", //Quint Dependance/U+
    "010E1600", //Killer Elite/U+
    "010E1700", //Firearm/U+
    "010E3903", //Firearm/U*+
    "010E3102", //M&A31/U+
    "010E3A03", //Anti-Android Rifle/U+
    "010E3B03", //Anti-Android Rifle/U*+
    "010E3C03", //Cluster Sword Rifle/U+
    "010E3D03", //Holynight Fucil/U+
    "010E3E03", //Snow Queen/U+
    "010E1800", //Assassin/U+
    "010E1900", //Blackbull/U+
    "010E1A00", //Rattlesnake/U+
    "010E0E01", //Mizurakihoh/U+
    "010E0F01", //Metford/U+
    "010E3F03", //Darkness Ray/U+
    "010E4003", //Rebellion/U+
    "010E4103", //Rebellion/U*+
    "010E4203", //Gallian/U+
    "010E4303", //Command Blazer/U+
    "010E4403", //Black Meteora/U+
    "010E4503", //Rouge Burst/U+
    "010E4603", //Leonia/U+
    "010E4703", //Enfield/U+
    "010E4803", //M25SE Missouri/U+
    "010E4903", //Yasminokov 3000/U+
    "010F1D02", //Egga Pakuda/U+
    "010F1E02", //Shigga Desta/U+
    "010F3003", //Dark Meteor Shot/U+
    "010F3103", //Yasminokov 4000X/U+
    "010F3203", //Splash Falz/U+
    "010F3303", //Missouri S012/U+
    "010F3403", //Wide Smack/U+
    "010F3503", //Wide Smack/U*+
    "010F3603", //Final Impact/U+
    "010F3703", //Van Brella/U+
    "010F3803", //Steam Burst/U+
    "010F3903", //C.L.E.M. Needle/U+
    "010F3A03", //Shigga Pakudac/U+
    "010F3B03", //EX Bete Shotty/U+
    "010F1200", //Heimdall/U+
    "010F1300", //Garland/U+
    "010F1400", //Spread Gale/U+
    "010F2002", //Shigga Boma/U+
    "010F2102", //Shigga Baret/U+
    "010F2202", //Shigga Nemesis/U+
    "010F3C03", //Rumbling May/U+
    "010F3D03", //Hydro Gatlas/U+
    "010F3E03", //Dark Meteor Shot/U*+
    "01101201", //Izanagi/U+
    "01102B03", //Benedict/U+
    "01102C03", //Holynight Arrow/U+
    "01102D03", //Poron Poron/U+
    "01102E03", //Southern Cross/U+
    "01102F03", //Kohibumiteri/U+
    "01100900", //Alpadora/U+
    "01100A00", //Radius Arca/U+
    "01101301", //Hanmateri/U+
    "01101401", //Hirokteri/U+
    "01101501", //Rikauteri/U+
    "01101601", //Nasuyoteri/U+
    "01103003", //Rygutass Storm/U+
    "01103103", //Vapas Shooter/U+
    "01103203", //Hello Polty/U+
    "01103303", //Lavis Arrow/U+
    "01103403", //Meteos Arrow/U+
    "01103503", //Artifact/U+
    "01114103", //Baranz Launcher/U+
    "01114203", //Shooting Drive/U+
    "01114303", //Song for Dad/U+
    "01114403", //Octo Bazooka/U+
    "01114503", //Genocide Bunker/U+
    "01114603", //Rappy Barrel/U+
    "01114703", //Rappy Barrel/U*+
    "01114803", //Zoal Head/U+
    "01114903", //Garanz Launcher/U+
    "01110F00", //Bomber Noir/U+
    "01111002", //Gur Hanab/U+
    "01114A03", //Grinna Grenade/U+
    "01114B03", //Robopitch Grenade/U+
    "01114C03", //Bil De Head/U+
    "01114D03", //Chaos Meteor/U+
    "01114E03", //Puyo Puyo Launcher/U+
    "01114F03", //Sleipnir/U+
    "01115003", //Indi Cannon/U+
    "01115103", //Varl Artillery Mode/U+
    "01122100", //Verethra Weapon/U+
    "01122200", //Love Inferno/U+
    "01122D03", //Red Scorpio/U+
    "01122E03", //Combat Cannon/U+
    "01122F03", //Pannon Cannon/U+
    "01123003", //Adahna Cannon/U+
    "01123103", //Nug-2000 Bazooka/U+
    "01123203", //Heavy Punisher/U+
    "01122300", //Tartaros Cannon/U+
    "01122400", //Chaos Cannon/U+
    "01122500", //Meteor Cannon/U+
    "01122600", //Needle Cannon/U+
    "01120A01", //Ryusaikanoh/U+
    "01120B01", //Raihakanoh/U+
    "01123303", //Maser Beam/U+
    "01123403", //Guilty Light/U+
    "01123503", //Plasma Cannon Neo/U+
    "01123603", //Bionic Edge/U+
    "01131702", //Arb Boa/U+
    "01133E03", //T. Heaven Strikers/U+
    "01133F03", //T. Heaven Strikers/U*+
    "01134003", //Ketchup & Mustard/U+
    "01134103", //Guld & Milla/U+
    "01134203", //Guld & Milla/U*+
    "01134303", //Twin Real Handgun/U+
    "01130D00", //Bulletmaster/U+
    "01130E00", //Hyper Viper/U+
    "01130F00", //Battlestopper/U+
    "01131000", //Twin Tornado/U+
    "01131802", //H44 Missouri T/U+
    "01131902", //H10 Missouri T/U+
    "01134403", //T. Heaven Avenger/U+
    "01134503", //Heaven and Earth/U+
    "01134603", //Twin Ruby Bullet/U+
    "01134703", //T. Sand Rappy Guns/U+
    "01134803", //Twin Glasher/U+
    "01134903", //Infinite Blaster/U+
    "01134A03", //T. Ancient Sights/U+
    "01134B03", //T. Yasminkov 2000H/U+
    "01134C03", //Freundschaft/U+
    "01134D03", //Double Stronger Cannon
    "01134E03", //Samba Maracas/U+
    "01134F03", //Dual Bird/U+
    "01143A03", //Ancient Sight/U+
    "01143B03", //Heaven Striker/U+
    "01143C03", //Yasminkov 2000H/U+
    "01143D03", //Milla/U+
    "01143E03", //Guld/U+
    "01141200", //Beamgun/U+
    "01141300", //Viper/U+
    "01141400", //De Ragun/U+
    "01141500", //Storm/U+
    "01140D02", //H44 Missouri/U+
    "01140E02", //H10 Missouri/U+
    "01143F03", //Heaven Avenger/U+
    "01144003", //Kenkon-ken/U+
    "01144103", //Ruby Bullet/U+
    "01144203", //Sand Rappy Gun/U+
    "01144303", //Glasher/U+
    "01144403", //Zero Blaster/U+
    "01145003", //Strong Cannon/U+
    "01150800", //Parpua/U+
    "01152302", //Cubo Tuma/U+
    "01152402", //Cubo Mamba/U+
    "01152C03", //Emp. Axeon Cross/U+
    "01152D03", //Diabolic Cross/U+
    "01152E03", //Stardust Phoenix/U+
    "01152F03", //Din De Bel/U+
    "01153003", //Skull Ankh/U+
    "01153103", //Queen Viera/U+
    "01150901", //Yurasogi/U+
    "01150A01", //Aikasoki/U+
    "01152502", //Cubo Simba/U+
    "01153203", //Karakasa J. Gun/U+
    "01153303", //Bangasa J. Gun/U+
    "01153403", //Sand Rappy Bow/U+
    "01153503", //De Golus Bow/U+
    "01153603", //Cubo Baret/U+
    "01153703", //Last Swan
    "01162703", //Gal Wind Burst/U+
    "01162A03", //Gal Wind Burst/U*+
    "01162B03", //Talis/U+
    "01162C03", //Gadianna/U+
    "01160F00", //Card Fante/U+
    "01161000", //Card Regas/U+
    "01161101", //Mira-kikami/U+
    "01161201", //Shi-kikami/U+
    "01161301", //Hoshi-kikami/U+
    "01161401", //Kaza-kikami/U+
    "01162D03", //Dream Master/U+
    "01162E03", //Primera Fiore/U+
    "01162F03", //The Tarot/U+
    "01172D03", //Yasminkov 9000/U+
    "01172E03", //Blitz Fender/U+
    "01172F03", //Giga Phone/U+
    "01173003", //Psycho Gun/U+
    "01173103", //Grinna Bete Buster/U+
    "01171500", //Beam Vulcan/U+
    "01171600", //Black Hawk/U+
    "01171700", //Deathrain/U+
    "01171800", //Muzzlefever/U+
    "01171900", //Beluga/U+
    "01171A00", //Bulletdance/U+
    "01173203", //Avenger/U+
    "01173303", //Puyo Pop F. Gun/U+
    "01173403", //Watergun/U+
    "01173503", //Gravetoo/U+
    "01173603", //Missouri M13/U+
    "01173703", //Magana Revolta
    "01173803", //Master Raven/U+
    "01185903", //E. Psychodrive/U+
    "01185A03", //Dallgunrod/U+
    "01185B03", //Holy Ichor/U+
    "01185C03", //Sorcerer Rod/U+
    "01185D03", //Rabbitwand/U+
    "01185E03", //Biwa Hoshi/U+
    "01185F03", //Chao Staff/U+
    "01186003", //Chao Staff/U*+
    "01186103", //H. Rappy Parasol/U+
    "01186203", //H. Rappy Parasol/U*+
    "01186303", //Pumpkinhead/U+
    "01186403", //Gravidion/U+
    "01186503", //Gravidion/U*+
    "01186603", //Shadow Taker/U+
    "01186703", //Gaozoran Rod/U+
    "01181301", //Mayrod/U+
    "01181401", //Halarod/U+
    "01181501", //Kazarod/U+
    "01181601", //Okarod/U+
    "01186803", //Ancient Starlord/U+
    "01186903", //Rutsularod/U+
    "01186A03", //Cadeceus/U+
    "01186B03", //Revelacion/U+
    "01186C03", //Sarsalai/U+
    "01186D03", //Plantain Leaf/U+
    "01186E03", //Komazli Rod/U+
    "01186F03", //Goth Parasol/U+
    "01187003", //Bil De Vear Cane/U+
    "01187103", //Caster Broom/U+
    "01187203", //Mirage Storm/U+
    "01187303", //Imperial Rod/U+
    "01194F03", //Siren Glass Hammer/U+
    "01195003", //Wicked Solferino/U+
    "01195103", //Konsaikon/U+
    "01195203", //Windmill/U+
    "01195303", //School Bag/U+
    "01195403", //Divine Uzume/U+
    "01195503", //Soza Staff/U+
    "01195603", //Soza Hammer/U+
    "01195703", //Magical Wand/U+
    "01195803", //Twinkle Star/U+
    "01190B00", //Prest/U+
    "01190C00", //Serdote/U+
    "01191B01", //Cometara/U+
    "01191C01", //Bajura/U+
    "01191D01", //Uransara/U+
    "01191E01", //Kongora/U+
    "01191F01", //Granahodora/U+
    "01192001", //Tesbra/U+
    "01195903", //Rose Quartz/U+
    "01195A03", //Rykros Scepter/U+
    "01195B03", //Evil Curst/U+
    "01195C03", //Examination/U+
    "01195D03", //Ragan Head/U+
    "01195E03", //Zero Cane/U+
    "01195F03", //Papillon Ciel/U+
    "01196003", //Demonic Ichor/U+
    "01196103", //Psycho Rod/U+
    "011A2900", //Enferna/U+
    "011A3B03", //Neudaiz Madog/U+
    "011A3C03", //Moatoob Madog/U+
    "011A3D03", //Koltova/U+
    "011A3E03", //Sig P/U+
    "011A3F03", //NiGHTSdoog/U+
    "011A4003", //Lunga Madog/U+
    "011A0D00", //Pegi/U+
    "011A0E00", //Dori/U+
    "011A0F00", //Coni/U+
    "011A1000", //Delpi/U+
    "011A0C01", //Okikudohg/U+
    "011A0D01", //Nakon/U+
    "011A4103", //Alchemist Shadow/U+
    "011A4203", //Lukmin/U+
    "011A4303", //Magadoog/U+
    "011A4403", //Phantasy Burger/U+
    "011A4503", //G. Colony Madog/U+
    "011A4603", //Dol Vaverg/U+
    "011B2400", //Korikon/U+
    "011B2500", //Ansul B/U+
    "011B4103", //Dark Falz Dust/U+
    "011B4203", //Neo Dreamcast/U+
    "011B4303", //Rappy Duke/U+
    "011B4403", //Kakwane Duke/U+
    "011B4503" //Burger Duke/U+
];