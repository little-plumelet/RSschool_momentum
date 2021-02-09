const MONTHS  = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
}

const DAYS = {
0: "Воскресенье,",
1: "Понедельник,",
2: "Вторник,",
3: "Среда,",
4: "Четверг,",
5: "Пятница,",
6: "Суббота,",
}

const imgMorning = [
  {url: "assets/images/morning/01.jpg"},
  {url: "assets/images/morning/02.jpg"},
  {url: "assets/images/morning/03.jpg"},
  {url: "assets/images/morning/04.jpg"},
  {url: "assets/images/morning/05.jpg"},
  {url: "assets/images/morning/06.jpg"},
  {url: "assets/images/morning/07.jpg"},
  {url: "assets/images/morning/08.jpg"},
  {url: "assets/images/morning/09.jpg"},
  {url: "assets/images/morning/10.jpg"},
  {url: "assets/images/morning/11.jpg"},
  {url: "assets/images/morning/12.jpg"},
  {url: "assets/images/morning/13.jpg"},
  {url: "assets/images/morning/14.jpg"},
  {url: "assets/images/morning/15.jpg"},
  {url: "assets/images/morning/16.jpg"},
  {url: "assets/images/morning/17.jpg"},
  {url: "assets/images/morning/18.jpg"},
  {url: "assets/images/morning/19.jpg"},
  {url: "assets/images/morning/20.jpg"},
];

const imgDay = [
  {url: "assets/images/day/01.jpg"},
  {url: "assets/images/day/02.jpg"},
  {url: "assets/images/day/03.jpg"},
  {url: "assets/images/day/04.jpg"},
  {url: "assets/images/day/05.jpg"},
  {url: "assets/images/day/06.jpg"},
  {url: "assets/images/day/07.jpg"},
  {url: "assets/images/day/08.jpg"},
  {url: "assets/images/day/09.jpg"},
  {url: "assets/images/day/10.jpg"},
  {url: "assets/images/day/11.jpg"},
  {url: "assets/images/day/12.jpg"},
  {url: "assets/images/day/13.jpg"},
  {url: "assets/images/day/14.jpg"},
  {url: "assets/images/day/15.jpg"},
  {url: "assets/images/day/16.jpg"},
  {url: "assets/images/day/17.jpg"},
  {url: "assets/images/day/18.jpg"},
  {url: "assets/images/day/19.jpg"},
  {url: "assets/images/day/20.jpg"},
];

const imgEvening = [
  {url: "assets/images/evening/01.jpg"},
  {url: "assets/images/evening/02.jpg"},
  {url: "assets/images/evening/03.jpg"},
  {url: "assets/images/evening/04.jpg"},
  {url: "assets/images/evening/05.jpg"},
  {url: "assets/images/evening/06.jpg"},
  {url: "assets/images/evening/07.jpg"},
  {url: "assets/images/evening/08.jpg"},
  {url: "assets/images/evening/09.jpg"},
  {url: "assets/images/evening/10.jpg"},
  {url: "assets/images/evening/11.jpg"},
  {url: "assets/images/evening/12.jpg"},
  {url: "assets/images/evening/13.jpg"},
  {url: "assets/images/evening/14.jpg"},
  {url: "assets/images/evening/15.jpg"},
  {url: "assets/images/evening/16.jpg"},
  {url: "assets/images/evening/17.jpg"},
  {url: "assets/images/evening/18.jpg"},
  {url: "assets/images/evening/19.jpg"},
  {url: "assets/images/evening/20.jpg"},
];

const imgNight = [
  {url: "assets/images/night/01.jpg"},
  {url: "assets/images/night/02.jpg"},
  {url: "assets/images/night/03.jpg"},
  {url: "assets/images/night/04.jpg"},
  {url: "assets/images/night/05.jpg"},
  {url: "assets/images/night/06.jpg"},
  {url: "assets/images/night/07.jpg"},
  {url: "assets/images/night/08.jpg"},
  {url: "assets/images/night/09.jpg"},
  {url: "assets/images/night/10.jpg"},
  {url: "assets/images/night/11.jpg"},
  {url: "assets/images/night/12.jpg"},
  {url: "assets/images/night/13.jpg"},
  {url: "assets/images/night/14.jpg"},
  {url: "assets/images/night/15.jpg"},
  {url: "assets/images/night/16.jpg"},
  {url: "assets/images/night/17.jpg"},
  {url: "assets/images/night/18.jpg"},
  {url: "assets/images/night/19.jpg"},
  {url: "assets/images/night/20.jpg"},
];


let today = new Date(), 
hour = today.getHours();
let images = [];

// Rundom number for creating array of images for background
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// creating array of images for background
function createArrImages() {
 
  let nb = getRandomIntInclusive(0, 19);
  while (images.length < 6) {
    if (!(images.includes(imgNight[nb]))) images.push(imgNight[nb]);
    else nb = getRandomIntInclusive(0, 19); 
  }
  while (images.length < 12) {
    if (!(images.includes(imgMorning[nb]))) images.push(imgMorning[nb]);
    else nb = getRandomIntInclusive(0, 19);
  }
  while (images.length < 18) {
    if (!(images.includes(imgDay[nb]))) images.push(imgDay[nb]);
    else nb = getRandomIntInclusive(0, 19);
  }
  while (images.length < 24) {
    if (!(images.includes(imgEvening[nb]))) images.push(imgEvening[nb]);
    else nb = getRandomIntInclusive(0, 19);
  }
  return images;
}

