loader.add("images/treasure-hunter.json").load(() => {
    let id = resources["images/treasure-hunter.json"].textures;
    let dungeon = new Sprite(id["dungeon"]);
    let explorer = new Sprite(id["explorer"]);
    let treasure = new Sprite(id["treasure"]);
    let door = new Sprite(id["door"]);

    explorer.position.set(40, 40);
    treasure.position.set(450, 250);
    door.position.set(30, 0);

    stage.addChild(dungeon);
    stage.addChild(door);
    stage.addChild(explorer);
    stage.addChild(treasure);

    let blobPopulation = 9;
    let spaceing = 48;
    xOffset = 65;

    for(let i = 0; i < blobPopulation; i++) {
        let blob = new Sprite(id["blob"]);
        let x = spaceing * i + xOffset;
        let y = randomInt(30, 480 - blob.height);
        blob.position.set(x, y);
        stage.addChild(blob);
    }
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}