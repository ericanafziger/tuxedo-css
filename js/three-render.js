var camera,
    mySphereCanvas = document.getElementById('three-sphere'),
    myTorusCanvas = document.getElementById('three-torus');

    window.onresize = function() {
      sphereRenderer.setSize( window.innerWidth, window.innerHeight );
      camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
    }


    // Camera
    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // Material
    var material = new THREE.MeshLambertMaterial({
      color: 0xDEDEDE,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });

if (mySphereCanvas) {
  var sphereRenderer,
  sceneSphere;

  // sphereRenderer
  sphereRenderer = new THREE.WebGLRenderer({antialias: true});
  sphereRenderer.setSize( window.innerWidth, window.innerHeight);
  mySphereCanvas.appendChild( sphereRenderer.domElement );
  sphereRenderer.setClearColor(0x191919); //Background color of canvas
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
  var sphere = new THREE.Mesh( sphere, material );
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


if (myTorusCanvas) {
  var torusRenderer,
  sceneTorus;

  // torusRenderer
  torusRenderer = new THREE.WebGLRenderer({antialias: true});
  torusRenderer.setSize( window.innerWidth, window.innerHeight);
  myTorusCanvas.appendChild( torusRenderer.domElement );
  torusRenderer.setClearColor(0x191919); //Background color of canvas
  torusRenderer.setPixelRatio(window.devicePixelRatio);

  // Scene
  sceneTorus = new THREE.Scene();

  // Lights
  var lightTorus = new THREE.AmbientLight(0xffffff, 0.5);
  sceneTorus.add(lightTorus);
  var light2Torus = new THREE.PointLight(0xffffff, 0.5);
  sceneTorus.add(light2Torus);

  // Geometry
  var torusKnotGeometry = new THREE.TorusKnotGeometry( 80, 15, 10, 60 );

  // Creating and adding shapes
  var torusKnot = new THREE.Mesh( torusKnotGeometry, material );
  torusKnot.position.z = -500;
  sceneTorus.add( torusKnot );

  function torusRender() {
    requestAnimationFrame( torusRender );
    torusKnot.rotation.x += 0.007;
    torusKnot.rotation.y += 0.01;
    torusRenderer.render( sceneTorus, camera );
  }
  torusRender();
}
