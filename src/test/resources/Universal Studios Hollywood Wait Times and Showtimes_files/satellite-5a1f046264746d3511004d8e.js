_satellite.pushAsyncScript(function(event, target, $variables){
  $('.attractions a').on('click', function(){
  var attractionClick = $(this).find('.attraction-title').text();
  s.linkTrackVars='events,eVar90';
  s.linkTrackEvents='event90';
  s.events='event90';
  s.eVar90= attractionClick;
  s.tl(this,'o','content_pages_popup_cta_click');
  //console.log(attractionClick);
})
});
