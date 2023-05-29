// Obtén el contenedor del efecto de fondo
const backgroundEffect = document.querySelector('.background-effect');

// Genera los círculos y añádelos al contenedor
for (let i = 0; i <50; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  backgroundEffect.appendChild(circle);
}

// Anima los círculos
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  animateCircle(circle);
});

function animateCircle(circle) {
  // Obtén valores aleatorios para la posición y el tamaño de cada círculo
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomSize = Math.random() * 20 + 10; // Ajusta el rango del tamaño de los círculos según tus necesidades

  // Aplica los valores aleatorios a la posición y el tamaño del círculo
  circle.style.width = randomSize + 'px';
  circle.style.height = randomSize + 'px';
  circle.style.top = randomY + 'px';
  circle.style.left = randomX + 'px';

  // Define una animación para mover los círculos aleatoriamente
  circle.animate(
    [
      { transform: 'translate(0, 0)' },
      {
        transform: `translate(${Math.random() * 100 - 50}px, ${
          Math.random() * 100 - 50
        }px)`,
      },
    ],
    {
      duration: 3000, // Ajusta la duración de la animación según tus necesidades
      iterations: Infinity, // Para que la animación se repita constantemente
      direction: 'alternate', // Para que la animación se reproduzca en ambos sentidos
      easing: 'ease-in-out', // Ajusta el tipo de animación según tus preferencias
    }
  );
}

console.log('llega a consola')

