

$(function() {
    $('img[usemap]').rwdImageMaps();
    $('#area1').on('click', function () {
        
        var insZero;
        const id1 = document.getElementById('area1');
        const id2 = document.getElementById('area2');
        const id3 = document.getElementById('area3');
        const id4 = document.getElementById('area4');
        const id5 = document.getElementById('area5');


        var xhr2 = new XMLHttpRequest();
        xhr2.onreadystatechange = () => {
            if (xhr2.readyState == 4) {
                if (xhr2.status == 200) {
                    console.log(xhr2.responseText);

                    var arr = JSON.parse(xhr2.responseText);
                    console.log(arr);

                    console.log(arr.data.length);
                    console.log(arr.data.slice(0, 12));
                    
                    ins = arr.data.slice(0, 12);
                    insZero = (
                        ins[0].BUY_DOM_INDICES + ins[1].BUY_DOM_INDICES + 
                        ins[2].BUY_DOM_INDICES + ins[3].BUY_DOM_INDICES+ 
                        ins[4].BUY_DOM_INDICES + ins[5].BUY_DOM_INDICES+ 
                        ins[6].BUY_DOM_INDICES + ins[7].BUY_DOM_INDICES+ 
                        ins[8].BUY_DOM_INDICES + ins[9].BUY_DOM_INDICES+ 
                        ins[10].BUY_DOM_INDICES + ins[11].BUY_DOM_INDICES) / ins.length;
                        console.log(insZero); 
                        if (!confirm($(this).attr('alt')+"의 매매 수급 동향은 다음과 같습니다.\n\n" +
                        $(this).attr('alt')+"의 아파트 매물 가격을 확인해보겠습니까?")) {
                          alert("창을 닫겠습니다.");
                      } else {
                        if(Math.floor(insZero) > 100) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😍');
                        } else if (Math.floor(insZero) > 80) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😧');
                        } else { alert('동향 지수' + Math.floor(insZero) + ' 🥵');
                          alert($(this).attr('alt')+" 지역의 매물을 보기 위해 네이버 부동산으로 이동하겠습니다.")}
                      }                    
                }
            }
        }
        xhr2.open("GET", "http://localhost:3000/proxy4", false);
        xhr2.send();
    console.log(insZero);
    //console.log(insZero);
    });
    $('#area2').on('click', function () {

        var xhr3 = new XMLHttpRequest();
        xhr3.onreadystatechange = () => {
            if (xhr3.readyState == 4) {
                if (xhr3.status == 200) {
  
                    console.log(xhr3.responseText);
  
                    var arr = JSON.parse(xhr3.responseText);
                    console.log(arr);
  
                    console.log(arr.data.length);
                    console.log(arr.data.slice(0, 12));
                    
                    ins = arr.data.slice(0, 12);
                    insZero = (
                        ins[0].BUY_DOM_INDICES + ins[1].BUY_DOM_INDICES + 
                        ins[2].BUY_DOM_INDICES + ins[3].BUY_DOM_INDICES+ 
                        ins[4].BUY_DOM_INDICES + ins[5].BUY_DOM_INDICES+ 
                        ins[6].BUY_DOM_INDICES + ins[7].BUY_DOM_INDICES+ 
                        ins[8].BUY_DOM_INDICES + ins[9].BUY_DOM_INDICES+ 
                        ins[10].BUY_DOM_INDICES + ins[11].BUY_DOM_INDICES) / ins.length;
                        console.log(insZero); 
                        if (!confirm($(this).attr('alt')+"의 매매 수급 동향은 다음과 같습니다.\n\n" +
                        $(this).attr('alt')+"의 아파트 매물 가격을 확인해보겠습니까?")) {
                          alert("창을 닫겠습니다.");
                      } else {
                        if(Math.floor(insZero) > 100) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😍');
                        } else if (Math.floor(insZero) > 80) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😧');
                        } else { alert('동향 지수' + Math.floor(insZero) + ' 🥵');
                          alert($(this).attr('alt')+" 지역의 매물을 보기 위해 네이버 부동산으로 이동하겠습니다.")}
                      }     
                }
                }
          }
      xhr3.open("GET", "http://localhost:3000/proxy5", false);
      xhr3.send();
      });
      $('#area3').on('click', function () {

        var xhr4 = new XMLHttpRequest();
        xhr4.onreadystatechange = () => {
            if (xhr4.readyState == 4) {
                if (xhr4.status == 200) {

                    console.log(xhr4.responseText);

                    var arr = JSON.parse(xhr4.responseText);
                    console.log(arr);
  
                    console.log(arr.data.length);
                    console.log(arr.data.slice(0, 12));
                    
                    ins = arr.data.slice(0, 12);
                    insZero = (
                        ins[0].BUY_DOM_INDICES + ins[1].BUY_DOM_INDICES + 
                        ins[2].BUY_DOM_INDICES + ins[3].BUY_DOM_INDICES+ 
                        ins[4].BUY_DOM_INDICES + ins[5].BUY_DOM_INDICES+ 
                        ins[6].BUY_DOM_INDICES + ins[7].BUY_DOM_INDICES+ 
                        ins[8].BUY_DOM_INDICES + ins[9].BUY_DOM_INDICES+ 
                        ins[10].BUY_DOM_INDICES + ins[11].BUY_DOM_INDICES) / ins.length;
                        console.log(insZero); 
                        if (!confirm($(this).attr('alt')+"의 매매 수급 동향은 다음과 같습니다.\n\n" +
                        $(this).attr('alt')+"의 아파트 매물 가격을 확인해보겠습니까?")) {
                          alert("창을 닫겠습니다.");
                      } else {
                        if(Math.floor(insZero) > 100) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😍');
                        } else if (Math.floor(insZero) > 80) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😧');
                        } else { alert('동향 지수' + Math.floor(insZero) + ' 🥵');
                          alert($(this).attr('alt')+" 지역의 매물을 보기 위해 네이버 부동산으로 이동하겠습니다.")}
                      }     
                }
                }
          }
      xhr4.open("GET", "http://localhost:3000/proxy6", false);
      xhr4.send();
      });
      $('#area4').on('click', function () {

        var xhr5 = new XMLHttpRequest();
        xhr5.onreadystatechange = () => {
            if (xhr5.readyState == 4) {
                if (xhr5.status == 200) {
  
                    console.log(xhr5.responseText);
  
                    var arr = JSON.parse(xhr5.responseText);
                    console.log(arr);
  
                    console.log(arr.data.length);
                    console.log(arr.data.slice(0, 12));
                    
                    ins = arr.data.slice(0, 12);
                    insZero = (
                        ins[0].BUY_DOM_INDICES + ins[1].BUY_DOM_INDICES + 
                        ins[2].BUY_DOM_INDICES + ins[3].BUY_DOM_INDICES+ 
                        ins[4].BUY_DOM_INDICES + ins[5].BUY_DOM_INDICES+ 
                        ins[6].BUY_DOM_INDICES + ins[7].BUY_DOM_INDICES+ 
                        ins[8].BUY_DOM_INDICES + ins[9].BUY_DOM_INDICES+ 
                        ins[10].BUY_DOM_INDICES + ins[11].BUY_DOM_INDICES) / ins.length;
                        console.log(insZero); 
                        if (!confirm($(this).attr('alt')+"의 매매 수급 동향은 다음과 같습니다.\n\n" +
                        $(this).attr('alt')+"의 아파트 매물 가격을 확인해보겠습니까?")) {
                          alert("창을 닫겠습니다.");
                      } else {
                        if(Math.floor(insZero) > 100) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😍');
                        } else if (Math.floor(insZero) > 80) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😧');
                        } else { alert('동향 지수' + Math.floor(insZero) + ' 🥵');
                          alert($(this).attr('alt')+" 지역의 매물을 보기 위해 네이버 부동산으로 이동하겠습니다.")}
                      }     
                }
                }
          }
      xhr5.open("GET", "http://localhost:3000/proxy7", false);
      xhr5.send();
      });
      $('#area5').on('click', function () {

        var xhr6 = new XMLHttpRequest();
        xhr6.onreadystatechange = () => {
            if (xhr6.readyState == 4) {
                if (xhr6.status == 200) {
  
                    console.log(xhr6.responseText);
  
                    var arr = JSON.parse(xhr6.responseText);
                    console.log(arr);
  
                    console.log(arr.data.length);
                    console.log(arr.data.slice(0, 12));
                    
                    ins = arr.data.slice(0, 12);
                    insZero = (
                        ins[0].BUY_DOM_INDICES + ins[1].BUY_DOM_INDICES + 
                        ins[2].BUY_DOM_INDICES + ins[3].BUY_DOM_INDICES+ 
                        ins[4].BUY_DOM_INDICES + ins[5].BUY_DOM_INDICES+ 
                        ins[6].BUY_DOM_INDICES + ins[7].BUY_DOM_INDICES+ 
                        ins[8].BUY_DOM_INDICES + ins[9].BUY_DOM_INDICES+ 
                        ins[10].BUY_DOM_INDICES + ins[11].BUY_DOM_INDICES) / ins.length;
                        console.log(insZero); 
                        if (!confirm($(this).attr('alt')+"의 매매 수급 동향은 다음과 같습니다.\n\n" +
                        $(this).attr('alt')+"의 아파트 매물 가격을 확인해보겠습니까?")) {
                          alert("창을 닫겠습니다.");
                      } else {
                        if(Math.floor(insZero) > 100) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😍');
                        } else if (Math.floor(insZero) > 80) {
                            return alert('동향 지수' + Math.floor(insZero) + ' 😧');
                        } else { alert('동향 지수' + Math.floor(insZero) + ' 🥵');
                          alert($(this).attr('alt')+" 지역의 매물을 보기 위해 네이버 부동산으로 이동하겠습니다.")}
                      }     
                }
                }
          }
      xhr6.open("GET", "http://localhost:3000/proxy8", false);
      xhr6.send();
      });



});

