var renderer,
    scene,
    camera,
    myCanvas = document.getElementById('three-canvas');

window.onresize = function() {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
}

// Renderer
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight);
myCanvas.appendChild( renderer.domElement );
renderer.setClearColor(0x191919); //Background color of canvas
renderer.setPixelRatio(window.devicePixelRatio);

// Scene
scene = new THREE.Scene();

// Camera
camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Lights
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

// Geometry
var sphere = new THREE.SphereGeometry( 80, 10, 10 );
var torusKnotGeometry = new THREE.TorusKnotGeometry( 80, 15, 10, 60 );

// Material
var material = new THREE.MeshLambertMaterial({
  color: 0xDEDEDE,
  wireframe: true,
  transparent: true,
  opacity: 0.4
});

// Creating and adding shapes
var torusKnot = new THREE.Mesh( torusKnotGeometry, material );
var sphere = new THREE.Mesh( sphere, material );
torusKnot.position.z = -500;
sphere.position.z = -500;
scene.add( torusKnot );
// scene.add( sphere );


function render() {
  requestAnimationFrame( render );
  torusKnot.rotation.x += 0.007;
  torusKnot.rotation.y += 0.01;
  sphere.rotation.x += 0.007;
  sphere.rotation.y += 0.01;
  renderer.render( scene, camera );
}
render();
