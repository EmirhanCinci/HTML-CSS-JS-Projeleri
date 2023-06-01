// Tüm div etiketleri seçilir.
const divList = document.querySelectorAll('div');

// Div etiketlerinin sıra ile arka plan rengi değiştirilir.
divList.forEach(function(divItem){
    let id = parseInt(divItem.id);
    divItem.setAttribute('style', 'background-color: ' + NumberControl(id) + ';')
});

// Girilen sayıya göre arka plan rengini belirleyen metot
function NumberControl(number){
    if(IsPrime(number)){
        return 'red';
    }
    else if(number % 2 == 0){
        return 'green';
    }
    else {
        return 'yellow';
    }
}

// Girilen sayının asal sayı olup olmadığını belirleyen metot
function IsPrime(number){
    if(number < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}