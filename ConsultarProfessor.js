let consultar = document.getElementById('consultar')
let res = document.getElementById('res')
let resA = document.getElementById('resA')


consultar.addEventListener('click', () => {
  let id = Number(document.getElementById('id').value)

  res.innerHTML = ' '
  resA.innerHTML = ' '

  fetch(`http://localhost:8081/professor/${id}`)
    .then(resp => resp.json())
    .then(dado => {
      console.log(dado)

      res.innerHTML += `<hr>`
      res.innerHTML += `Consulta Professor<br><br>`
      resA.innerHTML +=
        `<div class="card-consultar">
              
                <p> Nome do aluno: ${dado.nome}<p>
                <p> Sobrenome do aluno: ${dado.sobrenome}</p>
                <p>  Matricula: ${dado.matricula}</p>
            
                <p> Telefone: ${dado.telefone}</p>
                <p> Email: ${dado.email}</p>
                
            </div>`
    })
    .catch((err) => {
      console.error('Erro ao consultar os dados!', err)
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
  });