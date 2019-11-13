class GameObject{
    constructor(){
        this.parent = null;
        this.children = [];
    }

    get Mesh(){
        return this.mesh;
    }
}