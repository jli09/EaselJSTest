function init() {
    console.log('initialized');

    const stage = new createjs.Stage('main');

    const shape = new createjs.Shape();
    shape.graphics.beginFill("red").drawRect(0, 0, 75, 75);
    shape.x = 100;
    shape.y = 100;

    stage.addChild(shape);

    const tick = () => {
        shape.x += 3;
        if (shape.x > stage.canvas.width)
            shape.x = 0;
        
        stage.update();
    }

    createjs.Ticker.on('tick', tick);

}