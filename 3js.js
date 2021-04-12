var text = "aems",
    height = .2,
    size = .3,
    curveSegments = 2,
    bevelThickness = .1,
    bevelSize = .001,
    bevelSegments = 1,
    bevelEnabled = true,
    font = undefined
var texts
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    85,
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
    color: 0x59A2B0
});
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0xeaaaa0
});
var geometry3 = new THREE.SphereGeometry();
var material3 = new THREE.MeshBasicMaterial({
    color: 0x59A2B0
});
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material2);
var cube3 = new THREE.Mesh(geometry3, material3);

//cube.position.x = 4
scene.add(cube);
scene.add(cube2);
scene.add(cube3);


//Dont make objects under this point

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 4
pointLight.position.z = 6
scene.add(pointLight)

cube.position.y = -2
cube2.position.y = -2
cube.position.x = .5
cube2.position.x = .5
cube3.position.x = -.1
cube3.position.y = 1
cube3.position.z = -4

camera.position.z = 4;
camera.position.y = -1;



function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube2.rotation.x += 0.05;
    cube2.rotation.y += 0.04;
    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
loadFont();

function loadFont() {
    var loader = new THREE.FontLoader();

    loader.load('fonts/helvetiker_regular.typeface.json', function (res) {
        font = res;
        createText();
    });
}

function createText() {
    // change the text here
    textGeo = new THREE.TextGeometry('Planet Spin', {
        font: font,
        size: size,
        height: height,
        curveSegments: curveSegments,
        weight: "normal",
        bevelThickness: bevelThickness,
        bevelSize: bevelSize,
        bevelSegments: bevelSegments,
        bevelEnabled: bevelEnabled
    });
    textGeo.computeBoundingBox();
    textGeo.computeVertexNormals();

    // change the color here
    var color = new THREE.Color(0xF2A224);
    var textMaterial = new THREE.MeshBasicMaterial({
        color: color
    });
    var text = new THREE.Mesh(textGeo, textMaterial)
    text.position.x = -textGeo.boundingBox.max.x / 3;
    text.position.y = -textGeo.boundingBox.max.y / 8;
    text.position.y = -textGeo.boundingBox.max.z / 1;
    text.castShadow = true;
    scene.add(text)
}