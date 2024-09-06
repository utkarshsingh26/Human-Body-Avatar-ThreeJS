import * as THREE from 'three'; 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5; 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate); 
// renderer.setClearColor(0xffffff); 
document.body.appendChild(renderer.domElement); 



const material = new THREE.MeshBasicMaterial( { color: 0x87CEEB } );

//The head (a sphere)

const headGeometry = new THREE.SphereGeometry(0.5,32,32);
const head = new THREE.Mesh(headGeometry, material);
head.position.y = 1.65;
//scene.add(head);

// The body (a cylinder)

const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const body = new THREE.Mesh(bodyGeometry, material);
//scene.add(body);

// The arms (also cylinders)

const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 32);
const leftArm = new THREE.Mesh(armGeometry, material);
const rightArm = new THREE.Mesh(armGeometry, material);

leftArm.position.set(-0.75, 1, 0);
leftArm.rotation.z = Math.PI / 2;
rightArm.position.set(0.75, 1, 0);
rightArm.rotation.z = Math.PI / 2;

//scene.add(leftArm);
//scene.add(rightArm);

// The legs (also cylinders)

const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5, 32);
const leftLeg = new THREE.Mesh(armGeometry, material);
const rightLeg = new THREE.Mesh(armGeometry, material);

leftLeg.position.set(-0.25, -1.75, 0);
rightLeg.position.set(0.25, -1.75, 0);

//scene.add(leftLeg);
//scene.add(rightLeg);

// The eyes (spheres)
const eyeMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);

leftEye.position.set(-0.25, 1.6, 0.5);;
rightEye.position.set(0.25, 1.6, 0.5);

//scene.add(leftEye);
//scene.add(rightEye);

// The eyeballs (also spheres)
const eyeBallMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const eyeBallGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const leftEyeBall = new THREE.Mesh(eyeBallGeometry, eyeBallMaterial);
const rightEyeBall = new THREE.Mesh(eyeBallGeometry, eyeBallMaterial);

leftEyeBall.position.set(-0.25, 1.57, 0.6);;
rightEyeBall.position.set(0.25, 1.57, 0.6);

//scene.add(leftEyeBall);
//scene.add(rightEyeBall);


// The nose (a cylinder)
const noseGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 32);
const nose = new THREE.Mesh(noseGeometry, eyeMaterial);
nose.position.set(0, 1.45, 0.6);;

//scene.add(nose);


// The mouth (a sphere)
const mouthGeometry = new THREE.SphereGeometry(0.1, 8, 8);
const mouth = new THREE.Mesh(mouthGeometry, eyeBallMaterial);
mouth.position.set(0, 1.2, 0.6);;

//scene.add(mouth);

// The tongue (a spherea)
const tongueMaterial = new THREE.MeshBasicMaterial( { color: '#FFC0CB' } );
const tongueGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const tongue = new THREE.Mesh(tongueGeometry, tongueMaterial);
tongue.position.set(0, 1.1, 0.8);;


//scene.add(tongue);


const bodyGroup = new THREE.Group();
bodyGroup.add(head, body, leftArm, rightArm, leftLeg, rightLeg, leftEye, rightEye, leftEyeBall, rightEyeBall, nose, mouth, tongue)

scene.add(bodyGroup);


function animate(){
    bodyGroup.rotation.x += 0.01;
    bodyGroup.rotation.y += 0.01;
    bodyGroup.rotation.z += 0.01;

    renderer.render(scene, camera) 
}