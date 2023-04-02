document.querySelector("#holidaycal").value = "default";

const economyCheckbox = document.querySelector("#economy");
const businessCheckbox = document.querySelector("#business");
const firstClassCheckbox = document.querySelector("#firstclass");

const today = new Date().toISOString().split('T')[0];
document.querySelector("#arrivaldate").setAttribute("min", today);
document.querySelector("#departdate").setAttribute("min", today);

  economyCheckbox.addEventListener("change", function() {
    if (economyCheckbox.checked) {
      businessCheckbox.checked = false;
      firstClassCheckbox.checked = false;
    } else if (!businessCheckbox.checked && !firstClassCheckbox.checked) {
      economyCheckbox.checked = true;
    }
  });
  businessCheckbox.addEventListener("change", function() {
    if (businessCheckbox.checked) {
      economyCheckbox.checked = false;
      firstClassCheckbox.checked = false;
    } else if (!economyCheckbox.checked && !firstClassCheckbox.checked) {
      businessCheckbox.checked = true;
    }
  });
  firstClassCheckbox.addEventListener("change", function() {
    if (firstClassCheckbox.checked) {
      economyCheckbox.checked = false;
      businessCheckbox.checked = false;
    } else if (!economyCheckbox.checked && !businessCheckbox.checked) {
      firstClassCheckbox.checked = true;
    }
  });

let currentLocation;
const priceBox = document.querySelector("#prices")
document.querySelector("#calculatorform").addEventListener("change", function(event) 
{
    currentLocation = document.querySelector("#holidaycal").value;
    if(currentLocation != "default")
    {
        priceBox.classList.remove("hidden");
        calculatePrice();
    }
    
});

function getPrice()
{
    if(currentLocation == "Japan") return 670;
    if(currentLocation == "Italy") return 230;
    if(currentLocation == "Iceland") return 490;
    if(currentLocation == "Costa Rica") return 800;
    if(currentLocation == "China") return 620;
}


let BusinessValue = 250;
let FirstClassValue = 450;
let FlightExtra = 0;

let arrivalDate;
let departDate;
let timeDiff;
let dayDiff;

function calculatePrice()
{
    document.querySelector("#priceflight").textContent = "Flights: "+currentLocation +" (£"+getPrice()+") ";
    if(businessCheckbox.checked == false && firstClassCheckbox.checked == false)
    {
        FlightExtra = 0;
    }
    if(businessCheckbox.checked)
    {
        document.querySelector("#priceflight").textContent += "+ Business (£"+BusinessValue+")";
        FlightExtra = BusinessValue;
    }
    if(firstClassCheckbox.checked)
    {
        document.querySelector("#priceflight").textContent += "+ First Class (£"+FirstClassValue+")";
        FlightExtra = FirstClassValue;
    }
    arrivalDate = new Date(document.querySelector("#arrivaldate").value);
    departDate = new Date(document.querySelector("#departdate").value);
    timeDiff = departDate.getTime() - arrivalDate.getTime();
    dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
   

    if(document.querySelector("#accomodation").checked && isNaN(arrivalDate) == false && isNaN(departDate) == false && dayDiff>=1)
    {
        document.querySelector("#accommodationText").textContent = currentLocation+ " accomodation perday (£"+Math.round((getPrice()/3))+")"
        document.querySelector("#accommodationTextSecond").textContent = "For "+(dayDiff)+" nights, Accommodation Total (£"+ ((Math.round((getPrice()/3)))*(dayDiff))+")";
        document.querySelector("#totalPrice").textContent = "Total price: £"+ (((Math.round((getPrice()/3)))*(dayDiff))+FlightExtra+(getPrice()));
    }
    else
    {
        document.querySelector("#accommodationText").textContent = "";
        if(document.querySelector("#accomodation").checked)
            {
            document.querySelector("#accommodationText").textContent = "Please enter a valid date to see accommodation pricing.";
            }
        document.querySelector("#accommodationTextSecond").textContent = "";
        document.querySelector("#totalPrice").textContent = "Total price: £"+ (getPrice()+FlightExtra);
    }
    
}


