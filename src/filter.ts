//These IDs will be skipped during processing.
export const blacklist = [
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
    "011BFE03", "011BFD03", "01043D03", "0114FF00", "011BFF03", "01152C03", "01060C01", //Debug/admin weapons
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
    
    //Miscellaneous Conflicts
    "Knuckles"
];