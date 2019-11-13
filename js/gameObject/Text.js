class TextGeom extends GameObject{
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
        this.mesh.scale.set(0.1, 0.1, 0.1);
    }

    InitGeometry(){
        var _data = this.data;
        this.geometry = new THREE.TextGeometry("Karina and The Gangs", _data.setting);
    }

    InitMaterial(){
        // this.meshMaterial = new THREE.MeshBasicMaterial({color: 0xFFA500, transparent: true, opacity: 0.2});
        // this.meshMaterial.side = THREE.DoubleSide;

        // this.wireFrameMat = new THREE.MeshBasicMaterial();
        // this.wireFrameMat.wireframe = true;

        this.material = new THREE.MeshPhongMaterial({
            specular: 0xFFA500,
            color: 0xFFFFFF,
            shininess: 40
        });
        this.material.side = THREE.DoubleSide;
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