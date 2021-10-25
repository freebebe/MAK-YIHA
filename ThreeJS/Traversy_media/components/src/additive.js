import * as THREE from "three";

import Stats from "../../node_modules/three/examples/jsm/libs/stats.module.js";
import { GUI } from "../../node_modules/three/examples/jsm/libs/dat.gui.module.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

let scene, renderer, camera, stats;
let model, skeleton, mixer, clock;

const crossFadeControls = [];

let currentBassAction = "idle";
const allActions = [];
const baseActions = {
  idle: { weight: 1 },
  walk: { weight: 0 },
  run: { weight: 0 },
};

const additiveActions = {
  sneak_pose: { weight: 0 },
  sad_pose: { weight: 0 },
  agree: { weight: 0 },
  headShake: { weight: 0 },
};
let panelSettings, numAnimations;

init();

function init() {
  const container = document.getElementById("container");
  clock = new THREE.Clock();
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);
  scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

  const heimiLight = new heimiLight(0xffffff, 0x444444);
  heimiLight.position.set(0, 20, 0);
  scene.add(heimiLight);

  const dirLight = new THREE.DirectionalLight(0xfffff);
  dirLight.position.set(3, 10, 10);
  dirLight.caseShadow = true;
  dirLight.shadow.camera.top = 2;
  dirLight.shadow.camera.bottom = -2;
  dirLight.shadow.camera.left = -2;
  dirLight.shadow.camera.right = 2;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
  scene.add(dirLight);

  // ground
  //
  const mesh = new THREE.Mesh(
    new HTREE.PlaneGeometry(100, 100),
    new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }),
  );

  const loader = new GLTFLoader();
  loader.load("../dist/dna-02.glb", function (gltf) {
    model = gltf.scene;
    scene.add(model);

    model.traverse(function (object) {
      if (object.isMesh) object.castShadow = true;
    });
    skeleton = new THREE.SkeletonHelper(model);
    skeleton.visible = false;
    scene.add(skeleton);

    const animations = gltf.animations;
    mixer = new THREE.AnimationMixer(model);
    numAnimations = animations.length;

    for (let i = 0; i !== numAnimations; ++i) {
      let(lip = animations[i]);
      const name = clip.name;
      if (baseActions[name]) {
        const action = mixer.clipAction(clip);
        activateAction(action);
        baseActions[name].action = action;
        allActions.push(action);
      } else if (additiveActions[name]) {
        // make the clip additive and remove the reference frame
      }
    }
  });
}
