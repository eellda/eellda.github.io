'use strict';

const nx = document.querySelector('#nx');
const ny = document.querySelector('#ny');
const ta = document.querySelector('#ta');
const bt = document.querySelector('#btn1');
const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

setInterval(() => {
  const time = new Date();
  const fullYear = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12Hourformat = hour >= 12 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  timeE1.innerHTML =
    (hoursIn12Hourformat < 10
      ? '0' + hoursIn12Hourformat
      : hoursIn12Hourformat) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ' ' +
    `<span id="am-pm">${ampm}</span>`;

  dateE1.innerHTML = days[day] + ', ' + date + ' ' + Months[month];
}, 10);

bt.addEventListener('click', () => {
  const xhr = new XMLHttpRequest(); // AJAX 요청
  xhr.onreadystatechange = () => {
    // console.log('readyState=', xhr.readyState);
    if (xhr.readyState == 4) {
      var ret = JSON.parse(xhr.responseText);
      // console.log(ret);
      // ta.value = JSON.stringify(makeResponse(ret));
      makeResponse(ret);
    } // 응답 완료 시 텍스트 출력
  };
  xhr.open(
    'GET',
    'http://localhost:3000/proxy' + '?city=' + search.value,
    true // 비동기 요청
  );
  xhr.send();
  // console.log('send() 리턴함.');
});

function makeResponse(ret, callback) {
  let lgt, pty, rn1, sky, t1h, reh, uuu, vvv, vec, wsd;
  ret.response.body.items.item.forEach((it) => {
    if (it.category == 'LGT') lgt = it.fcstValue; // 낙뢰
    else if (it.category == 'PTY') pty = it.fcstValue; // 강수형태
    else if (it.category == 'RN1') rn1 = it.fcstValue; // 1시간 강수량
    else if (it.category == 'SKY') sky = it.fcstValue; // 하늘상태
    else if (it.category == 'T1H') t1h = it.fcstValue; // 1시간 기온
    else if (it.category == 'REH') reh = it.fcstValue; // 습도
    else if (it.category == 'UUU') uuu = it.fcstValue; // 풍속 (동서바람성분)
    else if (it.category == 'VVV') vvv = it.fcstValue; // 풍속 (남북바람성분)
    else if (it.category == 'VEC') vec = it.fcstValue; // 풍향
    else if (it.category == 'WSD') wsd = it.fcstValue; // 풍속
  });

  //하늘상태, 습도, 온도, 풍속, 강수량, 낙뢰만 표시

  // 맑음(1), 구름많음(3), 흐림(4)
  if (sky == 1) {
    sky = '구름없이';
  } else if (sky == 3) {
    sky = '구름많고';
  } else if (sky == 4) {
    sky = '흐리고';
  }

  //없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
  if (pty == 0) {
    pty = '맑음';
  } else if (pty == 1) {
    pty = '비옴';
  } else if (pty == 2) {
    pty = '비오거나 눈옴';
  } else if (pty == 3) {
    pty = '눈옴';
  } else if (pty == 4) {
    pty = '소나기옴';
  }

  //약(4미만), 약강(4이상 9미만), 강(9이상 14미만), 매우강(14이상)
  if (wsd < 4) {
    wsd = '바람 약함';
  } else if (4 <= wsd < 9) {
    wsd = '바람 약간 강함';
  } else if (9 <= wsd < 14) {
    wsd = '바람 강함';
  } else if (14 < wsd) {
    wsd = '바람 매우 강함';
  }

  if (19 <= lgt) {
    lgt = '번개 조심!';
  } else if (lgt < 19) {
    lgt = `낙뢰 강도는 ${lgt}kA`;
  }

  let obj = {
    sky: sky,
    humidity: reh,
    temp: t1h,
    wind: wsd,
    pty: pty,
    lightning: lgt,
  };

  const apiKey = '34e87189c543424b52d1a164aa7c7c26';

  const main = document.getElementById('main');
  const form = document.getElementById('form');
  const search = document.getElementById('search');

  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
      origin: 'cors',
    });
    const respData = await resp.json();

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
  <h2><img src="https://openweathermap.org/img/wn/${respData.weather[0].icon}@2x.png" /> ${t1h}°C <img src="https://openweathermap.org/img/wn/${respData.weather[0].icon}@2x.png" /></h2>
            <small>현재 날씨는 </small>
            <small>${sky} ${pty}</small>
            <small>${wsd}</small>
            <small>습도는 ${reh}%</small>
            <small>${lgt}</small>
            
            `;

    //   cleanup
    main.innerHTML = '';
    main.appendChild(weather);
  }
  bt.addEventListener('click', (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
      getWeatherByLocation(city);
    }
  }); // form이 제출되면 제출을 중지시키고 city 변수를 선언해 search값을 할당, city값이 true면 getWeatherByLocation함수의 인자로 삽입
}
