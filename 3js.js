var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

//This is how I make OBJECTS

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry2 = new THREE.TorusGeometry(.9, .1, 19, 150);
var material2 = new THREE.MeshBasicMaterial({
    color: 0xe0ee00
});
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube);
scene.add(cube2);

//Dont make objects under this point

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 4
pointLight.position.z = 4
scene.add(pointLight)


camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube2.rotation.x += 0.03;
    cube2.rotation.y += 0.03;
    renderer.render(scene, camera);
}
animate();