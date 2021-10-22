import * as THREE from "three";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import { DracoLoader } from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

import fragment from "./components/fragment.glsl";
import vertex from "./components/vertexParticles.glsl";
import * as dat from "dat.gui";
import gsap from "gsap";

import dna from "./components/dna-02.glb";

export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x111111, 1);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.load = new GLTFLoader();
    this.dracoLoader = new DracoLoader();
    this.dracoLoader.setDecoderPath(
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/",
    ); // use a full url path

    this.loader.setDRACOLoader(this.dracoLoader);
    this.dracoLoader = new DRACOLoader();

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000,
    );

    this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;

    this.isPlaying = true;

    this.loader.load(dna, (gltf) => {
      this.geometry = gtlf.scene.children[0];

      this.geometry.center();

      this.geometry = this.addObjects();
      this.resize();
      this.render();
      this.setupResize();
      // this.settings();
    });
  }
  settings() {
    let that = this;
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShadeMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        // resolution: { value: new THREE.Vector4() },
        uniforms: {
          time: { value: 0 },
          uColor1: { value: new THREE.Color(0x612574) },
          uColor2: { value: new THREE.Color(0x612574) },
          uColor3: { value: new THREE.Color(0x612574) },
          resolution: { value: new THREE.Vector4() },
        },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    // this.geometry = new THREE.PlanGeometry(1, 1, 1, 1);

    this.plane = new THREE.ShaderMaterial(this.geometry, this.material);
    this.scene.add(this.plane);
  }
  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.render();
      this.isPlaying = true;
    }
  }
  render() {
    if (!this.isPlaying) return;
  }
}

