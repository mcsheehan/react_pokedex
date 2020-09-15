class Pokemon {
    private id: any;
    private name: any;
    private sprite: any;
    private type: any;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_shiny;
        this.type = data.types[0].type.name;
    }
}

export default Pokemon;
