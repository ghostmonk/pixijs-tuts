function center(displayObject) {
    let x = (window.innerWidth / 2) - (displayObject.width / 2);
    let y = (window.innerHeight / 2) - (displayObject.height / 2);
    displayObject.position.set(x, y);
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