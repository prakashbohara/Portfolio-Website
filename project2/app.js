window.onload = function() {
    const inputTxt = document.querySelector(".inputTxt");
    const button = document.querySelector(".btn");
    const showdata = document.querySelector(".showdata");

    const API_key = "6333213e0259ef7f83b8a936fb5445c2";


    button.addEventListener('click', () => {

        const cityInput = inputTxt.value;
        // console.log(cityInput);
        //inputTxt.value = " ";

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_key}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);



                showdata.innerHTML = ` 
                <div >
                                <p class ="desc"> ${ data.weather[0].description } </p> 
                                <p class="city"> ${data.name}  </p> 
                              <p class ="temp"> ${ data.main.temp }°c </p> 
                    </div>

              `;

            })



    })


}