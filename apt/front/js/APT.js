$(function() {
    $('img[usemap]').rwdImageMaps();
    $('area').on('click', function () {
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
});