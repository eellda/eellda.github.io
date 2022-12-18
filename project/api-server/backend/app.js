const express = require('express');

const request = require('request');

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

// app.get('/proxy', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.set('Content-Type', 'application/json; charset=UTF-8');

//   getCurrentWeather(req.query.nx, req.query.ny);
//   request.get({ uri: openApiUrl }, (error, response, body) => {
//     res.send(body);
//   });
// });

app.get('/proxy', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  const apiKey = '34e87189c543424b52d1a164aa7c7c26';
  const city = req.query.city;
  const geocode = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

  request.get({ uri: geocode }, (error, response, body) => {
    //geocode를 호출하여 응답데이터를 받아내기 위함
    const lat = JSON.parse(body)[0]['lat']; // deserialize하여 객체로 변환해 추출
    const lon = JSON.parse(body)[0]['lon'];

    const rs = dfs_xy_conv('toXY', lat, lon); // 위도,경도를 x,y좌표로 변환

    // var rs = dfs_xy_conv('toXY', req.query.nx, req.query.ny);
    const nx = rs.nx;
    const ny = rs.ny;
    // console.log(nx);

    const today = new Date();
    today.setHours(today.getHours() + 9); // UTC환경일 경우 한국시간 기준으로 변경

    let dd = today.getDate() - 1; // 왜 - 1 해야 오늘이 되는지 모르겠음
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (minutes < 30) {
      // 30분보다 작으면 한시간 전 값
      hours = hours - 1;
      if (hours < 0) {
        // 자정 이전은 전날로 계산
        today.setDate(today.getDate() - 1);
        dd = today.getDate();
        mm = today.getMonth() + 1;
        yyyy = today.getFullYear();
        hours = 23;
      }
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (dd < 10) {
      dd = '0' + dd;
    }

    const api_key =
      'O1UV%2F2uPlcdCj4cUaAuks17N6Nj0CTeU3GT0osfKD3n3iyWZPzwe9BeMBDnGWWVkH%2FG6nu%2FYHdtZTvK%2FPi3eGQ%3D%3D';
    const base_date = yyyy + '' + mm + '' + dd;
    const base_time = hours + '00';

    const openApiUrl =
      'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst' +
      '?serviceKey=' +
      api_key +
      '&pageNo=1' +
      '&numOfRows=1000' +
      '&dataType=JSON' +
      '&base_date=' +
      base_date +
      '&base_time=' +
      base_time +
      '&nx=' +
      nx +
      '&ny=' +
      ny;

    // console.log(today);
    // console.log(base_date);
    // console.log(base_time);
    // console.log(today.getDate() - 1);
    // console.log(dd);

    // app
    //   .get(openApiUrl, (req) => {
    //     let data = '';
    //     // 데이터가 들어오면 chunk를 사용하여 data 변수에 저장
    //     req.on('data', (chunk) => {
    //       data += chunk;
    //     });

    //     // 더이상 데이터가 들어오지 않으면 end 이벤트가 실행되고 data변수의 JSON문자열을 js 객체로 deserialization
    //     // deserialize된 js 객체를 변수에 할당하고 makeResponse함수에 argument로 삽입
    //     req.on('end', () => {
    //       var ret = JSON.parse(data);
    //       makeResponse(ret, callback);
    //     });
    //   }) // 에러가 뜨면 error 이벤트가 실행되고 에러메시지를 출력
    //   .on('error', (err) => {
    //     console.log('Error is : ' + err.message);
    //   });

    request.get({ uri: openApiUrl }, (error, response, body) => {
      res.send(body);
    });
    // var apikey =
    //     'O1UV%2F2uPlcdCj4cUaAuks17N6Nj0CTeU3GT0osfKD3n3iyWZPzwe9BeMBDnGWWVkH%2FG6nu%2FYHdtZTvK%2FPi3eGQ%3D%3D',
    //   ttoday = yyyy + '' + mm + '' + dd,
    //   basetime = hours + '00',
    //   fileName =
    //     'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
    // fileName += '?ServiceKey=' + apikey;
    // fileName += '&base_date=' + ttoday;
    // fileName += '&base_time=' + basetime;
    // fileName += '&nx=' + nx + '&ny=' + ny;
    // fileName += '&pageNo=1&numOfRows=10';
    // fileName += '&dataType=JSON';

    // var path = fileName;
    // app.get(path, (resp) => {
    //     let data = '';
    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //       data += chunk;
    //     });

    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //       var ret = JSON.parse(data);
    //       makeResponse(ret, callback);
    //     });
    //   })
    //   .on('error', (err) => {
    //     console.log('Error is : ' + err.message);
    //   });
  });
});

app.listen(3000, () => {
  console.log(`${port}번 포트에서 서버 시작했음!`);
});

// https://gist.github.com/fronteer-kr/14d7f779d52a21ac2f16 에서 가져 왔습니다.
// LCC DFS 좌표변환을 위한 기초 자료
//
var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기1준점 Y좌표(GRID)
//
// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
//
function dfs_xy_conv(code, v1, v2) {
  var DEGRAD = Math.PI / 180.0;
  var RADDEG = 180.0 / Math.PI;

  var re = RE / GRID;
  var slat1 = SLAT1 * DEGRAD;
  var slat2 = SLAT2 * DEGRAD;
  var olon = OLON * DEGRAD;
  var olat = OLAT * DEGRAD;

  var sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  var rs = {};
  if (code == 'toXY') {
    rs['lat'] = v1;
    rs['lng'] = v2;
    var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
    ra = (re * sf) / Math.pow(ra, sn);
    var theta = v2 * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;
    rs['nx'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
    rs['ny'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  } else {
    rs['nx'] = v1;
    rs['ny'] = v2;
    var xn = v1 - XO;
    var yn = ro - v2 + YO;
    ra = Math.sqrt(xn * xn + yn * yn);
    if (sn < 0.0) -ra;
    var alat = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    if (Math.abs(xn) <= 0.0) {
      theta = 0.0;
    } else {
      if (Math.abs(yn) <= 0.0) {
        theta = Math.PI * 0.5;
        if (xn < 0.0) -theta;
      } else theta = Math.atan2(xn, yn);
    }
    var alon = theta / sn + olon;
    rs['lat'] = alat * RADDEG;
    rs['lng'] = alon * RADDEG;
  }
  return rs;
}
// dfs_xy_conv