// $(function() {
//     $('img[usemap]').rwdImageMaps();
//     $('area').on('click', function () {



//         alert($(this).attr('alt') + ' 입니다.'); 
//         if(area5) {
//             if(Math.floor(insZero) > 100) {
//                 return alert('동향 지수' + Math.floor(insZero) + ' 😍');
//             } else if (Math.floor(insZero) > 80) {
//                 return alert('동향 지수' + Math.floor(insZero) + ' 😧');
//             } else return alert('동향 지수' + Math.floor(insZero) + ' 🥵');
//         }





//       // confirm($(this).attr('alt') + ' 입니다.');
//     if (!confirm($(this).attr('alt')+"의 매매 수급 동향은 다음과 같습니다.\n\n" +
//     $(this).attr('alt')+"의 아파트 매물 가격을 확인해보겠습니까?")) {
//       alert("창을 닫겠습니다.");
//   } else {
//     if(Math.floor(insZero) > 100) {
//         return alert('동향 지수' + Math.floor(insZero) + ' 😍');
//     } else if (Math.floor(insZero) > 80) {
//         return alert('동향 지수' + Math.floor(insZero) + ' 😧');
//     } else { alert('동향 지수' + Math.floor(insZero) + ' 🥵');
//       alert($(this).attr('alt')+" 지역의 매물을 보기 위해 네이버 부동산으로 이동하겠습니다.")}
//   }











//     });
//   });