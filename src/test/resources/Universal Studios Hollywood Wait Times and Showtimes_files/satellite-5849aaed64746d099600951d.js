_satellite.pushAsyncScript(function(event, target, $variables){
  function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

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
var dtm_child = "";
var dtm_lat = "";
var dtm_deviceID = "";
  dtm_deviceID = getURLParameter('dc_rdid');

if(dtm_deviceID !== null) { if(dtm_deviceID.length > 0){
    dtm_child = 0;
    dtm_lat = 0;
} } else { dtm_deviceID = ""; }
var dcm_pixel = "https://5359410.fls.doubleclick.net/activityi;src=5359410;type=globa0;cat=allpa0;u2="+dtm_url+";u7="+fid_cookie+";dc_lat="+dtm_lat+";dc_rdid="+dtm_deviceID+";tag_for_child_directed_treatment="+dtm_child+";ord="+dtm_rand+"?";

dcIMG.setAttribute('src', dcm_pixel);

dcIMG.setAttribute('height','1');
dcIMG.setAttribute('width','1');
dcIMG.setAttribute('frameborder','0');
dcIMG.setAttribute('style','display:none');
document.body.appendChild(dcIMG);
});
