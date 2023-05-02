
$(document).ready(function () {

  var visualList = $('.visual_list');
  var visualImgNum = visualList.children().size();
  var visualImgWidth = visualList.children().innerWidth();
  var timer;

  onPlay();

  visualList.css({ 'width': visualImgNum * visualImgWidth });
  visualList.children().last().prependTo(visualList);
  visualList.css({ 'left': -visualImgWidth });

  $('#next_btn').on('click', nextSlide);
  $('#prev_btn').on('click', prevSlide);
  
  $('#next_btn').on('click', onStop);
  $('#next_btn').on('mouseleave', onPlay);

  $('#prev_btn').on('click', onStop);
  $('#prev_btn').on('mouseleave', onPlay);
  
  function nextSlide() {
    var currentP = visualList.position().left;
    visualList.stop().animate({ 'left': currentP - visualImgWidth }, 800, function () {
      visualList.children().first().appendTo(visualList);
      visualList.css({ 'left': -visualImgWidth });
    })
  }

  function prevSlide() {
    var currentP = visualList.position().left;
    visualList.stop().animate({ 'left': currentP + visualImgWidth }, 800, function () {
      visualList.children().last().prependTo(visualList);
      visualList.css({ 'left': -visualImgWidth })
    })
  }
  function onStop() {
    clearInterval(timer);
  }

  function onPlay() {
    timer = setInterval(nextSlide, 3000);
  }
});