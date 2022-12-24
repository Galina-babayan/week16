//-----------поменять картинку по клику-верхняя-------------------------------------------------
let control = 0;
let mittImage = document.getElementById("mitt_image1");
function changeMe() {
  if (control == 0) {
    // let mittImage = document.getElementById("mitt_image1");
    mittImage.src = "./images/cats/aquarell2.jpg";
    control = 1;
  } else {
    mittImage.src = "./images/cats/aqurell3.jpg";
    control = 0;
  }
}

//-----------------------------------------------------
//---------------------------------------------------------
//-----РАССЧЕТ СТОИМОСТИ

const form = document.querySelector("form");
const coupon = document.querySelector('input[name="coupon"]');
const result = document.querySelector(".result");
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const paper = document.querySelector('select[name="paper"]');
const texture = document.querySelector('select[name="texture"]');
const weight = document.querySelector('select[name="weight"]');
const set = document.querySelector('select[name="set"]');

// создадим свой массив для каждого бренда бумаги по категориям:

// по плотности:

const saundersWeight = [8000, 6000, 4000];
const cansonWeight = [6500, 4500, 2000];
const nightsWeight = [1800, 1200, 800];

const paperWeights = [saundersWeight, cansonWeight, nightsWeight];

// по текстуре:

const saundersTexture = [2000, 1500, 1800];
const cansonTexture = [1700, 1400, 1600];
const nightsTexture = [400, 300, 350];

const paperTextures = [saundersTexture, cansonTexture, nightsTexture];

// по комплектации:

const saundersSet = [1500, 200, 700];
const cansonSet = [1100, 100, 1000];
const nightsSet = [130, 20, 110];

const paperSets = [saundersSet, cansonSet, nightsSet];

//--------------------------------------------------------------
// итоговый массив: - не получилось применить, как ни старалась
// тут надо как-то на цикл завязать, мне кажется - но не вышло...

// const paperTotal = [paperWeights, paperTextures, paperSets];
//----------------------------------------------------------------

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let sum = 0;

  // проверка выбора бумаги по плотности:

  const paperArrayOne = paperWeights[paper.value];
  //console.log(paperArrayOne);
  const paperWeight = paperArrayOne[weight.value];
  //console.log(paperWeight);

  sum += paperWeight;

  // проверка выбора текстуры бумаги:

  const paperArrayTwo = paperTextures[paper.value];
  const paperTexture = paperArrayTwo[texture.value];

  sum += paperTexture;

  // комплектация:

  const paperArrayThree = paperSets[paper.value];
  const paperSet = paperArrayThree[set.value];

  sum += paperSet;

  // проверка скидки:
  if (coupon.value === "december") {
    sum = sum * 0.9;
  }

  // проверка доставки

  if (deliveryRadios[1].checked) {
    sum += +deliveryRadios[1].dataset.price;
  }

  // вывод
  result.textContent = "Итоговая сумма: " + sum + "рублей";
});
