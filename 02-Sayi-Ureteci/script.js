// İşlem yapılacak olan etiketler seçildi.
const inputText = document.querySelector('#input-text');
const button = document.querySelector('#input-button');
const form = document.querySelector('.form-field');
const main = document.querySelector('.container');

// Çalışacak event çağrıldı.
form.addEventListener('submit', AddDiv);

// Div etiketini oluşturma metodudur.
function AddDiv(e) {
    ClearUIDivItems();
    const value = parseInt(inputText.value);
    AddDivUI(value);
    inputText.value = '';
    e.preventDefault();
}

// Daha önce oluşturulmuş div etiketlerini sayfadan temizler.
function ClearUIDivItems() { 
    while(main.firstElementChild !== null){
        main.firstElementChild.remove();
    }
}

// Div etiketinin özelliklerini tanımlayan ve sayfaya ekleyen metotdur.
function AddDivUI(value) {
    for(let i = 1; i <= value; i++){
        const divItem = document.createElement('div');
        divItem.className = 'div';
        divItem.id = i;
        divItem.textContent = i;
        divItem.setAttribute('style', 'background-color: ' + NumberControl(i) + ';');
        main.appendChild(divItem);
    }
}

// Girilen sayının arka plan rengini belirleyen metotdur.
function NumberControl(number){
    if(IsPrime(number)){
        return 'red';
    }
    else if(number % 2 == 0){
        return 'green';
    }
    else{
        return 'yellow';
    }
}

// Girilen sayının asal sayı olup olmadığını belirleyen metotdur.
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