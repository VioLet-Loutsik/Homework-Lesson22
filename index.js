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
let name = prompt("name?");
localStorage.setItem("key", name);
let key = name;
var str1_ ="Hello  "+ key,
      changeText = function()  {
          if (localStorage == key);
          else ("Hello quest");
          document.querySelector('h5').textContent = str1_ || else_;
          }
  document.getElementById('but1').addEventListener('click', changeText, false);
var str2_ = localStorage.removeItem(key),
      changeText = function()  {
          document.querySelector('h5').textContent = str2_;
      }
  document.getElementById('but2').addEventListener('click', localStorage.removeItem (key));