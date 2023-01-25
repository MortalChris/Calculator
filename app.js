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

    const allBtns = document.querySelectorAll("button");
    let fullOper = [];
    

//Buttons for each number
const numBtn = () =>{
    btn0.addEventListener("click", function(){
        result.textContent += 0;
        fullOper.push(0);
    });
    btn1.addEventListener("click", function(){
        result.textContent += 1;
         fullOper.push(1);
    });
    btn2.addEventListener("click", function(){
        result.textContent += 2;
         fullOper.push(2);
    });
    btn3.addEventListener("click", function(){
        result.textContent += 3;
         fullOper.push(3);
    });
    btn4.addEventListener("click", function(){
        result.textContent += 4;
         fullOper.push(4);
    }); 
    btn5.addEventListener("click", function(){
        result.textContent += 5;
         fullOper.push(5);
    });
    btn6.addEventListener("click", function(){
        result.textContent += 6;
         fullOper.push(6);
    }); 
    btn7.addEventListener("click", function(){
        result.textContent += 7;
         fullOper.push(7);
    });
    btn8.addEventListener("click", function(){
        result.textContent += 8;
         fullOper.push(8);
    }); 
    btn9.addEventListener("click", function(){
        result.textContent += 9;
         fullOper.push(9);
    });

};   
numBtn();  


//Buttons for each operator/function
const numerialFunctions = () => {
    btnClear.addEventListener("click", function(){
        result.textContent = "";
         fullOper = [];
    });
    btnPlus.addEventListener("click", function(){
        result.textContent += "+";
         fullOper.push("+");
    });
    btnMinus.addEventListener("click", function(){
        result.textContent += "-";
         fullOper.push("-");
    });
    btnOPara.addEventListener("click", function(){
        result.textContent += "(";
         fullOper.push("(");
    });
    btnCPara.addEventListener("click", function(){
        result.textContent += ")";
         fullOper.push(")");
    });
    btnDot.addEventListener("click", function(){
        result.textContent += ".";
         fullOper.push(".");
    });
    btnDiv.addEventListener("click", function(){
        result.textContent += "/";
         fullOper.push("/");
    });
    btnMult.addEventListener("click", function(){
        result.textContent += "*";
         fullOper.push("*");
    });
    btnPerc.addEventListener("click", function(){
        result.textContent += "%";
        fullOper.push("%");
    });
}; 
numerialFunctions();


const equationResult = () => {
    let solvedResult
        btnEqual.addEventListener("click", function(){
            solvedResult = Function("return " + fullOper.join(""))();
            fullOper = [];
            fullOper.push(solvedResult);
            result.textContent  = solvedResult;
            console.log("Retuns" + " " + solvedResult);
        });
    //     for(i of allBtns){
    //         i.addEventListener('click', () => {
    //             console.log (fullOper);
    //             });
    //     };
    };
equationResult();


};
start();