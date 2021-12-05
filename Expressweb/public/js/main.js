const cityName =document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector(".middle_layer");

submitBtn.addEventListener('click',async(event)=>{
    event.preventDefault();
    // alert("hii bro");
    let city=cityName.value;
    if(city===""){
        city_name.innerText=`Plz write the name before Search`;
    }
    else{
        try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=440daf475abd2d35d9f9bc2c15d81cd1`;
          const response = await fetch(url);
          const data = await response.json();
          const arrdata = [data];

          city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
          temp_real_val.innerText = arrdata[0].main.temp;
          console.log(arrdata[0].name);
          console.log(arrdata[0].sys.country);
        const tempMood = arrdata[0].weather[0].main;
          if (tempMood == "Clear") {
            temp_status.innerHTML =
              "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempMood == "Rain") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          } else {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          }
          datahide.classList.remove("data_hide");
          cityVal = "";
        }catch{
            city_name.innerText = `Plz write the name before Search`;
            console.log("error");
        }
    }
})