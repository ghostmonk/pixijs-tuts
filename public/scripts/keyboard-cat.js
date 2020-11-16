let cat, state;
loader.add("images/cat.png").load(setup);

function setup() {
    let texture = resources["images/cat.png"].texture;
    cat = new Sprite(texture);
    cat.y = 96;
    stage.addChild(cat);
    addControls(cat);

    state = play;
    app.ticker.add(delta => gameloop(delta));
}

function gameloop(delta) {
    state(delta);
}

function play(delta) {
    cat.x += cat.vx;
    cat.y += cat.vy;
}