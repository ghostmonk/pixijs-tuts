let rocket;
let cat;
let images = [
    "images/animals.png",
    "images/blob.png",
    "images/cat.png",
    "images/door.png",
    "images/dungeon.png",
    "images/explorer.png",
    "images/tileset.png",
    "images/treasure.png",
    "images/treasureHunter.png"
];

loader.on("progress", (l, r) => {
    console.log("loading:", r.url)
    console.log("progress:", l.progress, "%")
}); 

loader.add(images).load(() => {
    showCat();
    showRocket();
});

function showRocket() {
    rocket = getSprite("images/tileset.png");
    let rectangle = new Rectangle(192, 128, 64, 64);
    rocket.texture.frame = rectangle;
    rocket.position.set(32, 32)
    app.stage.addChild(rocket);
}

function showCat() {
    cat = getSprite("images/cat.png");
    cat.scale.set(1.5);
    cat.anchor.set(0.5, 0.5);
    cat.rotation = 0.5;
    centerSprite(cat);
    app.stage.addChild(cat);
}
