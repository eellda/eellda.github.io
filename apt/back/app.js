//import { date } from '../front/js/calendar.js';

const express = require('express');
const request = require('request');

//const variable = require('../front/js/calendar.js');
const port = 3000;

const app = express();


app.use(express.urlencoded({extended: true})); 

app.get('/proxy3', (req, res) => {                

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingMarketTrend?' +
    'page=1' +
    '&perPage=1000' +
    '&cond%5BREGION_CD%3A%3AEQ%5D=11A01' + 
    '&cond%5BRESEARCH_DATE%3A%3ALTE%5D=20221201' +
    '&cond%5BRESEARCH_DATE%3A%3AGTE%5D=20180101' +
    '&serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';

    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});


app.get('/proxy4', (req, res) => {                

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingMarketTrend?' +
    'page=1' +
    '&perPage=1000' +
    '&cond%5BREGION_CD%3A%3AEQ%5D=11A14' + 
    '&cond%5BRESEARCH_DATE%3A%3ALTE%5D=20221201' +
    '&cond%5BRESEARCH_DATE%3A%3AGTE%5D=20180101' +
    '&serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';

    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});

app.get('/proxy5', (req, res) => {                

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingMarketTrend?' +
    'page=1' +
    '&perPage=1000' +
    '&cond%5BREGION_CD%3A%3AEQ%5D=11A13' + 
    '&cond%5BRESEARCH_DATE%3A%3ALTE%5D=20221201' +
    '&cond%5BRESEARCH_DATE%3A%3AGTE%5D=20180101' +
    '&serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';

    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});

app.get('/proxy6', (req, res) => {                

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingMarketTrend?' +
    'page=1' +
    '&perPage=1000' +
    '&cond%5BREGION_CD%3A%3AEQ%5D=11A15' + 
    '&cond%5BRESEARCH_DATE%3A%3ALTE%5D=20221201' +
    '&cond%5BRESEARCH_DATE%3A%3AGTE%5D=20180101' +
    '&serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';

    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});

app.get('/proxy7', (req, res) => {                

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingMarketTrend?' +
    'page=1' +
    '&perPage=1000' +
    '&cond%5BREGION_CD%3A%3AEQ%5D=11A12' + 
    '&cond%5BRESEARCH_DATE%3A%3ALTE%5D=20221201' +
    '&cond%5BRESEARCH_DATE%3A%3AGTE%5D=20180101' +
    '&serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';

    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});

app.get('/proxy8', (req, res) => {                

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingMarketTrend?' +
    'page=1' +
    '&perPage=1000' +
    '&cond%5BREGION_CD%3A%3AEQ%5D=11A11' + 
    '&cond%5BRESEARCH_DATE%3A%3ALTE%5D=20221201' +
    '&cond%5BRESEARCH_DATE%3A%3AGTE%5D=20180101' +
    '&serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D';

    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});









app.post('/login', (req, res) => {                                   // post 요청이 들어왔을때 실행할 함수를 등록 하는것임                                                    
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'text/plain; charset=UTF-8');
    
    res.send(`email: ${req.body.email} \
password: ${req.body.password}`);
});



// 웹서버 실행하기
app.listen(
    3000,                                                                               // 포트 번호 지정
    () => {                                                                  
        console.log(`${port}번 포트에서 서버 구동 시작`);                               // 서버가 시작 되었을때 호출될 함수 = 리스너 = 핸들러
    }                                                     
)



