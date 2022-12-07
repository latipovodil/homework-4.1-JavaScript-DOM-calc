let all = ''

let plus = document.querySelector(".btn-plus")
plus.addEventListener("click", function (x) {
  if (all[all.length - 1] == '+') {
    document.getElementById("p1").innerHTML = '2 ta ishora yozmang!!!';
  }
  else {
    if (all.length >= 1) {
      all += '+'
      document.getElementById("p1").innerHTML = all;
    }
    else {
      document.getElementById("p1").innerHTML = 'Amal kiritishdan oldin biron-bir son kiriting';
    }
  }
})


let one = document.querySelector(".btn1")
one.addEventListener("click", function (x) {
  all += '1'
  document.getElementById("p1").innerHTML = all;
})


let two = document.querySelector(".btn2")

two.addEventListener("click", function (x) {
  all += '2'
  document.getElementById("p1").innerHTML = all;
})

let three = document.querySelector(".btn3")
three.addEventListener("click", function (x) {
  all += '3'
  document.getElementById("p1").innerHTML = all;
})

let four = document.querySelector(".btn4")
four.addEventListener("click", function (x) {
  all += '4'
  document.getElementById("p1").innerHTML = all;
})

let five = document.querySelector(".btn5")
five.addEventListener("click", function (x) {
  all += '5'
  document.getElementById("p1").innerHTML = all;
})

let six = document.querySelector(".btn6")

six.addEventListener("click", function (x) {
  all += '6'
  document.getElementById("p1").innerHTML = all;
})

let seven = document.querySelector(".btn7")

seven.addEventListener("click", function (x) {
  all += '7'
  document.getElementById("p1").innerHTML = all;
})

let eight = document.querySelector(".btn8")

eight.addEventListener("click", function (x) {
  all += '8'
  document.getElementById("p1").innerHTML = all;
})

let nine = document.querySelector(".btn9")

nine.addEventListener("click", function (x) {
  all += '9'
  document.getElementById("p1").innerHTML = all;
})

let teng = document.querySelector(".teng")

teng.addEventListener("click", function (x) {
  document.getElementById("p1").innerHTML = eval(all);
})

let boluv = document.querySelector(".btn-m")

boluv.addEventListener("click", function (x) {
  if (all[all.length - 1] == '/') {
    document.getElementById("p1").innerHTML = '2 ta ishora yozmang!!!';
  }
  else {
    if (all.length >= 1) {
      all += '/'
      document.getElementById("p1").innerHTML = all;
    }
    else {
      document.getElementById("p1").innerHTML = 'Amal kiritishdan oldin biron-bir son kiriting';
    }
  }
})

let x = document.querySelector(".btnx")

x.addEventListener("click", function (x) {
  if (all[all.length - 1] == '*') {
    document.getElementById("p1").innerHTML = '2 ta ishora yozmang!!!';
  }
  else {
    if (all.length >= 1) {
      all += '*'
      document.getElementById("p1").innerHTML = all;
    }
    else {
      document.getElementById("p1").innerHTML = 'Amal kiritishdan oldin biron-bir son kiriting';
    }
  }
})

let minus = document.querySelector(".btn-")

minus.addEventListener("click", function (x) {
  if (all[all.length - 1] == '-') {
    document.getElementById("p1").innerHTML = '2 ta ishora yozmang!!!';
  }
  else {
    if (all.length >= 1) {
      all += '-'
      document.getElementById("p1").innerHTML = all;
    }
    else {
      document.getElementById("p1").innerHTML = 'Amal kiritishdan oldin biron-bir son kiriting';
    }
  }
})



let clear = document.querySelector(".clear")

clear.addEventListener("click", function (x) {
  all = 'calc Prepared by:odilbek '
  document.getElementById("p1").innerHTML = all;
})

