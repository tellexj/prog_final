let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', ()=>{


    fetch(`http://localhost:8081/saida`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            res.innerHTML += `Data da Solicitação: ${dad.dataSolicitacao} <br>`
            res.innerHTML += `Hora da Saída: ${dad.horaSaida} <br>`
            res.innerHTML += `Hora do Retorno: ${dad.horaRetorno} <br>`
            res.innerHTML += `Motivo: ${dad.motivo} <br>`
            res.innerHTML += `Local do Destino: ${dad.localDestino} <br>`
            res.innerHTML += `Status: ${dad.status} <br>`
            res.innerHTML += `Nome do Aluno: ${dad.nomeAluno} <br>`
            res.innerHTML += `Nome do Professor: ${dad.nomeProfessor} <br>`
            res.innerHTML += `ID da Saída: ${dad.codSaida} <br>`
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