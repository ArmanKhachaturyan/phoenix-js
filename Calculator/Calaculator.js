let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (elem) => {
        if (elem.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            input.style.color = "#fb7c14"

        } else if (elem.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (elem.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += elem.target.innerHTML;
            input.value = string;
        }

    })
})