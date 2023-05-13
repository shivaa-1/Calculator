//create container element using DOM 
let container=document.createElement('div');

container.setAttribute('class', 'container d-flex flex-column flex-content-center');

container.innerHTML=`
    <h1 id="title" class="text-center">Calculator</h1>
    <p id="description" class="text-center">Perform All your calculation at one place</p>


 
<div class="calculator">
<input type="text"  placeholder="0" id="result"  onkeypress="return isNumberkey(event)">
<button onclick="clr()" id="clear">AC</button>
<button onclick="del()" id="delete">DEL</button>
<button onclick="display('%')" id="modulus">%</button>
<button onclick="display('/')" id="divide">/</button>
<button onclick="display('7')" id="7">7</button>
<button onclick="display('8')" id="8">8</button>
<button onclick="display('9')" id="9">9</button>
<button onclick="display('*')" id="multiply">*</button>
<button onclick="display('4')" id="4">4</button>
<button onclick="display('5')" id="5">5</button>
<button onclick="display('6')" id="6">6</button>
<button onclick="display('-')" id="subtract">-</button>
<button onclick="display('1')" id="1">1</button>
<button onclick="display('2')" id="2">2</button>
<button onclick="display('3')" id="3">3</button>
<button onclick="display('+')" id="add">+</button>
<button onclick="display('.')" id="decimal">.</button>
<button onclick="display('0')" id="0">0</button>
<button class="equalBtn" onclick="calculate('=')" id="equal">=</button>
</div>
`;

document.body.append(container);


let outputDisplay=document.getElementById('result');




//Function to restrict user to not allow to enter any keys otherthan number.
// function isNumberkey(event){  
//     let charcode=(event.which)?event.which:event.keyCode;
//     if(charcode>31&& (charcode<48|| charcode>57)){
//         restrictToast.show();
//         return false;
//     }
//     else return true;
// }


//function to display the value in input box 
function display(val){
    if(val==="." && outputDisplay.value.includes('.')){
        return 
    }
    else outputDisplay.value+=val;
}


//function to evaluate the data 
function calculate(){
     try {
        outputDisplay.value=eval(outputDisplay.value).toFixed(2);
        
     } catch (error) {
        invalidToast.show();
     }
}

function clr(){
    outputDisplay.value="";
}

function del(){
    outputDisplay.value=outputDisplay.value.slice(0,-1);
}