import * as THREE from "three";

//____________________________创建一个场景______________________________
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
// PerspectiveCamera（透视摄像机）: {
// 1. 参数是视野角度（FOV）:
// 视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。

// 2. 参数是长宽比（aspect ratio）:
// 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。

// 3-4. 近截面（near）和远截面（far）:
// 当物体某些部分比摄像机的远截面远或者比近截面渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。
// }

const renderer = new THREE.WebGLRenderer();
// WebGLRenderer 渲染器
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
// BoxGeometry（立方体）对象:
// 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces）

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// Three.js自带了几种材质，
// 在这里我们使用的是MeshBasicMaterial。
// 所有的材质都存有应用于他们的属性的对象。

const cube = new THREE.Mesh(geometry, material);
// 网格包含一个几何体以及作用在此几何体上的材质，
// 我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动

scene.add(cube);
// 当我们调用scene.add()的时候，
// 物体将会被添加到(0,0,0)坐标(但将使得摄像机和立方体彼此在一起)

camera.position.z = 5;

//_____________________________渲染场景_____________________________
// 如果将之前写好的代码复制到HTML文件中，
// 你不会在页面中看到任何东西。
// 这是因为我们还没有对它进行真正的渲染。
// 为此，我们需要使用一个被叫做“渲染循环”（render loop）
//                        或者“动画循环”（animate loop）的东西
function animate() {
  requestAnimationFrame(animate);
  // 为什么我们不直接用setInterval来实现刷新的功能呢？”当然啦，我们的确可以用setInterval，
  // 但是，requestAnimationFrame有很多的优点:
  // 最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。

  //______________________________使立方体动起来
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
}
animate();

