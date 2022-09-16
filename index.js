var one = "";
var two = "";
var num = [];
var ans;

//when the users clicks on equals to sign, the function equalsTo will be called
function equalsTo() {
  try {
    document.getElementById("result").innerHTML = "";
    two += num.join("");

    //the result will be displayed
    ans = eval(two);
    if (isNaN(ans)) throw new Error("Your calculation was not a number");

    document.getElementById("result").innerHTML = ans;

    num = ans.toString().split();
  } catch (e) {
    var three = document.getElementById("error");
    three.className = "show";

    setTimeout(function () {
      three.className = three.className.replace("show", "");
    }, 3000);

    num = [];
  } finally {
    two = "";
    one = "";
  }
}

//storing the digits and operators into an array through function digit
function digit(number) {
  num.push(number);

  if (num.length != 1) {
    one = "";
    document.getElementById("result").innerHTML = one;
  }

  for (i = 0; i < num.length; i++) {
    one = one + num[i];
  }

  document.getElementById("result").innerHTML = one;
}

//when the user click on 'C', the function refreshDis will be called

function refreshDisplay() {
  document.getElementById("result").innerHTML = "";

  one = "";
  two = "";
  num = [];
}
