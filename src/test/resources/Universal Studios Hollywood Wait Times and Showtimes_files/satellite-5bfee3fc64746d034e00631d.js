_satellite.pushAsyncScript(function(event, target, $variables){
  $("#EZRezSubSection2 a").on("click", function() {
  var linkClicked = $(this).attr("href");
  if (linkClicked.indexOf("EVE") != -1) {
    s.linkTrackVars = "eVar16,prop16";
    s.prop16 = "storePage|EVE products toggle";
    s.eVar16 = "storePage|EVE products toggle";
    s.tl(this, "o", "site_navigation_click");
  } else {
    s.linkTrackVars = "eVar16,prop16";
    s.prop16 = "storePage|DEFAULT products toggle";
    s.eVar16 = "storePage|DEFAULT products toggle";
    s.tl(this, "o", "site_navigation_click");
  }
});

$("#EZRezSubSection1 a").on("click", function() {
  var linkClicked = $(this).attr("href");
  if (linkClicked.indexOf("EVE") != -1) {
    s.linkTrackVars = "eVar16,prop16";
    s.prop16 = "storePage|EVE products toggle";
    s.eVar16 = "storePage|EVE products toggle";
    s.tl(this, "o", "site_navigation_click");
  } else {
    s.linkTrackVars = "eVar16,prop16";
    s.prop16 = "storePage|DEFAULT products toggle";
    s.eVar16 = "storePage|DEFAULT products toggle";
    s.tl(this, "o", "site_navigation_click");
  }
});
                                                                                                   
});
