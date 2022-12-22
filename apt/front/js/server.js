"use strict"
  
var tbody = document.querySelector("tbody");
var baseDate = document.querySelector("#base_date");
// var nx = document.querySelector("#nx");
// var ny = document.querySelector("#ny");
// var ta = document.querySelector("#ta");

var ins; 

document.querySelector("#btn1").onclick = () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {

                console.log(xhr.responseText);
                // 서버에서 받은 JSON 문자열을 자바스크립트 객체로 변환한다.
                // => 디시리얼라이제이션 (역직렬화)
                var arr = JSON.parse(xhr.responseText);
                console.log(arr);
                // 배열을 반복하여 값을 꺼낸다.
                console.log(arr.data.length);
                console.log(arr.data.slice(0, 12));
                
                ins = arr.data.slice(0, 12);
                var insZero = ins[0];
                console.log(insZero.BUY_DOM_INDICES);
                console.log(insZero.REGION_CD);
                console.log(insZero.RESEARCH_DATE);
                
                // for (let i = 0; i < 12; i++) {
                //     var insOne = ins[i].BUY_DOM_INDICES;
                //     console.log(insOne.reduce(ins[i].BUY_DOM_INDICES));
                //     console.log(insOne);
                // }
            }
            }
        }
    xhr.open("GET", "http://localhost:3000/proxy3", true);
    xhr.send();
};

//console.log(date);