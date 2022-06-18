window.addEventListener("load", () => {
    const display = document.querySelector(".c_display");
    const btns = document.getElementsByClassName("c-boton");

    const tecladoButtonArray = Array.from(btns);


    tecladoButtonArray.forEach((button) =>{
        button.addEventListener("click", ()=>{
            calculadora(button, display);
        })
    })
})

function calculadora(button, display){
    switch (button.innerHTML){
        case "C":
            borrar(display);
            break;

        case "=":
            caclcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function caclcular(display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display){
    display.innerHTML = 0;
}