import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

const gui = new dat.GUI();

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const geometry = new THREE.TorusGeometry(-7, -2, 16, 100);

const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0xff0000);

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xffffff, 0.1);

pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

const sizes = {
  width: widnow.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // update sizes
  size.width = widnow.innerWidth;
  size.height = widnow.innerHeight;

  // update camers
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//______________________________Camera________________________________________

// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

//______________________________Renderer________________________________________
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//______________________________Animate________________________________________
const clock = new THREE.clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  //update object
  sphere.rotation.y = .5 * elapsedTime;

  //update obital controls
  //controls.update()

  // render
  renderer.render(scene, camera);

  // call tick again on the next fram
  window.requestAnimationFrame(tick);
};

tick();
