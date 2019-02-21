_satellite.pushAsyncScript(function(event, target, $variables){
  function getCookieValue(key) {
  var cookies = document.cookie.split('; ');
  for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
    if (decode(parts.shift()) === key) {
      return decode(parts.join('='));
    }
  }
  return null;
}

function decode(s) {
  return decodeURIComponent(s.replace(/\+/g, ' '));
}
var fid_cookie=getCookieValue("s_fid");
var dcIMG = document.createElement('img');
var dtm_url = _satellite.getVar('global_documentURL');
var dtm_rand = _satellite.getVar('global_Random');


var dcm_pixel = "https://5359410.fls.doubleclick.net/activityi;src=5359410;type=globa0;cat=viewe0;u2="+ dtm_url +";u7="+ fid_cookie +";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+ dtm_rand +"?";

dcIMG.setAttribute('src', dcm_pixel);

dcIMG.setAttribute('height','0');
dcIMG.setAttribute('width','0');
dcIMG.setAttribute('frameborder','0');
dcIMG.setAttribute('style','display:none');
document.body.appendChild(dcIMG);

});
