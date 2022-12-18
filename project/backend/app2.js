const express = require('express');

const request = require('request');

const dayjs = require('dayjs'); // 현재 시간 가져오는 모듈

const cheerio = require('cheerio'); // HTML문서를 parsing하여 필요한 정보만 가져오는 모듈

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/proxy2', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  const openApiUrl =
    'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst' +
    '?serviceKey=O1UV%2F2uPlcdCj4cUaAuks17N6Nj0CTeU3GT0osfKD3n3iyWZPzwe9BeMBDnGWWVkH%2FG6nu%2FYHdtZTvK%2FPi3eGQ%3D%3D' +
    '&pageNo=1' +
    '&numOfRows=1000' +
    '&dataType=JSON' +
    '&base_date=' +
    req.query.base_date +
    '&base_time=0600' +
    '&nx=' +
    req.query.nx +
    '&ny=' +
    req.query.ny;

  request.get({ uri: openApiUrl }, (error, response, body) => {
    res.send(body);
  });
});

app.get('/proxy3', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  const openApiUrl =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    req.query.city +
    '&units=&lang=kr&appid=2c950305dea1fd4ac37dd8631643ba9d';

  request.get({ uri: openApiUrl }, (error, response, body) => {
    res.send(body);
  });
});

app.listen(3000, () => {
  console.log(`${dayjs()} ${port}번 포트에서 서버 시작했음!`);
});
