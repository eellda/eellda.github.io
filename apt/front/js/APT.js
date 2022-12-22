$(function() {
    $('img[usemap]').rwdImageMaps();
    $('#area1').on('click', function () {
      alert($(this).attr('alt') + ' 입니다.');
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
                  var insZero = ins[0];
                  //console.log(area);
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
    xhr2.open("GET", "http://localhost:3000/proxy4", true);
    xhr2.send();
    });
    $('#area2').on('click', function () {
        alert($(this).attr('alt') + ' 입니다.');
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
                    var insZero = ins[0];
                    //console.log(area);
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
      xhr3.open("GET", "http://localhost:3000/proxy5", true);
      xhr3.send();
      });
      $('#area3').on('click', function () {
        alert($(this).attr('alt') + ' 입니다.');
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
                    var insZero = ins[0];
                    //console.log(area);
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
      xhr4.open("GET", "http://localhost:3000/proxy6", true);
      xhr4.send();
      });
      $('#area4').on('click', function () {
        alert($(this).attr('alt') + ' 입니다.');
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
                    var insZero = ins[0];
                    //console.log(area);
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
      xhr5.open("GET", "http://localhost:3000/proxy7", true);
      xhr5.send();
      });
      $('#area5').on('click', function () {
        alert($(this).attr('alt') + ' 입니다.');
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
                    var insZero = ins[0];
                    //console.log(area);
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
      xhr6.open("GET", "http://localhost:3000/proxy8", true);
      xhr6.send();
      });
});