setTimeout(function(){
    odometer.innerText = 1000;
}, 300);

window.odometerOptions = {
  auto: false, // Don't automatically initialize everything with class 'odometer'
  selector: '.my-numbers', // Change the selector used to automatically find things to be animated
  format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
  duration: 3000, // Change how long the javascript expects the CSS animation to take
  theme: 'car', // Specify the theme (if you have more than one theme css file on the page)
  animation: 'count' // Count is a simpler animation method which just increments the value,
                     // use it when you're looking for something more subtle.
};

function howtojoin() {
    document.getElementById("row1").setAttribute("class", "no-display"); 
    document.getElementById("row2").setAttribute("class", "no-display"); 
    document.getElementById("row3").setAttribute("class", "no-display"); 
    document.getElementById("howtojoin").style.display = "block"; 
  }

  function guide() {
    document.getElementById("row1").setAttribute("class", "no-display"); 
    document.getElementById("row2").setAttribute("class", "no-display"); 
    document.getElementById("row3").setAttribute("class", "no-display"); 
    document.getElementById("guide").removeAttribute('style');
    console.log('gude')
  }
  function topspon() {
    document.getElementById("row1").setAttribute("class", "no-display"); 
    document.getElementById("row2").setAttribute("class", "no-display"); 
    document.getElementById("row3").setAttribute("class", "no-display"); 
    document.getElementById("topspon").style.display = "block"; 
  }

  function reload(){
    location.reload();
  }