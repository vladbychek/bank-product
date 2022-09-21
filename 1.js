let bankProduct = [];

class Product {
   constructor(name, percent, timeOfCap){
      this.name = name,
      this.percent = percent,
      this.timeOfCap = timeOfCap
   }
}

function getBankValues() {
   let newProduct = new Product (
      document.querySelector('.bank__val1').value,
      document.querySelector('.bank__val2').value,
      document.querySelector('.bank__val2').value
   );
   bankProduct.push(newProduct);

   let option = document.createElement('option');           
   option.innerHTML = newProduct.name;
   user__product.append(option);
};

document.querySelector('.bank__btn').addEventListener('click', getBankValues);


function getUserValues() {
   return [
      document.querySelector('.user__select').value,
      document.querySelector('.user__val2').value,
      document.querySelector('.user__val3').value
   ];
};


function formula() {
   let userValues = getUserValues();
   for (let i = 0; i < bankProduct.length; i++){
      let bankValues = Object.values(bankProduct[i])
      for (let i = 0; i < bankValues.length; i++){
         if (userValues[0] === bankValues[i]) {
            let result = userValues[1] * ((1 + (bankValues[i+1] / 100) / (12 / bankValues[i+2])) ** (userValues[2] / bankValues[i+2]));
            finalFormula('Amount:' + ' ' + userValues[1] +' ' + '<br></br> Result:' + ' ' + result)
         }
         break;
      }
   }
}


function finalFormula (formula) {
   let cash = document.createElement('div');
   cash.className = 'cash';
   cash.innerHTML = String(formula);
   show.append(cash);
}

function clear() {
   let inputs = document.querySelectorAll('input');
   let selects = document.querySelectorAll('select');
   for (i = 0;  i < selects.length; i++) {
      selects[i].value = '';
      };
   for (i = 0;  i < inputs.length; i++) {
   inputs[i].value = '';
   };
}


document.querySelector('.user__btn').addEventListener('click', formula);
document.querySelector('.user__btn').addEventListener('click', clear);





