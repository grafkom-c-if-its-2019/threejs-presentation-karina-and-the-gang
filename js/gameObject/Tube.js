class Tube extends GameObject{
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
    }

    InitGeometry(){        
        var _data = this.data;
        this.points.push(new THREE.Vector3(0, 0.6, 0));
        this.points.push(new THREE.Vector3(-1, 1, 0));
        this.points.push(new THREE.Vector3(0, -0.4, 0));
        this.points.push(new THREE.Vector3(1, 1, 0));
        // this.points.push(new THREE.Vector3(0, 0.6, 0));

        this.geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(this.points), _data.segments, _data.radius, _data.segRad, _data.closed);
    }

    InitMaterial(){
        this.material = new THREE.MeshNormalMaterial();
        this.material.side = THREE.DoubleSide;
        this.material.wireframe = true;
    }

    Update(){
        
    }

    Translate(_position){
        this.mesh.position.add(_position);
    }

    Rotate(_rotation){
        this.mesh.rotation.y = _rotation;
        this.mesh.rotation.z = _rotation;
    }
}