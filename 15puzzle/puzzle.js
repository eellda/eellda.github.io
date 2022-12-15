const GameDifficulty = [100];



class Game {
    Difficulty;
    rows = 4;                     // 행
    columns = 4;                  // 열
    count;                        // 행*열
    cells;                        // cell
    emptyCellCoords = [3, 3];     // 빈 블럭 좌표값
    index = [];                   // 블록 순서


    constructor(DifficultyLevel = 1) {                           // 컨스트럭터 생성 // DifficultyLevel 에 1 추가
        this.Difficulty = GameDifficulty[DifficultyLevel - 1];   // Difficulty 는 GameDifficulty 의 0 번째
        this.count = this.columns * this.rows;                   // count 는 coumns(4) * rows(4) = 16 
        this.cells = document.getElementsByClassName('cell');    // cells 는 class 'cell' Elements
        this.init();                                             // init() 실행
    }

    init() {                                                                                    // init 객체 생성
        for(let y = 0; y < this.rows; y++) {                                                    // y 변수 선언      // y가 rows(4) 보다 작으면 반복문 돌리고 y++
            for(let x = 0; x < this.columns; x++) {                                             // x 변수 선언      // x가 coumns(4) 보다 작으면 반복문 돌리고 x++
                let cellId = x + y * this.columns;                                              // cellId 는 x + y * 4
                if(cellId + 1 >= this.count) break;                                             // 만약 cellId + 1 이 16 보다 크거나 같으면  // 탈출
                                                                                        
                let cell = this.cells[cellId];                                                  // cell 은 class 'cell' Elements 의 cellId
                this.positionCellAtCoord(cellId, x, y);                                         // positionCellAtCoord 객체에 cellId, x, y 값을 넣은 값을 받음
                cell.addEventListener('click', () => this.onClickOnCell(cellId));               // celll의 Event 추가하는데 this.onClickOnCell(cellId) 함수를 click에 저장
                this.index.push(cellId);                                                        // index에 cellId를 추가
            }
        }
        this.index.push(this.count - 1);                                                        // 
        this.randomize(this.Difficulty);                                                        // 
    }

    randomize(iterationCount) {
        for(let i = 0; i < iterationCount; i++) {
            let randomCellId = Math.floor(Math.random() * (this.count - 1));
            let moved = this.moveCell(randomCellId);
            if(!moved) {
                i--;
            }
        }
    }

    moveCell(cellId) {
        let cell = this.cells[cellId];
        let cellCoords = this.canMoveCell(cell);
        if(cellCoords != null) {
            this.positionCellAtCoord(cellId, this.emptyCellCoords[0], this.emptyCellCoords[1]);
            this.index[this.emptyCellCoords[0] + this.emptyCellCoords[1] * this.columns] = this.index[cellCoords[0] + cellCoords[1] * this.columns];
            this.emptyCellCoords[0] = cellCoords[0];
            this.emptyCellCoords[1] = cellCoords[1];
            return true;
        }
        return false;
    }

    canMoveCell(cell) {
        let cellPos = [parseInt(cell.style.left), parseInt(cell.style.top)];
        let cellWidth = cell.clientWidth;
        let cellCoords = [cellPos[0] / cellWidth, cellPos[1] / cellWidth];
        let diff = [Math.abs(cellCoords[0] - this.emptyCellCoords[0]), Math.abs(cellCoords[1] - this.emptyCellCoords[1])];
        let canMove = (diff[0] == 1 && diff [1] == 0) || (diff[0] == 0 && diff[1] == 1);
        if(canMove) {
            return cellCoords;
        } else return null;
    }

    positionCellAtCoord(cellId, x, y) {                                                         // positionCellAtCoord 객체 선언 cellId, x, y 아규먼트를 받음
        let cell = this.cells[cellId];                                                          // cell 은 class 'cell' Elements 의 cellId
        cell.style.left = (x * cell.clientWidth) + 'px';                                        // cell의 가로 넓이는 x * cell.clientWidth px
        cell.style.top = (y * cell.clientWidth) + 'px';                                         // cell의 세로 넓이는 y * cell.clientWidth px
    }

    onClickOnCell(cellId) {                                                                     // onClickOnCell 객체 선언 cellId 아규먼트를 받음
        if(this.moveCell(cellId)) {                                                             // moveCell(cellId) 일때
            if(this.checkPuzzleSolved()) {                                                      // this.checkPuzzleSolved() 일때
                setTimeout(function() {                                                         // 1초 Timeout 설정 '퍼즐완성~' 화면 출력
                    alert('퍼즐 완성~');
                }, 1000);
            }
        }
    }

    checkPuzzleSolved() {                                                                       // checkPuzzleSolved() 객체 선언
        for(let i = 0; i < this.index.length; i++) {                                            // i 변수 선언  i 가 index에 cellId를 추가한것의 갯수보다 작으면 함수 실행 후 i++
            if(i == this.emptyCell[0] + this.emptyCell[1] * this.columns) {                     // i 가 emptyCell[0]번째 + emptyCell[1]번째 * 4 와 같다면
                continue;                                                                       // 계속
            }
            if(this.index[i] != i) {                                                            // index의 i번째가 i오 다르면
                return false;                                                                   // false 반환
            }
        }
        return true;                                                                            // frue 반환
    }

    setDifficulty(difficultyLevel) {
        this.Difficulty = GameDifficulty[difficultyLevel - 1];
        this.randomize(this.Difficulty);
    }

}

// Game Class 객체 선언
var game = new Game(1);

// reset 버튼 객체 배열 선언  (다수)
var reset_button = Array.from(document.getElementsByClassName('reset-button'));

// 리셋 function
reset_button.forEach((elem, idx) => {
    elem.addEventListener('click', (e) => {
        reset_button[GameDifficulty.indexOf(game.Difficulty)].classList.remove('active');
        elem.classList.add('active');
        game.setDifficulty(idx+1);
    });
})


















// https://codereview.stackexchange.com/questions/219866/15-puzzle-game-javascript 참고
// https://creator-kyle.tistory.com/26 참고
