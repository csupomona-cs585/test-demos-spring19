_satellite.pushBlockingScript(function(event, target, $variables){
  
var adwordsJS = document.createElement('script');
  adwordsJS.src = "https://www.googletagmanager.com/gtag/js?id=AW-1053559611";

document.body.appendChild(adwordsJS);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-1053559611');



});
