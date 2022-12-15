const block = document.querySelectorAll(".block"); // 블록 생성
const options = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const startBtn = document.querySelector("#startBtn"); // 시작 버튼 아이디 생성


let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let win = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0' // 승리 조건

let plus = [3, 7, 11, 15] // 오른쪽 끝
let minus = [0, 4, 8, 12] // 왼쪽   끝

// let currentPlayer
let running = false; 


initializeGame();

function initializeGame() { // initializeGame() 함수 선원
    randomNum();            // 이 함수 호출하고
    running = true;         // running 을 true 로 변환
    startBtn.addEventListener("click",startGame); // 시작 버튼에 click 이벤트를 발생 시키면 startGame 함수를 호출
}

function randomNum() {                                               //  랜덤 숫자 함수
    // running = true;
    num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];          // 16개의 배열 생성
    let i = 0;                                                       // 반복문을 돌리기 위한 변수 0으로 선언
    while(i < 15) {                                                  // 계속 실행하기 위해 while 문 사용
        let r = ran();                                               // r 에 ran함수 인스턴스 사용
        if(num.includes(r)){                                         // 배열에 특정 값 포함 여부를 확인하기 위해 includes 함수 사용
        }                                                            // 있으면 계속 진행
        else{                                                        // 없으면 num의 i번째 자리에 ran함수에서 나온 값을 넣음
            num[i] = r;                                              
            i++;                                                     // 그리고 i++ -> 다음 배열로 넘어감
        }
    }
    document.querySelectorAll(".block").forEach((value, index) => value.innerText = num[index])
    document.querySelectorAll(".block").forEach((value, index) => value.addEventListener("click", click))
    
}

function click() {                                                   // 배열로 나열 되있는데 3의 +1이 4면 옆칸이 아닌 다음줄로 넘어가므로 if문을 통해 발동이 안되도록 막아둠
    let i = parseInt(this.id);                                       // 
    
    if(num[i+1] == 0 && !plus.includes(i)) {                         
        num[i+1] = num[i];                                           
        num[i] = 0;                                                  
        console.log("+1")
    }else if(num[i-1] == 0 && !minus.includes(i)) {
        num[i-1] = num[i];
        num[i] = 0;
        console.log("-1")
    }else if(num[i+4] == 0) {
        num[i+4] = num[i];
        num[i] = 0;
        console.log("+4")
    }else if(num[i-4] == 0) {
        num[i-4] = num[i];
        num[i] = 0;
        console.log("-4")
    }
    document.querySelectorAll(".block").forEach((value, index) => value.innerText = num[index]) // 배열 정보랑 버튼이랑 매칭
    
    if(num.toString() == win) {
        setTimeout(() => {
            alert("Win!")
            randomNum();
        }, 1000);
        running = false;
    }
}

function ran() { // 1~15
    return (Math.floor(Math.random()*15)+1);               // 1~15를 표현하기 위해 정수를 추출해야 함으로 Math.floor 함수 사용
}

function startGame() {   // 시작 함수
    randomNum();
    running = true;
}

// Array.prototype.forEach = function(fn) {
    //     for(let i in this) {
        //         fn(this[i], i)
        

setInterval(() => block.forEach((value) => {
    if(value.innerText == 0) {
        value.className = "block off"
    }else (
        value.className = "block"
    )
}) ,10)