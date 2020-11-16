let state, cat, box, message;

loader.add("images/cat.png").load(setup);

function setup() {
    box = new Graphics();
    box.beginFill(0x66FF66);
    box.drawRect(0, 0, 64, 64);
    box.endFill();
    center(box);
    stage.addChild(box);

    cat = getSprite("images/cat.png");
    addControls(cat);
    stage.addChild(cat);

    let style = new TextStyle({
        fontFamili: "Arial",
        fontSize: 36,
        fill: "white",
        stroke: "white",
        strokeThickness: 4
    });
    message = new Text("NO COLLISION", style);
    message.y = 10;
    centerX(message);
    stage.addChild(message);

    state = play;
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    state(delta);
}

function play(delta) {
    cat.x += cat.vx;
    cat.y += cat.vy;

    if(hitTestRectangle(cat, box)) {
        message.text = "HIT!!!";
        centerX(message);
        box.tint = 0xff3333;
    } else {
        message.text = "NO COLLISION";
        centerX(message);
        box.tint = 0x66FF66;
    }
}