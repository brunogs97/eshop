const itens = document.querySelectorAll('.accordion button')
const openModalButton = document.querySelector('#open-modal')
const closeModalButton = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const data = new Date()
const boxDataHora = document.querySelector('#data-hora')

function botaoAlternar() {
    const itemAlternar = this.getAttribute('aria-expanded')

    for(let i = 0; i < itens.length; i++) {
        itens[i].setAttribute('aria-expanded', 'false')
    };

    if(itemAlternar == 'false') {
        this.setAttribute('aria-expanded', 'true')
    }
}

itens.forEach(item => item.addEventListener('click', botaoAlternar))

// se a classe esta é removida e e não tiver é adicionada
const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

//evento padrão de click em todos os elementos
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal())
})

boxDataHora.append(data)
