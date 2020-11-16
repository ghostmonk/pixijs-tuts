let cat, state;
loader.add("images/cat.png").load(setup);

function setup() {
    let texture = resources["images/cat.png"].texture;
    cat = new Sprite(texture);
    cat.y = 96;
    cat.vx = 0;
    cat.vy = 0;
    stage.addChild(cat);

    let left = keyboard("ArrowLeft");
    left.press = () => {
        cat.vx = -5;
        cat.vy = 0;
    }
    left.release = () => {
        if(!right.isDown && cat.vy === 0) {
            cat.vx = 0;
        }
    }

    let up = keyboard("ArrowUp");
    up.press = () => {
        cat.vy = -5;
        cat.vx = 0;
    }
    up.release = () => {
        if(!down.isDown && cat.vx === 0){
            cat.vy = 0;
        }
    }

    let right = keyboard("ArrowRight");
    right.press = () => {
        cat.vx = 5;
        cat.vy = 0;
    }
    right.release = () => {
        if(!left.isDown && cat.vy === 0){
            cat.vx = 0;
        }
    }

    let down = keyboard("ArrowDown");
    down.press = () => {
        cat.vy = 5;
        cat.vx = 0;
    }
    down.release = () => {
        if(!up.isDown && cat.vx === 0){
            cat.vy = 0;
        }
    }

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