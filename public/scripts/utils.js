function center(displayObject) {
    let x = (window.innerWidth / 2) - (displayObject.width / 2);
    let y = (window.innerHeight / 2) - (displayObject.height / 2);
    displayObject.position.set(x, y);
}

function centerX(displayObject) {
        displayObject.x = window.innerWidth / 2 - displayObject.width / 2;
}

function getSprite(resource) {
    let texture = resources[resource].texture;
    return new Sprite(texture);
}

window.addEventListener("resize", function (event) {
    renderer.resize(window.innerWidth, window.innerHeight);
    console.log(window.innerWidth, window.innerHeight);
});

function keyboard(value) {
    let key = {
        value: value,
        isDown: false,
        isUp: true,
        press: undefined,
        release: undefined
    };

    key.downHandler = event => {
        if (event.key === key.value) {
            if (key.isUp && key.press) {
                key.press();
            }
            key.isDown = true;
            key.isUp = false;
            event.preventDefault();
        }
    };

    key.upHandler = event => {
        if(event.key === key.value) {
            if(key.isDown && key.release) {
                key.release();
            }
            key.isDown = false;
            key.isUp = true;
            event.preventDefault();
        }
    };

    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);

    window.addEventListener("keydown", downListener, false);
    window.addEventListener("keyup", upListener, false);
    
    key.unsubscribe = () => {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    }

    return key;
}

function addControls(dispObj) {
    dispObj.vx = 0;
    dispObj.vy = 0;

    let left = keyboard("ArrowLeft");
    left.press = () => {
        dispObj.vx = -5;
        dispObj.vy = 0;
    }
    left.release = () => {
        if (!right.isDown && dispObj.vy === 0) {
            dispObj.vx = 0;
        }
    }

    let up = keyboard("ArrowUp");
    up.press = () => {
        dispObj.vy = -5;
        dispObj.vx = 0;
    }
    up.release = () => {
        if (!down.isDown && dispObj.vx === 0) {
            dispObj.vy = 0;
        }
    }

    let right = keyboard("ArrowRight");
    right.press = () => {
        dispObj.vx = 5;
        dispObj.vy = 0;
    }
    right.release = () => {
        if (!left.isDown && dispObj.vy === 0) {
            dispObj.vx = 0;
        }
    }

    let down = keyboard("ArrowDown");
    down.press = () => {
        dispObj.vy = 5;
        dispObj.vx = 0;
    }
    down.release = () => {
        if (!up.isDown && dispObj.vx === 0) {
            dispObj.vy = 0;
        }
    }
}

function hitTestRectangle(a, b) {
    centerAX = a.x + a.width / 2;
    centerAY = a.y + a.height / 2;
    centerBX = b.x + b.width / 2;
    centerBY = b.y + b.height / 2;

    halfWidthA = a.width / 2;
    halfHeightA = a.height / 2;
    halfWidthB = b.width / 2;
    halfHeightB = b.height / 2;

    let vx = centerAX - centerBX;
    let vy = centerAY - centerBY;
    let halfWidths = halfWidthA + halfWidthB;
    let halfHeights = halfHeightA + halfHeightB;

    return Math.abs(vx) < halfWidths && 
        Math.abs(vy) < halfHeights;
}