let sunOrbitRadius = 0;
let earthOrbitRadius = 150; 
let mercuryOrbitRadius = 100; 
let venusOrbitRadius = 130; 
const angularSpeedEarth = 0.01; 
const angularSpeedMercury = 0.02;
const angularSpeedVenus = 0.015;

function movePlanets() {
  let earth = document.querySelector('.earth');
  let mercury = document.querySelector('.mercury');
  let venus = document.querySelector('.venus');
  
  let earthX = earthOrbitRadius * Math.cos(sunOrbitRadius);
  let earthY = earthOrbitRadius * Math.sin(sunOrbitRadius);
  earth.style.left = `calc(50% - ${earthX}px)`;
  earth.style.top = `calc(50% - ${earthY}px)`;
  
  let mercuryX = mercuryOrbitRadius * Math.cos(sunOrbitRadius * 1.5);
  let mercuryY = mercuryOrbitRadius * Math.sin(sunOrbitRadius * 1.5);
  mercury.style.left = `calc(50% - ${mercuryX}px)`;
  mercury.style.top = `calc(50% - ${mercuryY}px)`;

  let venusX = venusOrbitRadius * Math.cos(sunOrbitRadius * 1.2);
  let venusY = venusOrbitRadius * Math.sin(sunOrbitRadius * 1.2);
  venus.style.left = `calc(50% - ${venusX}px)`;
  venus.style.top = `calc(50% - ${venusY}px)`;
}

function animate() {
  sunOrbitRadius += angularSpeedEarth; // velocidade do Sol
  movePlanets();
  requestAnimationFrame(animate);
}

animate();