// DOM Elements
  const time = document.querySelector('.time'),
  date = document.querySelector('.date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');
  buttonNextBackground = document.querySelector('.next-background');
  quoteText = document.querySelector('.quote');
  buttonNextQuote = document.querySelector('.next-quote');
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const humidity = document.querySelector('.humidity');
  const windSpeed = document.querySelector('.wind-speed');
  const city = document.querySelector('.city');

// Options
//const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    weekDay = today.getDay();
    day = today.getDate();
    month = today.getMonth();


  // Set AM or PM
  //const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
 // hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  date.innerHTML = `${DAYS[weekDay]}<span> </span>${day}<span> </span>${MONTHS[month]}`;
  //${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      'url('+images[hour].url+')';

    greeting.textContent = 'Доброе утро, ';
    document.body.style.color = 'white';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
    'url('+images[hour].url+')';
    
      //"url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Добрый день, ';
    document.body.style.color = 'white';
  } else if (hour >= 18 && hour < 24) {
    // Evening
    document.body.style.backgroundImage =
    'url('+images[hour].url+')';
      //"url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
  }
  else {
    //Night
    document.body.style.backgroundImage =
    'url('+images[hour].url+')';  
    //"url('https:')";
    greeting.textContent = 'Доброй ночи, ';
    document.body.style.color = 'white';
  }
  setTimeout(setBgGreet, 30000);
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name').length === 0)  {
    name.textContent = '[Напиши свое имя]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
  console.log("+++", localStorage.getItem('name').length);
  console.log('***', name.textContent.length);
}

//clear Name 
function clearName(e) {
  if (e.type == 'focus') {
    name.textContent = '';
  }
}

// Set Name
function setName(e) { 
  
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('name', e.target.innerText);
          if (name.textContent == '') getName();
          name.blur();    
    }
  } else {
    if (name.textContent == '') getName();
    else localStorage.setItem('name', e.target.innerText);
  }
}

// Get focus
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus').length === 0) {
    focus.textContent = '[Напиши свою цель]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
  console.log("+++", localStorage.getItem('focus'));
  console.log('***', focus.textContent);
}

//clear Focus 
function clearFocus(e) {
  if (e.type == 'focus') {
    focus.textContent = '';
  }
}

// Set focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      if (focus.textContent = '') getFocus();
      focus.blur();
    }
  } else {
    if (focus.textContent == '') getFocus();
    else localStorage.setItem('focus', e.target.innerText);
    
  }
}

//Next background onclick
function nextBackground(e) {
      if (e.type == 'click') {
        hour += 1;
        if (hour > 23) hour = 0;
        document.body.style.backgroundImage =
        'url('+images[hour].url+')';
      }
    }
    
// Quote
async function updateQuote() {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=ru';
  const response = await fetch(url);
  const data = await response.text();
  quoteText.textContent = data;
//request.open('GET', 'http://api.forismatic.com/api/1.0/?method=getQuote&format=text&key=100000&lang=en');
}
//next quote onclick 
function nextQuote(e) {
  if (e.type == 'click') {
    updateQuote()
  }
}

//choise of a city for weather forcast
function getCity() {
  if (localStorage.getItem('city') === null || localStorage.getItem('city').length === 0) {
    city.textContent = 'Попробуй другой город';
  } else {
    city.textContent = localStorage.getItem('city');
    console.log('---', localStorage.getItem('city'));
  }
}

//clear City 
function clearCity(e) {
  if (e.type == 'focus') {
    city.textContent = '';
  }
}

function setCity(event) {
  
  if (event.type === 'keypress') {
    // Make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13) {
        if (city.textContent !== '' && city.textContent !== 'Попробуй другой город') {
          localStorage.setItem('city', event.target.innerText);
        }
        else if (localStorage.getItem('city') === null) getCity();
        city.blur();
        getWeather();
      }
  } else {
    if (localStorage.getItem('city') === null) getCity();
    else city.textContent = localStorage.getItem('city');
    //city.textContent = localStorage.getItem('city');
    //if (city.textContent == "") getCity();
    
  }
  console.log('////', localStorage.getItem('city'));
}


  /*if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }*/

//Weather

  async function getWeather() {  
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=55ad60f4cb6e58d26c22df27858e0069&units=metric`;
      const res = await fetch(url);
      const data = await res.json(); 
      
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
      humidity.textContent = `влажность: ${data.main.humidity}%`;
      windSpeed.textContent = `скорость ветра: ${data.wind.speed}м/с`;

      console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.main.humidity, data.wind.speed);
    } catch(e) {
      city.textContent = "Попробуй другой город";
      weatherIcon.className.textContent = '';
      weatherIcon.classList.textContent = '';
      temperature.textContent = '';
      weatherDescription.textContent = '';
      humidity.textContent = '';
      windSpeed.textContent = '';

    }
  }


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('focus', clearName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('focus', clearFocus);
buttonNextBackground.addEventListener('click', nextBackground);
buttonNextQuote.addEventListener('click', nextQuote);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('focus', clearCity);
city.addEventListener('blur', setCity);

// Run
createArrImages();
showTime();
setBgGreet();
getName();
getFocus();
updateQuote();

getCity();