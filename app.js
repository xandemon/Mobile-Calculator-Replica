//1st method

let screen = document.querySelector('.display');
let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML === 'C') {
            screen.value = "";
        }
        else if (e.target.innerHTML === '=') {
            if (screen.value !== "") {
                screen.value = eval(screen.value);
                //use try and catch to show syntax error message
                console.log(screen.value);
            }
        }
        else if (e.target.innerHTML === 'Del') {
            let temp = screen.value.slice(0, -1);
            screen.value = temp;
        }
        else if (e.target.innerHTML === '%') {
            let temp = eval(screen.value);
            screen.value = temp/100;
        }
        else {
            screen.value += e.target.dataset.num;
        }
    });
});