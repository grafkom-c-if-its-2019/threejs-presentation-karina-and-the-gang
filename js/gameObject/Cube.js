class Cube extends GameObject{
    constructor(_data){
        super();
        this.data = _data;

        this.CreateMesh();
    }

    CreateMesh(){
        var _data = this.data;
        this.geometry = new THREE.BoxGeometry(_data.width, _data.height, _data.depth);
        this.material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(_data.position);
    }

    Update(){
        
    }

    Translate(_position){
        this.mesh.position.add(_position);
    }
}