let botaoAddCarrinho = document.querySelectorAll('#btn-add-cart')
let conteudoCarrinho = document.getElementsByTagName('tbody')[0]
let campoQTD = document.getElementsByClassName('quantidade')
let btnRemover = document.getElementsByClassName('btn-remove')
let qtdItemCarrinho = document.querySelector('.qtd-item')

let qtdItem = 0

// pegar todos os botoes add ao carrinho
for (let i = 0; i < botaoAddCarrinho.length; i++) {
    botaoAddCarrinho[i].addEventListener('click', addNoCarrinho)
}

// essa funcao ajuda a add itens no carrinho
function addNoCarrinho(event) {
    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].src
    let itemName = btnParent.children[1].innerText
    let itemPrice = btnParent.children[3].innerText

    itemContainer.innerHTML = `
        <td><input id="checkboxType" type="checkbox"></td>
        <td><img src=${itemImage} width="20%" alt=""></td>
        <td>
            <h3 class="nome-item">${itemName}</h3>
        </td>
        <td  class="valor-item"><h3>${itemPrice}</h3></td>
        <td><input type='number' class='quantidade' value ='1'></td>
        <td class="valor-total-item"><h3>${itemPrice}</h3></td>
        <td><button class="btn-remove" type="button">Remove</td>
    `

    conteudoCarrinho.append(itemContainer)

    //acessar campos de quantidades
    for(let i = 0; i < campoQTD.length; i++) {
        campoQTD[i].value = 1
        campoQTD[i].addEventListener('change', custoTotal)
    }

    for(let i = 0; i < btnRemover.length; i++) {
        btnRemover[i].addEventListener('click', removerItem)
    }

    qtdItemCarrinho.textContent = `${qtdItem += 1}`

    valorTotal()
}

//funcao para multiplicar a quantidade e o preco
function custoTotal(event) {
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('valor-item')[0]
    total_field = quantity_parent.getElementsByClassName('valor-total-item')[0]
    price_field_content = price_field.innerText.replace('$', '')
    total_field.children[0].innerHTML = '$' + quantity.value * price_field_content
    valorTotal()
    if(isNaN(quantity.value)  || quantity.value <= 0) {
        quantity.value = 1
    }
}

function valorTotal() {
    let total = 0
    let grand_total = document.getElementsByClassName('campo-valor-total')[0]
    all_total_fields = document.getElementsByClassName('valor-total-item')

    for(let i = 0; i < all_total_fields.length; i++) {
        all_price = Number(all_total_fields[i].innerText.replace('$', ''))
        total+=all_price
    }

    grand_total.children[0].innerText = '$' + total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}

function removerItem(event) {
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)

    valorTotal()

    qtdItemCarrinho.textContent = `${qtdItem -= 1}`
}