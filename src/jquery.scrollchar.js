(function($){
  var defaultOptions = {
    "speed" : 1000,
    "stand" : "",
    "step1" : "",
    "step2" : "",
    "target" : ""
  }

  var stepIndex = 0;

  var settings = defaultOptions;

  $.fn.scrollchar = function(options){
  settings = $.extend(defaultOptions, options);
  $(settings.target).attr("src", settings.stand);
  alternateSteps();
  jQuery(window).scroll(function(event){
      clearTimeout($.data(this, 'stopTimer'));
      toggleStep(settings, stepIndex);
      $.data(this, 'stopTimer', setTimeout(function(){
            $(settings.target).attr("src", settings.stand);
            }, settings.speed));
      return this;
      })
  };

  function alternateSteps(){
    setTimeout(function(){
      if(stepIndex == 1000){
        stepIndex = 0;
      }
      stepIndex++;
      alternateSteps();
    }, settings.speed);
  }

  function toggleStep(opts){
    if(stepIndex % 2 == 0){
      $(opts.target).attr("src", opts.step2);
    }else{
      $(opts.target).attr("src", opts.step1);
    }
  }
}(jQuery));
