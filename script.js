let adventureData = {
    times: ["morning", "afternoon", "evening", "night"],
    conditions: ["stormy", "foggy", "icy", "sweltering", "crystalline", "misty", "blistering", "chilly", "blazing", "gloomy", 
    "hazy", "searing", "arid", "damp", "windy", "torrid", "shimmering", "sultry", "frozen"],
    locations: ["cavern", "ruins","grove","wasteland","fjord","sanctuary","bastion","swamp","keep","plains",
    "tundra","forest","desert","chasm","temple","dungeon","oasis","cemetery","summit","wilds"]
};



const randomizedAdventure = () => {
    let randomTime = Math.floor(Math.random() * adventureData.times.length);
    let randomCondition = Math.floor(Math.random() * adventureData.conditions.length);
    let randomLocation = Math.floor(Math.random() * adventureData.locations.length);

    console.log(`Your story begins on a ${adventureData.conditions[randomCondition]} ${adventureData.times[randomTime]} in the far away ${adventureData.locations[randomLocation]} of these cursed lands.`);
}

const manyRandomizedAdventures = (num) => {
    for (i = 0; i < num; i++) {
    let randomTime = Math.floor(Math.random() * adventureData.times.length);
    let randomCondition = Math.floor(Math.random() * adventureData.conditions.length);
    let randomLocation = Math.floor(Math.random() * adventureData.locations.length);

    console.log(`Your story begins on a ${adventureData.conditions[randomCondition]} ${adventureData.times[randomTime]} in the far away ${adventureData.locations[randomLocation]} of these cursed lands.`);
    }
}

//randomizedAdventure();
manyRandomizedAdventures(10);