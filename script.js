// selecting the elements of html
const container = document.querySelector('.container');
const h1 = document.querySelector('.h1');
// Declaring the clock function
const clock = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // adding zero if they are less or equal to 9
  if (hours <= 9) {
    hours = '0' + hours;
  } else if (minutes <= 9) {
    minutes = '0' + minutes;
  } else if (seconds <= 9) {
    minutes = '0' + minutes;
  }

  document.getElementById('demo').innerHTML = hours + ":" + minutes + ":" + seconds;
  container.classList.toggle('animate');
}
setInterval(clock,1000);
