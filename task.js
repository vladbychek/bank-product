let bankProduct = [];

class Product {
   constructor(name, percent, timeOfCap){
      this.name = name,
      this.percent = percent,
      this.timeOfCap = timeOfCap
   }
}


function getBankValues() {
   let a = new Product (
      document.querySelector('.bank__val1').value,
      document.querySelector('.bank__val2').value,
      document.querySelector('.bank__val2').value
   );
   bankProduct.push(a);

   let option = document.createElement('option');           
   option.innerHTML = a.name;
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


function user() {
   let x = getUserValues();
   for (let i = 0; i < bankProduct.length; i++){
      let u = Object.values(bankProduct[i])
      for (let i = 0; i < u.length; i++){
         if (x[0] === u[i]) {
            let result = x[1] * ((1 + (u[i+1] / 100) / (12 / u[i+2])) ** (x[2] / u[i+2]));
            result.toFixed();
            answer('Депозит:' + ' ' + x[1] + '<br \/><br \/>Процентов начисленно:' + ' ' + (result - x[1]) + ' ' + '<br \/><br \/>Общая сумма выплат:' + ' ' + result)
         }
         break;
      }
   }
}




function answer (user) {
   let cash = document.createElement('div');
   cash.className = 'cashh';
   cash.innerHTML = String(user);
   rum.append(cash);
}


document.querySelector('.user__btn').addEventListener('click', user);





