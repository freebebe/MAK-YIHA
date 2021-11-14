// https://medium.com/geekculture/how-to-control-three-js-camera-like-a-pro-a8575a717a2
import * as Three from "three";

import { FlyControls } from "../node_modules/three/examples/jsm/controls/FlyControls";
import { addRoom, addWallLighting } from "./components/common";

let camera,
  scene,
  canvas,
  controls,
  renderer;

init();
animate();

function init() {
  scene = new THREE.Scene();
  canvas = document.querySelector("#canvas");

  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    5000,
  );
  camera.position.x = 0;
  camera.position.y = 75;
  camera.position.z = 16;

  // ---------------------FlyControls
  controls = new FlyControls(camera, renderer.domElement);
  controls.movementSpeed = 10;
  controls.rollSpeed = 0.01;
  controls.autoForward = false;
  controls.dragToLook = true;
}
