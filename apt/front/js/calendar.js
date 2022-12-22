var date;

(async () => {
  
  const {value: month } = await Swal.fire({
    title: '주간 아파트 동향 조회',
    input: 'select',
    inputOptions: {
      '12월': {
        this_month_1st: '첫째주',
        this_month_2nd: '둘째주',
        this_month_3rd: '셋째주',
        this_month_4th: '넷째주'
      },
      '11월': {
        one_month_ago_1st: '첫째주',
        one_month_ago_2nd: '둘째주',
        one_month_ago_3rd: '셋째주',
        one_month_ago_4th: '넷째주'
      },
      '10월': {
        two_month_ago_1st: '첫째주',
        two_month_ago_2nd: '둘째주',
        two_month_ago_3rd: '셋째주',
        two_month_ago_4th: '넷째주'      
      }
    },
    inputPlaceholder: '주간 아파트 동향 조회 할 기간을 선택하시오.',
    showCancelButton: true
    //inputValidator: (value) => {
    //   각 주별로 데이터 연결하기
    //   return new Promise((resolve) => {
    //     if (value === 'oranges') {
    //       resolve()
    //     } else {
    //       resolve('You need to select oranges :)')
    //     }
    //   })
    // }
  })

  if (month == 'this_month_1st') {
    //Swal.fire(`You selected: ${month}`)
    date = 221205;
    console.log(month);
    console.log(date);
  } else if (month == 'this_month_2nd') {
    date = 221212;
    console.log(month);
    console.log(date);
  } else if (month == 'this_month_3rd') {
    date = 221219;
    console.log(month);
    console.log(date);
  } else if (month == 'this_month_4th') {
    date = 221226;
    console.log(month);
    console.log(date);
  } else if (month == 'one_month_ago_1st') {
    date = 221107;
    console.log(month);
    console.log(date);
  } else if (month == 'one_month_ago_2nd') {
    date = 221214;
    console.log(month);
    console.log(date);
  } else if (month == 'one_month_ago_3rd') {
    date = 221221;
    console.log(month);
    console.log(date);
  } else if (month == 'one_month_ago_4th') {
    date = 221128;
    console.log(month);
    console.log(date);
  } else if (month == 'two_month_ago_1st') {
    date = 221010;
    console.log(month);
    console.log(date);
  } else if (month == 'two_month_ago_2nd') {
    date = 221017;
    console.log(month);
    console.log(date);
  } else if (month == 'two_month_ago_3rd') {
    date = 221024;
    console.log(month);
    console.log(date);
  } else {
    date = 221031;
    console.log(month);
    console.log(date);
  }
  
})()

function save(moveNext){
  modalConfirm(msg.editConfirm
      , '확인'
      , function(){
          saveAction(moveNext);
      });
}

