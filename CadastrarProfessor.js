let res = document.getElementById('res');
let cadastrar = document.getElementById('cadastrar');

cadastrar.addEventListener('click', (e) => {
  e.preventDefault();

  const valores = {
    nome: document.getElementById('nome').value,
    sobrenome: document.getElementById('sobrenome').value,
    matricula: document.getElementById('matricula').value,
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value
  }

  console.log(valores);
  res.innerHTML = ''; 

  fetch(`http://localhost:8081/professor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(valores)
  })
    .then(resp => {
      if (!resp.ok) throw new Error('Erro HTTP! Status: ${resp.status}');
      return resp.json();
    })
    .then(dadosGrav => {
      console.log(dadosGrav);
      res.innerHTML = 'Professor Cadastrado!';
      
    })
    .catch((err) => {
      console.error('Erro ao gravar os dados no banco de dados!', err);
    })
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
})

