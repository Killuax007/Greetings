function textdel() {
  var num1 = document.getElementById("result").value;
  var num1 = (document.getElementById("result").value = num1.substr(
    0,
    num1.length - 1
  ));
  refresh();
}
function refresh() {
  document.getElementById("result").value = num1;
}
function cleartext() {
  document.getElementById("result").value = "";
}
function display(v) {
  document.getElementById("result").value += v;
}
function calculate() {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
  // console.log(p);
}
