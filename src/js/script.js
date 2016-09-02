// ///////////////////////////////////////////////
// TODO now
//
//
//
//
// ///////////////////////////////////////////////
// TODO new features
// - history
// - pausa lunga dopo x cicli
// - totale cicli su x giornalieri
// ///////////////////////////////////////////////
var $ = require('jquery')
var moment = require('moment')
// ///////////////////////////////////////////////
var x = 25 // Tempo di lavoro
var y = 5 // Tempo di pausa
// ///////////////////////////////////////////////
var html = ''
var now = 'work'
var run = false
var start // ???
var count = 0
var startPoint = moment(x, 'm')
var cicli = 0
var radix = 10
// ///////////////////////////////////////////////
function isFinish (time) {
  return time.minute() === 0 && time.second() === 0
}
function timer () {
  if (now === 'work') {
    time(x)
  } else {
    time(y)
  }
}
function time (min) {
  html = startPoint.format('mm:ss')
  $('#result').html(html)
  startPoint.subtract(1, 's')
  count++
  $('#barra').css('height', getPercent(min, count) + '%')
  if (isFinish(startPoint)) {
    switchTimer()
    // startPoint = moment(min, 'm')
    count = 0
  }
}
function switchTimer () {
  if (now === 'work') {
    now = 'break'
    startPoint = moment(y, 'm')
    cicli++
    console.log(cicli)
  } else {
    now = 'work'
    startPoint = moment(x, 'm')
  }
}
function getPercent (total, now) {
  return (now / (total * 60)) * 100
}
// ///////////////////////////////////////////////
$('#bordo').click(function () {
  if (!run) {
    start = setInterval(timer, 999)
    run = true
    now = 'work'
    // $('#worktime').attr('disabled', 'disabled')
    // $('#barra').css('height', '0%')
    // count = 0
  } else if (run) {
    clearInterval(start)
    run = false
    $('#worktime').attr('disabled', false)
    $('#breaktime').attr('disabled', false)
  }
})
// ///////////////////////////////////////////////
$('.work > .minus').click(function () {
  if ((Number.parseInt($('.work > .choise').html(), radix) - 1) > 0 && (Number.parseInt($('.work > .choise').html(), radix) - 1) < 60) {
    x = parseInt($('.work > .choise').html(), radix) - 1
    $('.work > .choise').html(x)
    $('#result').html(x)
    // x = choise
    $('#worktime').attr('disabled', 'disabled')
    $('#barra').css('height', '0%')
    count = 0
    // x = choise
    startPoint = moment(x, 'm')
  }
})

$('.work > .plus').click(function () {
  if ((parseInt($('.work > .choise').html(), radix) + 1) > 0 && (parseInt($('.work > .choise').html(), radix) + 1) < 60) {
    x = parseInt($('.work > .choise').html(), radix) + 1
    $('.work > .choise').html(x)
    $('#result').html(x)
    // x = choise
    $('#worktime').attr('disabled', 'disabled')
    $('#barra').css('height', '0%')
    count = 0
    // x = choise
    startPoint = moment(x, 'm')
  }
})

$('.break > .minus').click(function () {
  if ((parseInt($('.break > .choise').html(), radix) - 1) > 0 && (parseInt($('.break > .choise').html(), radix) - 1) < 59) {
    y = parseInt($('.break > .choise').html(), radix) - 1
    $('.break > .choise').html(y)
    $('#result').html(y)
    // y = choise
  }
})

$('.break > .plus').click(function () {
  if ((parseInt($('.break > .choise').html(), radix) + 1) > 0 && (parseInt($('.break > .choise').html(), radix) + 1) < 15) {
    y = parseInt($('.break > .choise').html(), radix) + 1
    $('.break > .choise').html(y)
    $('#result').html(y)
    // y = choise
  }
})
