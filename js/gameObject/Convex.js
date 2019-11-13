class Convex extends GameObject{
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
        // this.mesh = new THREE.SceneUtils.createMultiMaterialObject(this.geometry, [this.meshMaterial, this.wireFrameMat]);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(_data.position);
    }

    InitGeometry(){        
        this.points.push(new THREE.Vector3(0, 1, 0));
        this.points.push(new THREE.Vector3(0, -2, 0));
        this.points.push(new THREE.Vector3(1, -1, 0));
        this.points.push(new THREE.Vector3(-1, -1, 0));
        this.points.push(new THREE.Vector3(0, 0, 1));
        this.points.push(new THREE.Vector3(0, 0, -1));
        this.points.push(new THREE.Vector3(0, 0, 0));

        this.geometry = new THREE.ConvexGeometry(this.points);
    }

    InitMaterial(){
        this.meshMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, transparent: true, opacity: 0.2});
        this.meshMaterial.side = THREE.DoubleSide;

        this.wireFrameMat = new THREE.MeshBasicMaterial();
        this.wireFrameMat.wireframe = true;

        this.material = new THREE.MeshNormalMaterial();
    }

    Update(){
        
    }

    Translate(_position){
        this.mesh.position.add(_position);
    }

    Rotate(_rotation){
        this.mesh.rotation.y = _rotation;
    }
}