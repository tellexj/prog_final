let consultar = document.getElementById('consultar')
let res = document.getElementById('res')
let resA = document.getElementById('resA')

consultar.addEventListener('click', () => {
  let id = Number(document.getElementById('id').value)

  res.innerHTML = ''
  resA.innerHTML = ''

  fetch(`http://localhost:8081/saida/${id}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`Erro HTTP! Status: ${resp.status}`)
      }
      return resp.json()
    })
    .then(dado => {
      console.log(dado)

      res.innerHTML += `<hr>`
      res.innerHTML += `Consulta Saída<br><br>`
      resA.innerHTML +=
        `<div class="card-consultar">
            <p> Data da Solicitação: ${dado.dataSolicitacao}</p>
            <p> Hora da Saída: ${dado.horaSaida}</p>
            <p> Hora do Retorno: ${dado.horaRetorno}</p>
            <p> Motivo: ${dado.motivo}</p>
            <p> Local do Destino: ${dado.localDestino}</p>
            <p> Status: ${dado.status}</p>
            <p> Nome do Aluno: ${dado.nomeAluno}</p>
            <p> Nome do Professor: ${dado.nomeProfessor}</p>
            <p> ID da Saída: ${dado.codSaida}</p>
        </div>`
    })
    .catch((err) => {
      console.error('Erro ao consultar os dados!', err)
      res.innerHTML = `<p style="color:red;">Erro ao consultar a saída. Verifique o ID informado.</p>`
    })
})

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}
document.addEventListener('click', function (event) {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove('show');
  }
});
