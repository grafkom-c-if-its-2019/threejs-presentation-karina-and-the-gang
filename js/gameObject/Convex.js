class Convex extends GameObject{
    constructor(_data){
        super();
        this.data = _data;
        this.points = [];
        this.CreateMesh();
    }

    CreateMesh(){
        var _data = this.data;

        //points
        this.points.push(new THREE.Vector3(0, 2, 0));
        this.points.push(new THREE.Vector3(0, -3, 0));
        this.points.push(new THREE.Vector3(2, -2, 0));
        // this.points.push(new THREE.Vector3(-2, -2, 0));
        // this.points.push(new THREE.Vector3(0, 0, 2));
        this.points.push(new THREE.Vector3(0, 0, -1));
        // this.points.push(new THREE.Vector3(0, 0,1));
        // this.points.push(new THREE.Vector3(2, 0, 2));

        this.geometry = new THREE.ConvexGeometry(this.points);
        
        //create mesh
        // this.meshMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, transparent: true, opacity: 0.2});
        // this.meshMaterial.side = THREE.DoubleSide;
        this.material = new THREE.MeshNormalMaterial();
        this.material.wireframe = true;
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
    }
}