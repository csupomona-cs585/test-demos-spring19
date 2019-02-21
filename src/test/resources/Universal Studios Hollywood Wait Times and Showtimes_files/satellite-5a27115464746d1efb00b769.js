_satellite.pushAsyncScript(function(event, target, $variables){
  $('#offerings-carousel0 a').on('click', function(){
  var sliderTitle = $(this).parent().parent().find('.offerings-carousel-dynamic-lead-title').text();
  var sliderIndex = $('#offerings-carousel0').slick('slickCurrentSlide');
  var sliderHeader = $(this).parent().parent().parent().parent().parent().parent().find('.find-your-fun-sub-headings').text().trim();
  s.linkTrackVars='events,eVar91';
  s.linkTrackEvents='event92';
  s.events='event92';
  s.eVar91= sliderHeader + '|' + sliderIndex + '|' + sliderTitle;
  s.tl(this,'o','find_your_fun_carousel_clicks');
  //console.log(sliderHeader + '|' + sliderIndex + '|' + sliderTitle);
})

$('#offerings-carousel1 a').on('click', function(){
  var sliderTitle = $(this).parent().parent().find('.offerings-carousel-dynamic-lead-title').text();
  var sliderIndex = $('#offerings-carousel1').slick('slickCurrentSlide');
  var sliderHeader = $(this).parent().parent().parent().parent().parent().parent().find('.find-your-fun-sub-headings').text().trim();
  s.linkTrackVars='events,eVar91';
  s.linkTrackEvents='event92';
  s.events='event92';
  s.eVar91= sliderHeader + '|' + sliderIndex + '|' + sliderTitle;
  s.tl(this,'o','find_your_fun_carousel_clicks');
  //console.log(sliderHeader + '|' + sliderIndex + '|' + sliderTitle);
})

$('#offerings-carousel2 a').on('click', function(){
  var sliderTitle = $(this).parent().parent().find('.offerings-carousel-dynamic-lead-title').text();
  var sliderIndex = $('#offerings-carousel2').slick('slickCurrentSlide');
  var sliderHeader = $(this).parent().parent().parent().parent().parent().parent().find('.find-your-fun-sub-headings').text().trim();
  s.linkTrackVars='events,eVar91';
  s.linkTrackEvents='event92';
  s.events='event92';
  s.eVar91= sliderHeader + '|' + sliderIndex + '|' + sliderTitle;
  s.tl(this,'o','find_your_fun_carousel_clicks');
  //console.log(sliderHeader + '|' + sliderIndex + '|' + sliderTitle);
})

$('#offerings-carousel3 a').on('click', function(){
  var sliderTitle = $(this).parent().parent().find('.offerings-carousel-dynamic-lead-title').text();
  var sliderIndex = $('#offerings-carousel3').slick('slickCurrentSlide');
  var sliderHeader = $(this).parent().parent().parent().parent().parent().parent().find('.find-your-fun-sub-headings').text().trim();
  s.linkTrackVars='events,eVar91';
  s.linkTrackEvents='event92';
  s.events='event92';
  s.eVar91= sliderHeader + '|' + sliderIndex + '|' + sliderTitle;
  s.tl(this,'o','find_your_fun_carousel_clicks');
  //console.log(sliderHeader + '|' + sliderIndex + '|' + sliderTitle);
})

$('#offerings-carousel4 a').on('click', function(){
  var sliderTitle = $(this).parent().parent().find('.offerings-carousel-dynamic-lead-title').text();
  var sliderIndex = $('#offerings-carousel4').slick('slickCurrentSlide');
  var sliderHeader = $(this).parent().parent().parent().parent().parent().parent().find('.find-your-fun-sub-headings').text().trim();
  s.linkTrackVars='events,eVar91';
  s.linkTrackEvents='event92';
  s.events='event92';
  s.eVar91= sliderHeader + '|' + sliderIndex + '|' + sliderTitle;
  s.tl(this,'o','find_your_fun_carousel_clicks');
  //console.log(sliderHeader + '|' + sliderIndex + '|' + sliderTitle);
})
});
