function init() {
    console.log('initialized');

    document.addEventListener('keydown', (e) => {
        console.log('key down: ', e.key);
    })

    document.addEventListener('keyup', (e) => {
        console.log('key up: ', e.key);
    })

    const stage = new createjs.Stage('main');

    const shape = new createjs.Shape();
    shape.graphics.beginFill("red").drawRect(0, 0, 75, 75);
    shape.x = 100;
    shape.y = 100;

    stage.addChild(shape);

    const tick = () => {
        shape.x += 5;
        if (shape.x > stage.canvas.width)
            shape.x = 0;
        
        stage.update();
    }

    createjs.Ticker.framerate = 40;
    createjs.Ticker.on('tick', tick);


}