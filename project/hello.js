const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('currnet-weather-items');
const tiemzone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var baseDate = document.querySelector("#base_date");

const API_KEY = 'sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';


setInterval(() => {
    const time = new Date();
    const fullYear = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrformat = hour >= 12 ? hour %12 : hour
    const minuts = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'
    

    timeE1.innerHTML = (hoursIn12Hrformat < 10? '0' + hoursIn12Hrformat : hoursIn12Hrformat) + ':' + (minuts < 10 ? '0' + minuts : minuts) + ' ' + `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day] + ', ' + date + ' ' + Months[month];

},100);


getWeatherData();
document.querySelector("#btn1").onclick = () => {
    getWeatherData();
}

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log('sucess');

        //let {latitude, longitute} = success.coords;
        let openApiUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?' +
        'serviceKey=' + `${API_KEY}` +
        '&pageNo=1&numOfRows=1000&dataType=JSON' +
        '&base_date=' + baseDate.value +
        '&base_time=0600&' +
        'nx=61' +
        '&ny=125';

        fetch(openApiUrl).then(res => res.json()).then(data => {
            let datas = data.response.body.items.item
            console.log(datas);
            showWeatherData(datas);
        })

        //request.get({url: openApiUrl}, (error, response, body) => res.send(body));
        
    })
}

function showWeatherData(datas) {
    const PTY = datas[0].obsrValue;
    console.log(PTY);
    const REH = datas[1].obsrValue;
    console.log(REH);
    const T1H = datas[3].obsrValue;
    console.log(T1H);

    //timezen.innerHTML = datas.tiemzone;
    //countryE1.innerHTMLdatas.lat + 'N ' + datas.lon + 'E' // 위도


    currentWeatherItemsE1.innerHTML = 
    `<div class="weather-itme">
        <div>강수 형태</div>
        <div>${PTY == 0 ? '맑음' : '비올듯 말듯'}</div>
    </div>
    <div class="weather-itme">
        <div>습도</div>
        <div>${REH}%</div>
    </div>
    <div class="weather-itme">
        <div>온도</div>
        <div>${T1H}&#176;</div>
    </div>`;

    //let otherDayForcast = ''
    // datas.array.forEach((day, idx) => {
    //     if(idx == 0) {
    //         currentTempE1.innerHTML = 
    //         `<div class="day">Monday</div>
    //         <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
    //         <div class="other">
    //             <div class="temp">Night - 25.6&#176;</div>
    //             <div class="temp">Day - 25.6&#176;</div>
    //         </div>`;
    //     } else {
    //         otherDayForcast += 
    //         `<div class="weather-forecast-item">
    //             <div class="day">${day}</div>
    //             <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
    //             <div class="temp">Night - 25.6&#176;</div>
    //             <div class="temp">Day - 25.6&#176;</div>
    //         </div>`;
    //     }
    // });

    //weatherForecastE1.innerHTML = otherDayForcast;
}

