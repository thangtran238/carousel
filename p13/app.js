var imgFeature = document.querySelector(".img-feature");
var listImg = document.querySelectorAll(".list-image img");
var btnPrev = document.querySelector(".prev");
var btnNext = document.querySelector(".next");

var currentIndex = 0;

function updateImgByIndex(index) {
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  })

  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute("src");
  listImg[index].parentElement.classList.add("active");
}

listImg.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    imgFeature.style.opacity = '0'

    setTimeout(() => {
      updateImgByIndex(index);
      imgFeature.style.opacity = '1'
    },400) 
  });
});

btnPrev.addEventListener("click", (e) => {
  imgFeature.style.animation = ''
  if(currentIndex == 0) {
    currentIndex = listImg.length -1;
  } else {
    currentIndex--
  }

  setTimeout(()=> {
    updateImgByIndex(currentIndex)
    imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'

  },200)
});

btnNext.addEventListener("click", (e) => {
  imgFeature.style.animation = ''
  if(currentIndex == listImg.length -1 ) {
    currentIndex = 0
  } else {
    currentIndex++
  }
  setTimeout(()=> {
    updateImgByIndex(currentIndex)
    imgFeature.style.animation = 'slideRight 1s ease-in-out forwards'

  },200)
});
