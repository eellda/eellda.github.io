const game = {
  xTurn: true,
  xState: [],
  oState: [],
  winningStates: [
      // 가로
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],

      // 세로
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],

      // 대각선
      ['0', '4', '8'],
      ['2', '4', '6']
  ]
}

// 클릭 이벤트
document.addEventListener('click', event => {
  const target = event.target
  const isCell = target.classList.contains('grid-cell')
  const isDisabled = target.classList.contains('disabled')
  // 셀을 클릭 했는지, 아직 안했는지

  if (isCell && !isDisabled) {
    // 셀 클릭
    const cellValue = target.dataset.value

    game.xTurn === true
        ? game.xState.push(cellValue)
        : game.oState.push(cellValue)
    // xTurn을 사용해 x, o인지 확인후 셀에 적용 
    target.classList.add('disabled')
    target.classList.add(game.xTurn ? 'x' : 'o')

    game.xTurn = !game.xTurn

  }

  if (!document.querySelectorAll('.grid-cell:not(.disabled)').length) {
    document.querySelector('.game-over').classList.add('visible')
    document.querySelector('.game-over-text').textContent = 'Draw!'
  }
  // 클릭한 셀이 총 9개면 무승부 결과
  
  game.winningStates.forEach(winningState => {
    const xWins = winningState.every(state => game.xState.includes(state))
    const oWins = winningState.every(state => game.oState.includes(state))
  
    if (xWins || oWins) {
        document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.game-over-text').textContent = xWins
            ? 'X win!'
            : 'O win!'
    }
  })
  // o,xstate가 winningStates에 포함되있는지 판단

  document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.game-over').classList.remove('visible')
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o')
    })
  
    game.xTurn = true
    game.xState = []
    game.oState = []
  })
})
// 재시작