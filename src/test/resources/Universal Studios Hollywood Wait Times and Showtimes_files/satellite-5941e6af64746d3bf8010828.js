_satellite.pushAsyncScript(function(event, target, $variables){
  function trackSliderImpression(slideIndex) {
  // custom event code for slider impression here.
var currentSlideTitle = $('div.home-carousel-cms.slick-slider slick-slide[index=' + slideIndex + '] a').attr('href');
var indexNumber = slideIndex + 1;
  s.linkTrackVars='events,eVar49';
  s.eVar49=s.pageName+':'+indexNumber+':'+currentSlideTitle
  s.linkTrackEvents='event40';
  s.events='event40';
  
  _satellite.setVar('scLinkTrackVars', s.linkTrackVars);
  _satellite.setVar('scLinkTrackEvents', s.linkTrackEvents);
  _satellite.setVar('scEvents', s.events);
  
  s.tl(this,'o','ush_slideImpression');
}

$('div.home-carousel-cms.slick-slider').on('afterChange', function(event,slick, currentSlide) { 
  trackSliderImpression(currentSlide); 
});

// First slide
//setTimeout(trackSliderImpression(0), 500);

});
