var c = "";
var a = "";
var dig = [];
var ans;

//when the users clicks on equals to sign, the function equalsTo will be called

function equalsTo() {
  document.getElementById("result").innerHTML = "";
  for (i = 0; i < dig.length; i++) {
    a = a + dig[i];
  }

  //the result will be displayed
  ans = eval(a);

  document.getElementById("result").innerHTML = ans;

  while (dig.length > 0) {
    dig.pop();
  }
  dig.push(ans.toString());
}

//storing the digits and operators into an array through function digit
function digit(num) {
  dig.push(num);

  if (dig.length != 1) {
    c = "";
    document.getElementById("result").innerHTML = c;
  }

  for (i = 0; i < dig.length; i++) {
    c = c + dig[i];
  }

  document.getElementById("result").innerHTML = c;
}

//when the user click on 'C', the function refreshDis will be called

function refreshDis() {
  document.getElementById("result").innerHTML = "";
  while (dis.length > 0) {
    //
    dis.pop();
  }

  c = "";
  a = "";
}
