const pageContainer = document.querySelector("#page-container");

const timeText = document.querySelector("#time");

const countries = [
  {
    backgroundImage: "china",
    title: "China",
    description: "Shanghai",
    timeOffset: 480,
  },
  {
    backgroundImage: "costarica",
    title: "Costa Rica",
    description: "La Fortuna",
    timeOffset: -360,
  },
  {
    backgroundImage: "iceland",
    title: "Iceland",
    description: "Valahnúkamöl, Island",
    timeOffset: 0,
  },
  {
    backgroundImage: "italy",
    title: "Italy",
    description: "Trevi Fountain, Roma",
    timeOffset: 120,
  },
  {
    backgroundImage: "japan",
    title: "Japan",
    description: "Tokyo",
    timeOffset: 540,
  }
];


function startTimer() {
    timerInterval = setInterval(ChangeView, 4000);
  }

let countryOffset = 0;
let currentSlide = 0;

const Container = document.querySelector("#infocontainer");
const Background = document.querySelector(".page");
const Title = document.querySelector("#title");
const Description = document.querySelector("#desciption");


window.addEventListener("resize", checkID);
window.addEventListener("load", checkID);


function checkID()
{
  if (window.innerWidth >= 600) 
  {
   Container.setAttribute("id", "infocontainer");
  }
  else
  {
   Container.style = '';
   Container.removeAttribute("id");
   Container.setAttribute("id", "infoContainerMini");
  }
}

function ChangeView()
{
    if(currentSlide >= countries.length) currentSlide = 0;

    Background.style.backgroundImage = "url(/images/"+countries[currentSlide].backgroundImage+".jpg)"
    Title.textContent = countries[currentSlide].title;
    Description.textContent = countries[currentSlide].description;
    countryOffset = countries[currentSlide].timeOffset-60;
    timeText.textContent = CalculateTime();

   let topOffset = 10+(currentSlide*15);
   if (window.innerWidth >= 600) 
   {
    Container.style.top = topOffset+"%";
   }

   

  currentSlide++;
}

function CalculateTime()
{
const currentDate = new Date();
const newTimeInMilliseconds = currentDate.getTime() + (countryOffset * 60 * 1000);
const timeString = new Date(newTimeInMilliseconds).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

return timeString;
}
ChangeView();
startTimer();

