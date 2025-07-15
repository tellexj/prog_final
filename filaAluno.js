let btnAdicionar = document.getElementById('adicionar')

btnAdicionar.addEventListener('click', () => {
  let nome = document.getElementById('nome').value
  let motivo = document.getElementById('motivo').value

  if (nome && motivo) {
    let fila = JSON.parse(localStorage.getItem('fila')) || []
    fila.push({ nome: nome, motivo: motivo, status: 'Aguardando aprovação' })
    localStorage.setItem('fila', JSON.stringify(fila))
    alert('Solicitação enviada!')
    document.getElementById('nome').value = ''
    document.getElementById('motivo').value = ''
  } else {
    alert('Preencha nome e motivo!')
  }
})
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove('show');
  }
});
