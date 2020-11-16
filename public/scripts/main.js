let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}

let Application = PIXI.Application;
let loader = PIXI.loader;
let resources = PIXI.loader.resources;
let Sprite = PIXI.Sprite;
let Rectangle = PIXI.Rectangle;
let Graphics = PIXI.Graphics;

let app = new Application({
    antialias: true,
    transparent: false,
    resolution: 1
});

let stage = app.stage;

let renderer = app.renderer;
renderer.backgroundColor = 0x01191c;
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);