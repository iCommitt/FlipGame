const imgArray = ['alfa','alfa','bentley','bentley',
            'bmw','bmw','ferrari','ferrari',
            'kia','kia','mercedes','mercedes',
            'skoda','skoda','toyota','toyota'];
let count = 0;

restart();
//REORDER ARRAY
function restart(){
    for (let i = imgArray.length; i > 0; i--){
    

        //FIND RANDOM INDEX
        randomIndex = Math.floor(Math.random()*imgArray.length);
    
        //DISPLAY IMAGE ARRAY IN RANDOM ORDER
        addImage(imgArray[randomIndex]);
    
        //DELETE ELEMENT
        imgArray.splice(randomIndex, 1);
    }

}


//ADD IMAGE FUNCTION
function addImage(brand){
    const button = document.createElement('button');
    const img = document.createElement('img');
    const div = document.querySelector('.container');

    img.setAttribute('src', 'img/' + brand + '.png');
    img.className = 'PLAY';
    button.className = 'card';

    //APPEND ELEMENTS
    button.append(img);
    div.append(button);
}

start();
//HIDE IMAGES
function start(){
    const img = document.querySelectorAll('.PLAY');
    for (let i = 0; i < img.length; i++){
        img[i].style.opacity = '0';
    }
}


//SHOW IMAGE
let button = document.querySelectorAll('.card')
const img = document.querySelectorAll('.PLAY');
    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){
            gameplay(i);
    }) 
}

//ACTUAL GAMEPLAY
let first,second,firstIndex,secondIndex;
function gameplay(i){
    button = document.querySelectorAll('.card')
    console.log(count)
    if(count == 1){
        img[i].style.opacity = '1';
        secondIndex = i;
        second = button[i];
        compare();
        setTimeout(function(){
            start()
        }, 300);
        count = 0;
    } else { 
        img[i].style.opacity = '1';
        first = button[i];
        firstIndex = i;
        count = 1;
    }
}

//COMPARE
function compare(){
    if (first.innerHTML == second.innerHTML){
        img[firstIndex].className = 'STOP';
        img[secondIndex].className = 'STOP';
    };
}

///////////////////////////////////////////////

var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  ms = 0,
  init = 0;

//функция для очистки поля
let input = document.querySelector('.timer');
function ClearСlock() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00:00';
  input.value = readout;
}
//функция для старта секундомера
window.onload = () => {
  StartStop();
}

function StartTIME() {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  ms = Math.round(t / 10);
  if (ms > 99) {
    ms = 0;
  }
  if (ms == 0) {
    ms = '00';
  }
  if (ms > 0 && ms <= 9) {
    ms = '0' + ms;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  dh = h - 1;
  if (dh > 0) {
    if (dh < 10) {
      dh = '0' + dh;
    }
  } else {
    dh = '00';
  }
  readout = dh + ':' + dm + ':' + ds;
  input.value = readout;
  clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
  if (init == 0) {
    ClearСlock();
    dateObj = new Date();
    StartTIME();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}