/*Home work-1*/
var counter = function() {
    var i = 0;
    return function(initialValue) {

        i = ++initialValue || i;
        return i++;

    };

}();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
 
/*Home work-2*/

let name = prompt("name?");

localStorage.setItem("key", name);
let key = name;

var str1_ ="Hello  "+ key,
      changeText = function()  {
          document.querySelector('h5').textContent = str1_;
          }
          document.getElementById('but1').addEventListener('click', changeText, false);

var str2_ = "Hello quest",
      changeText = function()  {
          document.querySelector('h5').textContent = str2_;
          localStorage.removeItem('key');
      }
          document.getElementById('but2').addEventListener('click', changeText, false);
