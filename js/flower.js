const flowerArr = [
  { image: "azalea.jpg", name: "철쭉", mean: "정열, 명예, 열정" },
  { image: "cosmos.jpg", name: "코스모스", mean: "소녀의 순결, 순정" },
  { image: "cotton.jpg", name: "목화", mean: "어머니의 사랑" },
  { image: "hydrangea.jpg", name: "수국", mean: "변덕, 변심" },
  { image: "lavender.jpg", name: "라벤더", mean: "기대, 정절, 불신, 대답해주세요." },
  { image: "lotus.jpg", name: "연꽃", mean: "깨끗한 마음 , 청결, 당신은 아름답습니다." },
  { image: "rose.jpg", name: "장미", mean: "사랑, 아름다움, 낭만적인 사랑, 용기" },
  { image: "sakura.jpg", name: "벚꽃", mean: "아름다운 정신(영혼), 정신적 사랑, 삶의 아름다움" },
  { image: "sunflower.jpg", name: "해바라기", mean: "애모, 숭배, 당신을 바라봅니다." },
  { image: "tulip.jpg", name: "튤립", mean: "매혹적인 사랑, 매력적인 사랑" },
  { image: "daisie.jpg", name: "데이지", mean: "겸손함, 아름다움, 천진난만함" },
  { image: "camelia.jpg", name: "동백꽃", mean: "그 누구보다 당신을 사랑합니다, 청렴, 절조" },
];

const chosenImage = flowerArr[Math.floor(Math.random() * flowerArr.length)];
// math.random으로 난수 생성 후, flower.length만큼 곱해준다. -> 새로고침 할 때 마다 배열의 수가 바뀜.
const bgImage = document.createElement("img"); // 태그네임을 써야하기 때문에 ""안에 사용해준다.
bgImage.src = `bg/${chosenImage.image}`; // 배경이미지 소스는 flowerArr의 객체 중에 image라는 key가 된다.
document.body.appendChild(bgImage); // 문서 body안에 bgImg라는 자녀를 추가해준다.

const flowerName1 = document.querySelector(".flowerName1");
const flowerLang1 = document.querySelector(".flowerLang1");
const flowerName2 = document.querySelector(".flowerName2");
const flowerLang2 = document.querySelector(".flowerLang2");

flowerName1.innerText = chosenImage.name;
flowerLang1.innerText = chosenImage.mean;

flowerName2.innerText = chosenImage.name;
flowerLang2.innerText = chosenImage.mean;
