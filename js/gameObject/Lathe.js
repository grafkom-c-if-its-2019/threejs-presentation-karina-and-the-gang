class Lathe extends GameObject{
    constructor(_data){
        super();
        this.data = _data;
        this.points = [];
        this.CreateMesh();
    }

    CreateMesh(){
        var _data = this.data;
        
        //geometry points
        // this.points.push(new THREE.Vector3(2, 0, 0));
        this.points.push(new THREE.Vector3(1, 1, 0));
        this.points.push(new THREE.Vector3(1, -1, 0));
        // this.points.push(new THREE.Vector3(2, -1, 0));

        this.geometry = new THREE.LatheGeometry(this.points, _data.segments, _data.phiStart, _data.phiLen);

        //create mesh
        this.material = new THREE.MeshNormalMaterial();
        this.material.wireframe = true;
        // this.mesh = new THREE.SceneUtils.createMultiMaterialObject(this.geometry, [this.meshMaterial, this.wireFrameMat]);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(_data.position);
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