let a = "";
let b = "";
let sign = "";
let finish = false;

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
const actions = ["-", "+", "X", "/"];

const output = document.querySelector(".calc-screen p");
const clearBtn = document.querySelector(".ac");
const btnContainer = document.querySelector(".buttons");

function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    output.textContent = 0;
}

clearBtn.addEventListener("click", clearAll);

const btnClick = (evt) => {
    if (!evt.target.classList.contains("btn")) 
       { return;}
    

    if (evt.target.classList.contains("ac")) 
      {  return;}
    

    output.textContent = "";

    const key = evt.target.textContent;

    if (digits.includes(key)) {
        a += key;
        console.log(a, b, sign);
        output.textContent = a;

    }

    if (actions.includes(key)) {
        sign = key;
        output.textContent = sign;
        console.log(a, b, sign);
        return;
    }
}

btnContainer.addEventListener("click", btnClick);