let productOfBank = []

class Product {
    constructor(name, percent, timeOfCap){
        this.name = name,
        this.percent = percent,
        this.timeOfCap = timeOfCap
    }
}


function bankValues() {
    let newProduct = new Product (
        document.querySelector('.bank__val1').value,
        document.querySelector('.bank__val2').value,
        document.querySelector('.bank__val3').value
    )

    productOfBank.push(newProduct)

    let option = document.createElement('option')
    option.innerHTML = newProduct.name
    user__product.append(option)
}

document.querySelector('.bank__btn').addEventListener('click', bankValues)

function userValues() {
    return [
        document.querySelector('.user__select').value,
        document.querySelector('.user__val2').value,
        document.querySelector('.user__val3').value
    ];
};

function formula() {
    let userValue = userValues()
    for(let i = 0; i < productOfBank.length; i++) {
        let bankValue = Object.values(productOfBank[i])
            if(userValue[0] === bankValue[0] ){
                let result = userValue[1] * (1 + bankValue[1] / 100 / userValue[2]) ** (bankValue[2])
                addResult(`User: ${userValue[0]}<br></br>Amount:${userValue[1]}<br></br>Result:${result}`)
            }
    }
}

function addResult(formula) {
    let cash = document.createElement('div');
    cash.className = 'cash';
    cash.innerHTML = String(formula);
    show.append(cash);
}



function clear() {
    let inputs = document.querySelectorAll('input')
    let selects = document.querySelectorAll('select')
    for( i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    }
    for( i = 0; i < selects.length; i++){
        selects[i].value = ''
    }
}



document.querySelector('.user__btn').addEventListener('click', formula)
document.querySelector('.user__btn').addEventListener('click', lear)
