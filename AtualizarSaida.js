let atualizar = document.getElementById('atualizar')
let buscar = document.getElementById('buscar')
let res = document.getElementById('res')

buscar.addEventListener('click', (e) => {
    e.preventDefault()
    let id = Number(document.getElementById('id').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/saida/${id}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            document.getElementById('dataSolicitacao').value = dado.dataSolicitacao
            document.getElementById('horaSaida').value = dado.horaSaida
            document.getElementById('horaRetorno').value = dado.horaRetorno
            document.getElementById('motivo').value = dado.motivo         
            document.getElementById('localDestino').value = dado.localDestino           
            document.getElementById('status').value = dado.status       
            document.getElementById('nomeAluno').value = dado.nomeAluno          
            document.getElementById('nomeProfessor').value = dado.nomeProfessor           
            document.getElementById('aluno_cod').value = dado.aluno_cod           
            document.getElementById('professor_cod').value = dado.professor_cod           
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })
})

atualizar.addEventListener('click', (e) => {
    e.preventDefault()

    
    let id = Number(document.getElementById('id').value)

    let dataSolicitacao = document.getElementById('dataSolicitacao').value 
    let horaSaida = document.getElementById('horaSaida').value 
    let horaRetorno = document.getElementById('horaRetorno').value 
    let motivo = document.getElementById('motivo').value         
    let localDestino = document.getElementById('localDestino').value           
    let status = document.getElementById('status').value     
    let nomeAluno = document.getElementById('nomeAluno').value        
    let nomeProfessor = document.getElementById('nomeProfessor').value            
    let aluno_cod = document.getElementById('aluno_cod').value          
    let professor_cod = document.getElementById('professor_cod').value      

    const valores = {
      dataSolicitacao: dataSolicitacao,
      horaSaida: horaSaida,
      horaRetorno: horaRetorno,
      motivo: motivo,
      localDestino: localDestino,
      status: status,
      nomeAluno: nomeAluno,
      nomeProfessor: nomeProfessor,
      aluno_cod: aluno_cod,
      professor_cod: professor_cod
    }

    console.log(valores)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/saida/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
        res.innerHTML += `Dados Atualizados!`
    })
    .catch((err) => {
        console.error('Erro ao gravar os dados no banco de dados!', err)
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
