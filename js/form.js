class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.Hello = createElement('h3');
    }

    hide()
    {
        this.Hello.hide();
        this.button.hide();
        this.input.hide();
    }

    display()
    {
        var title = createElement('h2');
        title.html("Car racing simulation");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);
        
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.Hello.html("Hello " + player.name);
            this.Hello.position(130,160);
        })
        }

    
}