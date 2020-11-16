let state = play;
let cat;
loader.add("images/cat.png").load(() => {
    let texture = resources["images/cat.png"].texture;
    cat = new Sprite(texture);
    stage.addChild(cat);
    cat.position.set(10, 100);
    cat.anchor.set(0.5, 0.5);
    cat.vx = 10;
    cat.vy = 10;
    app.ticker.add(delta => state(delta));
});

function play(delta) {
    cat.vx = cat.x >= window.innerWidth ? -10 : cat.x <= 0 ? 10 : cat.vx;
    cat.vy = cat.y >= window.innerHeight ? -10 : cat.y <= 0 ? 10 : cat.vy;
    cat.x += cat.vx;
    cat.y += cat.vy;
    cat.rotation += 0.1; 
}