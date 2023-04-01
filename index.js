const pageContainer = document.querySelector("#page-container");

const backgroundImageArray = ["china","costarica","iceland","italy","japan"];
const titleImageArray = ["China","Costa Rica","Iceland","Italy","Japan"];
const descriptionImageArray = ["Shanghai","La Fortuna","Valahnúkamöl, Island","Trevi Fountain, Roma","Tokyo"];

function startTimer() {
    timerInterval = setInterval(ChangeImage, 4000);
  }


let currentSlide = 0;

const Container = document.querySelector("#infocontainer");
const Background = document.querySelector(".page");
const Title = document.querySelector("#title");
const Description = document.querySelector("#desciption");

function ChangeImage()
{
    if(currentSlide >= backgroundImageArray.length) currentSlide = 0;
    Background.style.backgroundImage = "url(/images/"+backgroundImageArray[currentSlide]+".jpg)"
    Title.textContent = titleImageArray[currentSlide];
    Description.textContent = descriptionImageArray[currentSlide];
    let topOffset = 10+(currentSlide*15);
    Container.style.top = topOffset+"%";
    currentSlide++;
}

ChangeImage();
startTimer();



