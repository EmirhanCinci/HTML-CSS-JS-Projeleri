// İşlem yapılacak olan etiketler seçildi.
const mainImg = document.querySelector("#main-img");
const blueImg = document.querySelector("#blue");
const greenImg = document.querySelector("#green");
const lightBlueImg = document.querySelector("#light-blue");
const redImg = document.querySelector("#red");

// Event olayları çağrıldı.
eventListeners();

// Tüm eventler bir metotda toplanıldı.
function eventListeners()
{
    blueImg.addEventListener("click", BlueShoe);
    greenImg.addEventListener("click", GreenShoe);
    lightBlueImg.addEventListener("click", LightBlueShoe);
    redImg.addEventListener("click", RedShoe);
}

// Mavi ayakkabıyı getiren metotdur.
function BlueShoe()
{
    mainImg.src = "img/nike-b.png";
}

// Yeşil ayakkabıyı getiren metotdur.
function GreenShoe()
{
    mainImg.src = "img/nike-g.png";
}

// Açık mavi ayakkabıyı getiren metotdur.
function LightBlueShoe()
{
    mainImg.src = "img/nike-s.png";
}

// Kırmızı ayakkabıyı getiren metotdur.
function RedShoe()
{
    mainImg.src = "img/nike.png";
}