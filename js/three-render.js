//color variables
var dark = 0x262525;
var darkGrey = 0x5c5c5c;
var mdGrey = 0xc8c8c8;
var light = 0xf4f4f4;
var pop = 0x2A7F62;

//THREE variables
var camera,
    mySphereCanvas = document.getElementById('three-sphere'),
    myTorusCanvas = document.getElementById('three-torus');
    myCubeCanvas = document.getElementById('three-cube');

    // Camera
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // Materials
    var materialWireframe = new THREE.MeshLambertMaterial({
      color: mdGrey, //material color
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    var materialShiny = new THREE.MeshPhongMaterial({
      // depthTest: false,
      color: dark, //material color
      shading: THREE.FlatShading,
      shininess: 100,
      specular: pop,
      // wireframe: true,
      // emissive: dark
    });
    var reflection = THREE.CubeTextureLoader( ['./img/palms-dark.png', './img/palms-dark.png','./img/palms-dark.png','./img/palms-dark.png','./img/palms-dark.png','./img/palms-dark.png',  ] );


//If mySphereCanvas exists render the sphere
if (mySphereCanvas) {
  var sphereRenderer,
  sceneSphere;

  window.addEventListener("resize", function() {
    sphereRenderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
  });

  // sphereRenderer
  sphereRenderer = new THREE.WebGLRenderer({antialias: true});
  sphereRenderer.setSize( window.innerWidth, window.innerHeight);
  mySphereCanvas.appendChild( sphereRenderer.domElement );
  sphereRenderer.setClearColor(dark); //Background color of sphere canvas
  sphereRenderer.setPixelRatio(window.devicePixelRatio);

  //Scene
  sceneSphere = new THREE.Scene();

  // Lights
  var lightSphere = new THREE.AmbientLight(0xffffff, 0.5);
  sceneSphere.add(lightSphere);
  var light2Sphere = new THREE.PointLight(0xffffff, 0.5);
  sceneSphere.add(light2Sphere);

  //Geometry
  var sphere = new THREE.SphereGeometry( 80, 10, 10 );

  // Creating and adding shapes
  var sphere = new THREE.Mesh( sphere, materialWireframe ); //change sphere material here
  sphere.position.z = -500;
  sceneSphere.add( sphere );


  function sphereRender() {
    requestAnimationFrame( sphereRender );
    sphere.rotation.x += 0.007;
    sphere.rotation.y += 0.01;
    sphereRenderer.render( sceneSphere, camera );
  }
  sphereRender();

}

//If myCubeCanvas exists render the sphere
if (myCubeCanvas) {
  var cubeRenderer,
  sceneCube;

  window.addEventListener("resize", function() {
    cubeRenderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
  });

  // cubeRenderer
  cubeRenderer = new THREE.WebGLRenderer({antialias: true});
  cubeRenderer.setSize( window.innerWidth, window.innerHeight);
  myCubeCanvas.appendChild( cubeRenderer.domElement );
  cubeRenderer.setClearColor(dark); //Background color of cube canvas
  cubeRenderer.setPixelRatio(window.devicePixelRatio);

  //Scene
  sceneCube = new THREE.Scene();

  // Lights
  var lightCube = new THREE.AmbientLight(0xffffff, 0.5);
  sceneCube.add(lightCube);
  var light2Cube = new THREE.PointLight(0xffffff, 0.5);
  sceneCube.add(light2Cube);

  //Geometry
  var cube = new THREE.CubeGeometry( 20, 20, 20, 20, 2, 2 );

  // Creating and adding shapes
  var cube = new THREE.Mesh( cube, materialWireframe ); //change cube material here
  cube.position.z = -100;
  sceneCube.add( cube );


  function cubeRender() {
    requestAnimationFrame( cubeRender );
    cube.rotation.x += 0.007;
    cube.rotation.y += 0.01;
    cubeRenderer.render( sceneCube, camera );
  }
  cubeRender();

}

//If myTorusCanvas exists render the Torus Knot
if (myTorusCanvas) {
  var torusRenderer,
  sceneTorus;

  window.addEventListener("resize", function() {
    torusRenderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
  });


  // window.onresize = function() {
  // }

  // torusRenderer
  torusRenderer = new THREE.WebGLRenderer({antialias: true});
  torusRenderer.setSize( window.innerWidth, window.innerHeight);
  myTorusCanvas.appendChild( torusRenderer.domElement );
  torusRenderer.setClearColor(dark); //Background color of canvas
  torusRenderer.setPixelRatio(window.devicePixelRatio);

  // Scene
  sceneTorus = new THREE.Scene();

  // Lights
  var lightTorus = new THREE.AmbientLight(0xffffff, 0.5);
  sceneTorus.add(lightTorus);
  var light2Torus = new THREE.PointLight(0xffffff, 0.5);
  sceneTorus.add(light2Torus);

  // Geometry
  var torusKnotGeometry = new THREE.TorusKnotGeometry( 70, 18, 10, 10 );

  // Creating and adding shapes
  var torusKnot = new THREE.Mesh( torusKnotGeometry, materialShiny ); //change torus material here
  torusKnot.position.z = -500;
  sceneTorus.add( torusKnot );

  function torusRender() {
    requestAnimationFrame( torusRender );
    torusKnot.rotation.x -= 0.007;
    torusKnot.rotation.y -= 0.01;
    // torusKnot.rotation.z -= 0.007;
    torusRenderer.render( sceneTorus, camera );
  }
  torusRender();
}
