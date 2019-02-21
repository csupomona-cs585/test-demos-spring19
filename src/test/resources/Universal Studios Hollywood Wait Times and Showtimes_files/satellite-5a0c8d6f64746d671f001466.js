_satellite.pushAsyncScript(function(event, target, $variables){
  $("#homepage-find-your-fun a").on('click', function(){
  s.linkTrackVars='events,eVar87';
  s.linkTrackEvents='event87';
  s.events='event87';
  s.eVar87= $(this, "span:nth-child()").text() + ":" + s.pageName;
  s.tl(this,'o','find_your_fun_cta_clicks');
  //console.log($(this, "span:nth-child()").text());
});
});
