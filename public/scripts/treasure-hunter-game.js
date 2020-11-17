let state, id, gameScene, 
    dungeon, door, player, 
    treasure, blobs, healthBar, 
    message, playerHit;

loader.add("images/treasure-hunter.json").load(setup)

const wallBoundary = {x:28, y:10, width:488, height:480};

function setup() {
    gameScene = new Container();
    stage.addChild(gameScene);

    gameOverScene = new Container();
    gameOverScene.visible = false;
    stage.addChild(gameOverScene);

    id = resources["images/treasure-hunter.json"].textures;
    createGoodGuys();
    createBadGuys();
    createMessage();

    state = play;
    app.ticker.add(delta => gameLoop(delta))
}

function gameLoop(delta) {
    state(delta);
}

function play(delta) {
    moveBlobs();
    contain(player, wallBoundary);
    player.x += player.vx;
    player.y += player.vy;

    if(playerHit) {
        player.alpha = 0.5;
        healthBar.health.width -= 4;
        playerHit = false;
    } else {
        player.alpha = 1;
    }

    if(hitTestRectangle(player, treasure)) {
        treasure.x = player.x + 10;
        treasure.y = player.y + 10;
    }

    if(hitTestRectangle(treasure, door)) {
        state = end;
        message.text = "You Won!!!"
    }

    if(healthBar.health.width <= 0) {
        state = end;
        message.text= "You Lost!!"
    }
}

function end() {
    gameScene.visible = false;
    gameOverScene.visible = true;
}

function moveBlobs() {
    blobs.forEach(blob => {
        blob.y += blob.vy;
        if (contain(blob, wallBoundary)) {
            blob.vy *= -1;
        }

        if(hitTestRectangle(player, blob)) {
            playerHit = true;
        }
    });
}

function createGoodGuys() {
    dungeon = new Sprite(id["dungeon"]);
    gameScene.addChild(dungeon);

    door = new Sprite(id["door"]);
    door.position.set(32, 0);
    gameScene.addChild(door);

    player = new Sprite(id["explorer"]);
    player.position.set(68, gameScene.height / 2 - player.height / 2);
    addControls(player);
    gameScene.addChild(player);

    treasure = new Sprite(id["treasure"]);
    treasure.x = gameScene.width - treasure.width - 48;
    treasure.y = gameScene.height / 2 - treasure.height / 2;
    gameScene.addChild(treasure);

    createHealthBar();
    gameScene.addChild(healthBar);
}

function createBadGuys() {
    let numberOfBlobs = 6;
    let spacing = 48;
    let xOffset = 150;
    let speed = 2;
    let direction = 1;

    blobs = [];

    for (let i = 0; i < numberOfBlobs; i++) {
        let blob = new Sprite(id["blob"]);
        blob.x = spacing * i + xOffset;
        blob.y = randomInt(0, stage.height - blob.height);
        blob.vy = speed * direction;
        direction *= -1;
        blobs.push(blob);
        gameScene.addChild(blob);
    }
}

function createHealthBar() {
    healthBar = new Container();
    healthBar.position.set(stage.width - 170, 4);
    gameScene.addChild(healthBar);

    let innerBar = new Graphics();
    innerBar.beginFill(0x000000);
    innerBar.drawRect(0, 0, 128, 8);
    innerBar.endFill();
    healthBar.addChild(innerBar);

    let outerBar = new Graphics();
    outerBar.beginFill(0xFF3300);
    outerBar.drawRect(0, 0, 128, 8);
    outerBar.endFill();
    healthBar.addChild(outerBar);
    healthBar.health = outerBar;
}

function createMessage() {
    let style = new TextStyle({
        fontFamily: "Futura",
        fontSize: 64,
        fill: "white"
    });
    message = new Text("The End", style);
    message.position.set(120, stage.height / 2 - 32);
    gameOverScene.addChild(message);
}