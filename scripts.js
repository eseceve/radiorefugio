(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var timer = document.getElementById('timer');

    if (timer) {
      setInterval(updateTimer, 1000);
    }
  }

  function updateTimer() {
    var day = document.getElementById('timerDay');
    var hour = document.getElementById('timerHour');
    var minute = document.getElementById('timerMinute');
    var second = document.getElementById('timerSecond');
    var data = getTimeRemaining('2016-10-21T22:00:00');

    day.innerHTML = data.days;
    hour.innerHTML = ('0' + data.hours).slice(-2);
    minute.innerHTML = ('0' + data.minutes).slice(-2);
    second.innerHTML = ('0' + data.seconds).slice(-2);
  }

  function getTimeRemaining(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
})();
