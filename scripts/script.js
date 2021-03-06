
<script>

var THREE = require('three');

var scene, camera, renderer;
var geometry, material, mesh;

console.log("this is the script file");
init();
// animate();

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.z = 1000;

	geometry = new THREE.BoxGeometry(200, 200, 200);
	material = new THREE.MeshBasicMaterial({
		color: 0xff0000, 
		wireframe: true
	});

	mesh = new THREE.Mesh(geometry, material);

	scene.add(mesh);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight)

	document.body.appendChild(renderer.domElement);
}

</script>