let productOfBank = []

class Product {
    constructor(name, percent, timeOfCap){
        this.name = name;
        this.percent = percent;
        this.timeOfCap = timeOfCap;
    }
}

function addProduct() {
    let newProduct = new Product (
        document.querySelector('.bank__name').value,
        document.querySelector('.bank__percent').value,
        document.querySelector('.bank__cap_term').value
    )
    productOfBank.push(newProduct)

    let option = document.createElement('option')
    option.innerHTML = newProduct.name
    user__product.append(option)
}

document.querySelector('.bank__send-to-user').addEventListener('click', addProduct)

function getUserValues() {
    return {
        name: document.querySelector('.user__select-name').value,
        amount: document.querySelector('.user__amount').value,
        period: document.querySelector('.user__period').value
    }
}

function formula() {
    let userValue = getUserValues()
    for(let i = 0; i < productOfBank.length; i++) {
        let bankValue = productOfBank[i]
        if(userValue.name === bankValue.name ){
            let result = userValue.amount * (1 + bankValue.percent / 100 / userValue.period) ** (bankValue.timeOfCap)
            addResult(`User: ${userValue.name}<br></br>Amount: ${userValue.amount}<br></br>Result: ${result}`)
        }
    }
}

function addResult(formula) {
    let cash = document.createElement('div')
    cash.className = 'cash'
    cash.innerHTML = String(formula)
    show.append(cash)
}

function clear() {
    let inputs = document.querySelectorAll('input')
    for( i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    }
}

document.querySelector('.user__get-result').addEventListener('click', formula)
document.querySelector('.clear-btn').addEventListener('click', clear)

let bank__name = document.querySelector('.bank__name');
let bank__percent = document.querySelector('.bank__percent');
let bank__cap_term = document.querySelector('.bank__cap_term');
let user__amount = document.querySelector('.user__amount');
let user__period = document.querySelector('.user__period');
let btn__bank = document.querySelector('.bank__send-to-user');
let btn__user = document.querySelector('.user__get-result');
 
bank__name.oninput = function(){
  if (bank__name.value != '' && bank__percent.value != '' && bank__cap_term.value != ''){
    btn__bank.removeAttribute('disabled');
  }else{
    btn__bank.setAttribute('disabled', true);
  }
}
bank__percent.oninput = function(){
    if (bank__name.value != '' && bank__percent.value != '' && bank__cap_term.value != ''){
      btn__bank.removeAttribute('disabled');
    }else{
      btn__bank.setAttribute('disabled', true);
    }
  }
bank__cap_term.oninput = function(){
    if (bank__name.value != '' && bank__percent.value != '' && bank__cap_term.value != ''){
      btn__bank.removeAttribute('disabled');
    }else{
      btn__bank.setAttribute('disabled', true);
    }
  }
user__amount.oninput = function(){
    if (user__amount.value != '' && user__period.value != ''){
        btn__user.removeAttribute('disabled');
    }else{
        btn__user.setAttribute('disabled', true);
    }
  }
user__period.oninput = function(){
    if (user__amount.value != '' && user__period.value != ''){
        btn__user.removeAttribute('disabled');
    }else{
        btn__user.setAttribute('disabled', true)
    }
}