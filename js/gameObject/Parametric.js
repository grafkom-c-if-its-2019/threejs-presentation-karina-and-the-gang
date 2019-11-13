class Parametric extends GameObject{
    constructor(_data){
        super();
        this.data = _data;
        this.points = [];
        this.CreateMesh();
    }

    CreateMesh(){
        var _data = this.data;
        this.InitGeometry();
        this.InitMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(_data.position);
        this.mesh.scale.set(0.2, 0.2, 0.1);
        console.log(this.mesh);
    }

    InitGeometry(){
        var _data = this.data;
        this.geometry = new THREE.ParametricGeometry(THREE.ParametricGeometries.klein, _data.slices, _data.stacks);
    }

    InitMaterial(){
        this.material = new THREE.MeshNormalMaterial();
        this.material.side = THREE.DoubleSide;
        this.material.wireframe = true;
    }

    Update(){
        
    }

    Rotate(_rotation){
        this.mesh.rotation.y = _rotation;
        this.mesh.rotation.z = _rotation;
    }
}