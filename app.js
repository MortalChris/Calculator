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
    let fullOper = "";
    

//Buttons for each number
const numBtn = () =>{
    btn0.addEventListener("click", function(){
        result.textContent += 0;
        return fullOper += 0;
    });
    btn1.addEventListener("click", function(){
        result.textContent += 1;
        return fullOper += 1;
    });
    btn2.addEventListener("click", function(){
        result.textContent += 2;
        return fullOper += 2;
    });
    btn3.addEventListener("click", function(){
        result.textContent += 3;
        return fullOper += 3;
    });
    btn4.addEventListener("click", function(){
        result.textContent += 4;
        return fullOper += 4;
    }); 
    btn5.addEventListener("click", function(){
        result.textContent += 5;
        return fullOper += 5;
    });
    btn6.addEventListener("click", function(){
        result.textContent += 6;
        return fullOper += 6;
    }); 
    btn7.addEventListener("click", function(){
        result.textContent += 7;
        return fullOper += 7;
    });
    btn8.addEventListener("click", function(){
        result.textContent += 8;
        return fullOper += 8;
    }); 
    btn9.addEventListener("click", function(){
        result.textContent += 9;
        return fullOper += 9;
    });

};   
numBtn();  


//Buttons for each operator/function
const numerialFunctions = () => {
    btnClear.addEventListener("click", function(){
        result.textContent = "";
        return fullOper = "";
    });
    btnPlus.addEventListener("click", function(){
        result.textContent += "+";
        return fullOper += "+";
    });
    btnMinus.addEventListener("click", function(){
        result.textContent += "-";
        return fullOper += "-";
    });
    btnOPara.addEventListener("click", function(){
        result.textContent += "(";
        return fullOper += "(";
    });
    btnCPara.addEventListener("click", function(){
        result.textContent += ")";
        return fullOper += ")";
    });
    btnDot.addEventListener("click", function(){
        result.textContent += ".";
        return fullOper += ".";
    });
    btnDiv.addEventListener("click", function(){
        result.textContent += "/";
        return fullOper += "/";
    });
    btnMult.addEventListener("click", function(){
        result.textContent += "*";
        return fullOper += "*";
    });
    btnPerc.addEventListener("click", function(){
        result.textContent += "%";
        return fullOper += "%";
    });
}; 
numerialFunctions();

btnEqual.addEventListener("click", function(){
    let result = fullOper;
    console.log("Retuns" + " " + result);
});

for (i of allBtns) {
    i.addEventListener('click', () => {
        console.log(fullOper);
        })
    };


// allBtns.addEventListener('click', () => {
//     console.log ("This is an array" + " " + array);
//     console.log(result.textContent);
//     });

//Getting the result
// btnEqual.addEventListener("click", function(){
//     let red = parseInt(result.textContent);
//     console.log(red);
//     result.textContent = red;
// });
};
start();