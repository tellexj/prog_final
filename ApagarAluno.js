let apagar = document.getElementById('apagar')
let res = document.getElementById('res')

apagar.addEventListener('click', () => {
    let id = Number(document.getElementById('id').value)

    fetch(`http://localhost:8081/aluno/${id}`, { 
        method: 'DELETE'
    })
    .then(resp => {
        console.log(resp)
        console.log(resp.status)
        if(resp.status == 204){
            res.innerHTML += `Dados excluídos com sucesso! <br>`
        } else {
            res.innerHTML += `Os dados não foram excluídos! <br>`
        }
    })
    .catch((err) => {
        console.error('Erro ao apagar os dados!', err)
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
