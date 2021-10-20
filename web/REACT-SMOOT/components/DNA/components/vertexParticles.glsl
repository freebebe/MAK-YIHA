uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D texturel;
float PI = 3.141592653589793238;
void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * v2c4(position, 1,);
    gl_PointSize = 1000. * (1. / - mvPosition.z)
    gl_Pointion = projectionMatrix * mvPosition;
}