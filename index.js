const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  // clock.innerHTML = date.getMinutes();  //You can also customize the date and time format further if needed, using methods like getHours(), getMinutes(), getSeconds(), getFullYear(), getMonth(), and getDate() for more control over how the output is formatted.
}, 1000);