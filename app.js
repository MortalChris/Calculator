const start = () =>{
//Result document get
const result = document.getElementById("result-screen");  
//Btn document get
    const btn1 = document.getElementById("one");
    const btn2 = document.getElementById("two");
    const btn3 = document.getElementById("three");
    const btn4 = document.getElementById("four");
    const btn5 = document.getElementById("five");
    const btn6 = document.getElementById("six");
    const btn7 = document.getElementById("seven");
    const btn8 = document.getElementById("eight");
    const btn9 = document.getElementById("nine");
    const btn0 = document.getElementById("zero");

    const btnClear = document.getElementById("AC");
    const btnOPara = document.getElementById("o-para");
    const btnCPara = document.getElementById("c-para"); 
    const btnDot = document.getElementById("dot");
    const btnDiv = document.getElementById("divide");
    const btnPlus = document.getElementById("plus");
    const btnMult = document.getElementById("multiply");
    const btnMinus = document.getElementById("minus");
    const btnPerc = document.getElementById("percentage");
    const btnEqual = document.getElementById("equal");
    const btns = document.querySelector("button");


//Buttons for each number
    btn1.addEventListener("click", function(){
        result.textContent += 1;
    });
    btn2.addEventListener("click", function(){
        result.textContent += 2;
    });
    btn3.addEventListener("click", function(){
        result.textContent += 3;
    });
    btn4.addEventListener("click", function(){
        result.textContent += 4;
    }); 
    btn5.addEventListener("click", function(){
        result.textContent += 5;
    });
    btn6.addEventListener("click", function(){
        result.textContent += 6;
    }); 
    btn7.addEventListener("click", function(){
        result.textContent += 7;
    });
    btn8.addEventListener("click", function(){
        result.textContent += 8;
    }); 
    btn9.addEventListener("click", function(){
        result.textContent += 9;
    });
    btn0.addEventListener("click", function(){
        result.textContent += 0;
    });
    
    
//Buttons for each operator/function
    btnClear.addEventListener("click", function(){
        result.textContent = "";
    });
    btnPlus.addEventListener("click", function(){
        result.textContent += "+";
    });
    btnMinus.addEventListener("click", function(){
        result.textContent += "-";
    });
    btnOPara.addEventListener("click", function(){
        result.textContent += "(";
    });
    btnCPara.addEventListener("click", function(){
        result.textContent += ")";
    });
    btnDot.addEventListener("click", function(){
        result.textContent += ".";
    });
    btnDiv.addEventListener("click", function(){
        result.textContent += "/";
    });
    btnMult.addEventListener("click", function(){
        result.textContent += "*";
    });
    btnPerc.addEventListener("click", function(){
        result.textContent += "%";
    });

    
//Getting the result
    btnEqual.addEventListener("click", function(){
        let red = parseInt(result.textContent);
        console.log(red);
        result.textContent = red;
    });
};
start();