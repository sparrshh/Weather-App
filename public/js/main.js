const cityName = document.getElementById('cityName');
const submitBtn =  document.getElementById('sumbitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const getInfo = async(event)=>{
    event.preventDefault()
    let cityVal = cityName.value;


    if(cityVal ==="")
    {
city_name.innerText="Please write the name beforen you search";
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c7c59a95c49e26644865322ab7bb4864`
            const response= await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData[0].main.temp);
            temp.innerText = 34;
            // temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].temp;


        }   
        catch{

        }
   
    }
    
}
submitBtn.addEventListener('click',getInfo);