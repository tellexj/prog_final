let filaDiv = document.getElementById('fila')
let graficoSaidas


function atualizarFila() {
  let fila = JSON.parse(localStorage.getItem('fila')) || []
  filaDiv.innerHTML = ''

  fila.forEach((item, index) => {
    filaDiv.innerHTML += `
      <div>
        <strong>${index + 1}. ${item.nome}</strong> - ${item.motivo} 
        <br>Status: ${item.status}
        <br>
        ${item.status === 'Aguardando aprovação' ? `
          <button onclick="autorizar(${index})">Autorizar</button>
          <button onclick="recusar(${index})">Recusar</button>
        ` : ''}
        <hr>
      </div>
    `
  })
}

function autorizar(index) {
  let fila = JSON.parse(localStorage.getItem('fila')) || []
  fila[index].status = 'Autorizado ✅'
  localStorage.setItem('fila', JSON.stringify(fila))
  atualizarFila()
  alert(`Saída de ${fila[index].nome} autorizada.`)
}

function recusar(index) {
  let fila = JSON.parse(localStorage.getItem('fila')) || []
  fila[index].status = 'Recusado ❌'
  localStorage.setItem('fila', JSON.stringify(fila))
  atualizarFila()
  alert(`Saída de ${fila[index].nome} recusada.`)
}

function limparFinalizados() {
  let fila = JSON.parse(localStorage.getItem('fila')) || []

  fila = fila.filter(item => item.status === 'Aguardando aprovação')

  localStorage.setItem('fila', JSON.stringify(fila))
  atualizarFila()
  alert('Lista limpa: foram removidos todos que já estavam autorizados ou recusados.')
}

atualizarFila()

function gerarGrafico() {
  let fila = JSON.parse(localStorage.getItem('fila')) || []


  let autorizadas = fila.filter(item => item.status === 'Autorizado ✅').length
  let recusadas = fila.filter(item => item.status === 'Recusado ❌').length
  let aguardando = fila.filter(item => item.status === 'Aguardando aprovação').length

  const ctx = document.getElementById('graficoSaidas').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Autorizadas', 'Recusadas', 'Aguardando'],
      datasets: [{
        label: 'Número de saídas',
        data: [autorizadas, recusadas, aguardando],
        backgroundColor: [
          'rgba(145, 75, 192, 0.6)',
          'rgba(202, 135, 247, 0.6)',
          'rgba(151, 67, 230, 0.6)'
        ],
        borderColor: [
          'rgba(145, 75, 192, 0.6)',
          'rgba(202, 135, 247, 0.6)',
          'rgba(151, 67, 230, 0.6)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  })
}

gerarGrafico()

function atualizarGrafico() {
  gerarGrafico()
  alert('Gráfico atualizado!')
}



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
