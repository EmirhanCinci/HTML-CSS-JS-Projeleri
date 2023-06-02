// İşlem yapılacak olan etiketler seçildi.
const cardList = document.querySelectorAll('.card');
const allButton = document.querySelector('#btn-all');
const koreaButton = document.querySelector('#btn-korea');
const japanButton = document.querySelector('#btn-japan');
const chinaButton = document.querySelector('#btn-china');

// Fonksiyonların event tanımlamaları yapıldı.
allButton.addEventListener('click', AllCard);
koreaButton.addEventListener('click', KoreaCard);
japanButton.addEventListener('click', JapanCard);
chinaButton.addEventListener('click', ChinaCard);

// Tüm yemek kartlarını getiren metotdur.
function AllCard(){
    cardList.forEach(function(card){
        card.setAttribute('style', 'display: default;');
    });
}

// Sadece kore yemeklerini getiren metotdur.
function KoreaCard(){
    cardList.forEach(function (card) {
        if (card.classList == 'card korea'){
            card.setAttribute('style', 'display: default;');
        }
        else {
            card.setAttribute('style', 'display: none;');
        }
    });
}

// Sadece japon yemeklerini getiren metotdur.
function JapanCard(){
    cardList.forEach(function (card) {
        if (card.classList == 'card japan'){
            card.setAttribute('style', 'display: default;');
        }
        else {
            card.setAttribute('style', 'display: none;');
        }
    });
}

// Sadece çin yemeklerini getiren metotdur.
function ChinaCard(){
    cardList.forEach(function (card) {
        if (card.classList == 'card china'){
            card.setAttribute('style', 'display: default;');
        }
        else {
            card.setAttribute('style', 'display: none;');
        }
    });
}