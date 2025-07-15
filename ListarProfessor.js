let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', ()=>{


    fetch(`http://localhost:8081/professor`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            res.innerHTML += `Nome: ${dad.nome} <br>`
            res.innerHTML += `Sobrenome: ${dad.sobrenome} <br>`
            res.innerHTML += `Matrícula: ${dad.matricula} <br>`
            res.innerHTML += `Telefone: ${dad.telefone} <br>`
            res.innerHTML += `Email: ${dad.email} <br>`
            res.innerHTML += `ID do Professor: ${dad.codProfessor} <br>`

            res.innerHTML += `<hr>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados!',err)
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