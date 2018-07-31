
var form1 = document.forms[1];
var s=2;
unhidde();
var form0 = document.forms[0];
form0.addEventListener("change",function(){
    var select = form0.elements.point;
    for (let i = 0; i < select.options.length; i++) {
        form1.elements[i].value="";
        var option = select.options[i];
        if(option.selected) {
          s=option.value;
          console.log(s);
        }
      }
      unhidde();
});
function unhidde(){
    for(let i = 0; i < 6; i++){
        form1.elements[i].hidden=true;
        let u;
        document.querySelectorAll("label")[i+1].hidden=true;
       
    }
    for(let i = 0; i < s; i++){
        form1.elements[i].hidden=false;
        document.querySelectorAll("label")[i+1].hidden=false;
    }
}
document.querySelector(".press").addEventListener("click",function(){
    for(let i = 0; i < 6; i++){
        if((form1.elements[i].value != undefined)&&(form1.elements[i].value != "")&&(form1.elements[i].hidden != true)){
            mas[i]=form1.elements[i].value.split(",");
            console.log(mas[i]);
        }
    }
    flow = getBezierCurve(mas);
	drawLines(ctx, flow);
});