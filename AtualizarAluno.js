let atualizar = document.getElementById('atualizar')
let buscar = document.getElementById('buscar')
let res = document.getElementById('res')

buscar.addEventListener('click', (e) => {
    e.preventDefault()
    let id = Number(document.getElementById('id').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno/${id}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            document.getElementById('nome').value = dado.nome
            document.getElementById('sobrenome').value = dado.sobrenome
            document.getElementById('matricula').value = dado.matricula
            document.getElementById('telefone').value = dado.telefone              
            document.getElementById('email').value = dado.email           
             
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })


})

atualizar.addEventListener('click', (e)=>{
    e.preventDefault()

    let id = Number(document.getElementById('id').value)
    let nome = document.getElementById('nome').value 
    let sobrenome = document.getElementById('sobrenome').value 
    let matricula = document.getElementById('matricula').value 
    let telefone = document.getElementById('telefone').value             
    let email = document.getElementById('email').value            
     

    const valores = {
      nome: nome,
      sobrenome: sobrenome,
      matricula: matricula,
      telefone: telefone,
      email: email
      
    }
    console.log(valores)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
            res.innerHTML +=`Dados Atualizados!`
          })
    .catch((err)=>{
        console.err('Erro ao gravar os dados no banco de dados!',err)
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