let productOfBank = []

class Product {
    constructor(name, percent, timeOfCap){
        this.name = name;
        this.percent = percent;
        this.timeOfCap = timeOfCap;
    }
}

function addProduct() {
    let newProduct
    newProduct = new Product (
        document.querySelector('.bank__name').value,
        document.querySelector('.bank__percent').value,
        document.querySelector('.bank__cap_term').value
    )
    productOfBank.push(newProduct)

    let option = document.createElement('option')
    user__product.append(option)
    option.innerHTML = newProduct.name
}

function getUserValues() {
    return {
        name: document.querySelector('.user__select-name').value,
        amount: document.querySelector('.user__amount').value,
        period: document.querySelector('.user__period').value
    }
}

function formula() {
    let userValue = getUserValues()
    for(i = 0; i < productOfBank.length; i++) {
        let bankValue = productOfBank[i]
        if(userValue.name === bankValue.name ){
            let result = (userValue.amount * (1 + (bankValue.percent / 100) / (12 / bankValue.timeOfCap)) ** (userValue.period / bankValue.timeOfCap))
            addResult(`User: ${userValue.name}<br></br>Amount: ${userValue.amount}<br></br>Result: ${result}`)
        }   
    }
}

function addResult(formula) {
    let cash = document.createElement('div')
    cash.className = 'cash'
    show.append(cash)
    cash.innerHTML = String(formula)
}

function removeEl() {
    let elementToRemove = document.querySelector('.cash')
    elementToRemove.remove()
}   

document.querySelector('.delete-btn').addEventListener('click', removeEl)
document.querySelector('.bank__send-to-user').addEventListener('click', addProduct)
document.querySelector('.user__get-result').addEventListener('click', formula)

const bank__name = document.querySelector('.bank__name');
const bank__percent = document.querySelector('.bank__percent');
const bank__cap_term = document.querySelector('.bank__cap_term');
const user__amount = document.querySelector('.user__amount');
const user__period = document.querySelector('.user__period');
const sendBtn = document.querySelector('.bank__send-to-user');
const getResultBtn = document.querySelector('.user__get-result');
const clearBtn = document.querySelector('.clear-btn');

function check() {
  const bank__name_value = bank__name.value;
  const bank__percent_value = bank__percent.value;
  const bank__cap_term_value = bank__cap_term.value;
  const user__amount_value = user__amount.value;
  const user__period_value = user__period.value;

  if (bank__name_value && bank__percent_value && bank__cap_term_value) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
  if (user__amount_value && user__period_value) {
    getResultBtn.disabled = false;
  } else {
    getResultBtn.disabled = true;
  }
}

bank__name.addEventListener('input', check);
bank__percent.addEventListener('input', check);
bank__cap_term.addEventListener('input', check);
user__amount.addEventListener('input', check);
user__period.addEventListener('input', check);

clearBtn.addEventListener('click', () => {
    bank__name.value = '';
    bank__percent.value = '';
    bank__cap_term.value = '';
    user__amount.value = '';
    user__period.value = '';
  
  check();
})