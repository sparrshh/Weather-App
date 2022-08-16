const cityName = document.getElementById('cityName');
const submitBtn =  document.getElementById('sumbitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const dayy = document.getElementById('day');
const today_date = document.getElementById('today_date');



const getInfo = async(event)=>{
var d = new Date();
var num = d.getDay();

let mod = d.getDate();
let month = d.getMonth();

switch (num) {
    case 0:
       day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  switch (month) {
    case 0:
       mont = "January";
      break;
    case 1:
      mont = "February";
      break;
    case 2:
       mont = "March";
      break;
    case 3:
      day = "April";
      break;
    case 4:
      day = "May";
      break;
    case 5:
      day = "June";
      break;
    case 6:
      day = "July";
      break;

    case 7:
      mont = "August";
      break;

    case 8:
      mont = "September";
      break;

      case 9:
        mont = "October";
      break;

    case 10:
      mont = "November";
      break;

      case 11:
      mont = "December";
      break;

      
  }
    event.preventDefault()
    let cityVal = cityName.value;
    if(cityVal ==="")
    {
city_name.innerText="Please write the name before you search: ";

    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c7c59a95c49e26644865322ab7bb4864&units=metric`;
            const response= await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            dayy.innerText = day;
            today_date.innerText = mod +" "+ mont ;

            

        }   
        catch{
     cityName.innerText = 'Please enter the name of the city properly';
        }
   
    }
    
}
submitBtn.addEventListener('click',getInfo);