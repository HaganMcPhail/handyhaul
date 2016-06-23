
var exampleBtn = $('.down');
exampleBtn.click(function(){
    event.preventDefault();
    var scrollTo = event.currentTarget.id;
    var exampleDestination = document.querySelector('.' + scrollTo);
    smoothScroll(exampleDestination);
});

// IF CLIENT WANTS SLIDE SHOW, ADD PLUGIN!!! DO NOT PUT THIS SLIDESHOW INTO PRODUCTION. ALL HARDCODED!!!

$(document).ready(function(){

  var displaySlide = function(){
    $('.img-viewer').addClass("show");
    $('header').hide();
    $('html, body').css("overflow","hidden");
  }

  var hideSlide = function(){
    $('.img-viewer').removeClass("show");
    $('html, body').css("overflow","scroll");
    $('header').show();
  }

  var getImgNumber = function(_this){
    var imgNumber = $(_this).children()[0].attributes[2].value;
    return imgNumber;
  }

  var getFilename = function (_this) {
    var string = $(_this).children()[0].src;
    var index = string.lastIndexOf("/") + 1;
    var filename = string.substr(index);

    return filename;
  }

  $('#gallery a').on("click", function(){
    event.preventDefault();
    displaySlide();
    $('.img-full').html('<img src="images/compress/' + getFilename(this) + '" alt="Handy Haul" img-number="'+ getImgNumber(this) +'" />');
  });

  $('.img-viewer .close').on("click", function() {
    hideSlide();
  });

  var getCurrentNumber = function() {
    var currentNumber = $('.img-full img')[0].attributes[2].value;

    return currentNumber;
  }

  var getNextFilename = function (imgNumber){
    var string = $('.gallery-container img')[imgNumber].src;
    var index = string.lastIndexOf("/") + 1;
    var filename = string.substr(index);

    return filename;
  }

  $('.img-viewer .right').on("click", function() {
    if (getCurrentNumber() == 24) {
      var imgNumber = 0;
    } else {
        var imgNumber = parseInt(getCurrentNumber(), 10);
    }
    $('.img-full').html('<img src="images/compress/' + getNextFilename(imgNumber) + '" alt="Handy Haul" img-number="'+ (parseInt(imgNumber,10) + 1) +'" />');
  });

  $('.img-viewer .left').on("click", function() {
    if (getCurrentNumber() == 1) {
      var imgNumber = 23;
    } else {
      var imgNumber = parseInt(getCurrentNumber(), 10) - 2;
    }
    $('.img-full').html('<img src="images/compress/' + getNextFilename(imgNumber) + '" alt="Handy Haul" img-number="'+ (parseInt(imgNumber,10) + 1) +'" />');
  });

  $(".navbar a").on("click", function(){
    $('.navbar-collapse').collapse('hide');
  });

});