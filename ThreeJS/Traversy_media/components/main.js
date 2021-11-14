import * as THREE from "three";

let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.001,
    150,
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(3, 3, 3);
  // const material = new THREE.MeshBasicMaterial({ color: 0xeeeee11 });
  const texttrue = new THREE.TextureLoader().load(
    "./dist/hashnode-dribbble-developer-programming-sticker-giveaway-gif.gif",
  );
  const material = new THREE.MeshBasicMaterial({ map: texttrue });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.005;
  // cube.rotation.y += 0.005;
  // cube.rotation.z += 0.005;

  cube.rotation.set += (0.005, 0.005, 0.005);
  //                      x       y      z

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
