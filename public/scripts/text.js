let style = new TextStyle({
    fontFamili: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: "#ff3300",
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "0x000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
});

let message = new Text("Hello World!", style);
center(message);
stage.addChild(message);