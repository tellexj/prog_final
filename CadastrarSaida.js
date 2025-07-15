let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

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

    res.innerHTML = ''

    fetch('http://localhost:8081/saida', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
        res.innerHTML = 'Saída cadastrada!'
    })
    .catch((err) => {
        console.error('Erro ao gravar os dados no banco de dados!', err)
    })
})

function toggleMenu() {
    const menu = document.getElementById('menu')
    menu.classList.toggle('show')
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu')
    const menuIcon = document.querySelector('.menu-icon')
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('show')
    }
})