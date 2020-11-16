let hedgehog;
let cat; 
let tiger; 
let state;

loader.add("images/animals.png").load(setup);

function setup() {
    let animals = resources["images/animals.png"].texture;
    cat = getSprite(animals, new Rectangle(2, 2, 64, 64));
    cat.position.set(0, 0);

    hedgehog = getSprite(animals, new Rectangle(68, 2, 64, 64))
    hedgehog.position.set(64, 32);

    tiger = getSprite(animals, new Rectangle(134, 2, 64, 64));
    tiger.position.set(128, 0);

    cage = getParticleContainer();

    console.log(cage.children);
    console.log(cat.position);
    console.log(cat.getGlobalPosition());
    console.log(tiger.toLocal(tiger.position, hedgehog).x);
    console.log(tiger.toLocal(tiger.position, hedgehog).y);

    state = play;
    app.ticker.add(delta => gameloop(delta));
}

function getParticleContainer() {
    let container = new PIXI.particles.ParticleContainer(
        1500,
        {
            rotation: true,
            alphaAndtine: true,
            scale: true,
            uvs: true
        }
    );
    container.addChild(cat);
    container.addChild(hedgehog);
    container.addChild(tiger);
    stage.addChild(container);
    center(container);
    return container;
}

function getContainer() {
    let container = new PIXI.Container();
    container.addChild(cat);
    container.addChild(hedgehog);
    container.addChild(tiger);
    stage.addChild(container);
    center(container);
    return container;
}

function getSprite(src, rect) {
    let texture = new PIXI.Texture(src, rect);
    return new Sprite(texture)
}

function gameloop(delta) {
    state(delta);
}

function play(delta) {

}