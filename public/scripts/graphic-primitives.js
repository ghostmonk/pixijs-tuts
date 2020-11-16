let rect = new Graphics();
rect.beginFill(0x66CCFF);
rect.lineStyle(4, 0xFF3300, 1);
rect.drawRect(0, 0, 200, 200);
rect.endFill();
rect.position.set(170, 170);
stage.addChild(rect);

let circle = new Graphics();
circle.beginFill(0x9966FF);
circle.drawCircle(0, 0, 100);
circle.position.set(500, 270);
stage.addChild(circle);

let ellipse = new Graphics();
ellipse.beginFill(0xFFFF00);
ellipse.drawEllipse(0, 0, 100, 40);
ellipse.position.set(270, 420);
stage.addChild(ellipse);

let roundBox = new Graphics();
roundBox.lineStyle(4, 0x99CCFF, 1);
roundBox.beginFill(0xFF9933);
roundBox.drawRoundedRect(0, 0, 168, 80, 41);
roundBox.endFill();
roundBox.position.set(390, 390);
stage.addChild(roundBox);

let line = new Graphics();
line.lineStyle(4, 0xFFFFFF, 1);
line.moveTo(0, 0);
line.lineTo(160, 100);
line.position.set(610, 170);
stage.addChild(line);

let triangle = new Graphics();
triangle.beginFill(0x66FF33);
triangle.drawPolygon([-64, 128, 64, 128, 0,  0]);
triangle.endFill();
triangle.position.set(632, 390);
stage.addChild(triangle);