
// express librarry 로딩하기
const express = require('express');
// HTTP 요청을 다루는 라이브러리 로딩하기
const request = require('request');

//POST 요청으로 보낸 payload 를 분석하는 라이브러리 로딩하기
//const bodyParser = require('body-parser');

const port = 3000;

// express () 롤 호출하여 웹서버를 준비한다.
const app = express();

// POST 요청으로 보낸 payload 데이터를 분석할 객체를 지정하기
// => Content-Type: Application/x-www-form-urlencoded 형식으로 된 payload 처리
// 예> name=hong&age=24


app.use(express.urlencoded({extended: true}));  // 객체를 만들어서 던저준다~

// client request에 대해 호출될 매소드 등록




app.get('/proxy2', (req, res) => {                
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');

    let openApiUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?' +
    'serviceKey=sxu9KRkG12s8M1jzMQue37aHfnGiREb4AkZ3vd3k6AyedQ%2Bwzi69FPFxjjhCFBRG%2Bg2yWdwfHlsp9ICw5TfOZQ%3D%3D' +
    '&pageNo=2&numOfRows=1000&dataType=JSON' +
    '&base_date=' + req.query.base_date +
    '&base_time=0600&' +
    'nx=' + req.query.nx +
    '&ny='  + req.query.ny;
    
    request.get({url: openApiUrl}, (error, response, body) => res.send(body));
});





// 웹서버 실행하기
app.listen(
    3000,                                                                               // 포트 번호 지정
    () => {                                                                  
        console.log(`${port}번 포트에서 서버 구동 시작`);                               // 서버가 시작 되었을때 호출될 함수 = 리스너 = 핸들러
    }                                                     
)



