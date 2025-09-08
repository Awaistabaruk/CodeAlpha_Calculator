const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');


buttons.forEach(element => {
  element.addEventListener('click', () => {
    const btn = element.innerText;


  

    if (btn === "AC") {
      display.value = "";
    } else if (btn === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (btn === "INIT") {
      display.value = "0";
    } else if (btn === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    
   
    
    else {
      if(display.value === "0") {
        display.value = btn;
      }
      else {

        display.value += btn;
      } 
    }
  });
});
