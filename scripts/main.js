var myImage = document.querySelector('img');//сохранение ссылки на первую картинку

myImage.onclick = function() {//при клике на эту картинку вызывается функция 
    var mySrc = myImage.getAttribute('src');//получаем значение из атрибута src
    if(mySrc === 'images/d37eb59-1.png') {
      myImage.setAttribute ('src','images/3x234.png');
    } else {
      myImage.setAttribute ('src','images/d37eb59-1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');//myName хранит то что введет пользователь когда появится окно 
    localStorage.setItem('name', myName);//Создаем свойство name в котором храним значение переменной myName
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {//если хранилище не пустое
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }