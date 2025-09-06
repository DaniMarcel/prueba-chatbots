// script.js
// Manejador para cambiar secciones al hacer clic en el nav
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a[data-target]');
    const sections = document.querySelectorAll('.content-section');
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
  
        // Actualiza clases 'active' en nav
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
  
        // Muestra la sección correspondiente
        sections.forEach(sec => {
          if (sec.id === targetId) {
            sec.classList.add('active');
          } else {
            sec.classList.remove('active');
          }
        });
      });
    });
  
    // Activa la primera sección por defecto
    links[0].classList.add('active');
  });
  
  // --- Tema claro/oscuro ---
document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('toggle-theme');
  const darkClass = 'dark-theme';

  // Cargar preferencia de tema
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add(darkClass);
    themeBtn.textContent = '☀️ Tema Claro';
  }

  themeBtn.addEventListener('click', function() {
    document.body.classList.toggle(darkClass);
    // Cambia el texto/icono según el tema
    if (document.body.classList.contains(darkClass)) {
      themeBtn.textContent = '☀️ Tema Claro';
      localStorage.setItem('theme', 'dark');
    } else {
      themeBtn.textContent = '🌙 Tema Oscuro';
      localStorage.setItem('theme', 'light');
    }
  });
});


db.productos.insertOne({ nombre: "EcoBotella", categoria: "reciclaje", stock: 500 });

db.productos.find({ stock: { $gt: 100 } });

db.productos.updateOne( { nombre: "EcoBotella" }, { $set: { stock: 300 } } );