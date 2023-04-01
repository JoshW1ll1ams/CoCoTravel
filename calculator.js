document.querySelector("#holidaycal").value = "default";

const economyCheckbox = document.querySelector("#economy");
const businessCheckbox = document.querySelector("#business");
const firstClassCheckbox = document.querySelector("#firstclass");

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


document.querySelector("#calculatorform").addEventListener("submit", function(event) 
{
    event.preventDefault();
    if (document.querySelector("#holidaycal").value == "default") 
    {
      alert("Please select a valid destination.");
      return false;
    }
});



let currentLocation;
document.querySelector("#calculatorform").addEventListener("change", function(event) 
{
    currentLocation = document.querySelector("#holidaycal").value;
    calculatePrice();
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
    const arrivalDate = new Date(document.querySelector("#arrivaldate").value);
    const departDate = new Date(document.querySelector("#departdate").value);
    const timeDiff = departDate.getTime() - arrivalDate.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
   

    if(document.querySelector("#accomodation").checked)
    {
        document.querySelector("#accommodationText").textContent = currentLocation+ " accomodation perday (£"+Math.round((getPrice()/3))+")"
        document.querySelector("#accommodationTextSecond").textContent = "For "+(dayDiff-1)+" nights, Accommodation Total (£"+ ((Math.round((getPrice()/3)))*(dayDiff-1))+")";
        document.querySelector("#totalPrice").textContent = "Total price: £"+ (((Math.round((getPrice()/3)))*(dayDiff-1))+FlightExtra);
    }
}
