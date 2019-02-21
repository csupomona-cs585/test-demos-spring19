var EZRezG = {};

EZRezG.GDPRConsentCookie = "GDPRConsent"; //Stored locally
EZRezG.GDPRRequiredCookie = "GDPRrequired"; //The required cookie set by Akamai.
EZRezG.GDPR_Box_Header = "This website uses cookies";
EZRezG.GDPR_Box_Contents =
  'WE AND OUR PARTNERS USE COOKIES ON THIS SITE TO IMPROVE OUR SERVICE, PERFORM ANALYTICS, PERSONALIZE ADVERTISING, MEASURE ADVERTISING PERFORMANCE, AND REMEMBER WEBSITE PREFERENCES. BY USING THE SITE, YOU CONSENT TO THESE COOKIES. FOR MORE INFORMATION ON COOKIES INCLUDING HOW TO MANAGE YOUR CONSENT  VISIT OUR <a href= "https://www.nbcuniversal.com/privacy/cookies" id="gdpr-cookie-policy-link" class="gdpr-box-link" target= "_blank">COOKIE POLICY</a>.';
EZRezG.NoCookiesMessage = "This site requires cookies for full functionality.";

EZRezG.localStorageAvailable = function() {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

EZRezG.areCookiesEnabled = function() {
  try {
    var cookieEnabled = navigator.cookieEnabled ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
      document.cookie = "test";
      cookieEnabled = document.cookie.indexOf("test") != -1 ? true : false;
    }
    return cookieEnabled;
  } catch (e) {
    return false;
  }
};

EZRezG.getCookie = function(name) {
  try {
    if (name) name = encodeURIComponent(name);
    var cookie_name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cookie_name) === 0) {
        return c.substring(cookie_name.length, c.length);
      }
    }
    return false;
  } catch (e) {
    console.error("Error in getCookie(): " + e);
    return null;
  }
};

EZRezG.setCookie = function(name, value, expiry_days) {
  try {
    if (name) name = encodeURIComponent(name);
    if (value) value = encodeURIComponent(value);

    var expires = "";
    if (expiry_days) {
      var d = new Date();
      d.setTime(d.getTime() + expiry_days * 24 * 60 * 60 * 1000);
      expires = "expires=" + d.toUTCString();
    }

    var baseDomain = ".universalstudioshollywood.com";
    document.cookie =
      name + "=" + value + ";" + expires + ";path=/" + ";domain=" + baseDomain;
    //document.cookie = name + "=" + value + ";" + expires + ";path=/";
    return EZRezG.getCookie(name);
  } catch (e) {
    console.error("Error in setCookie(): " + e);
    return null;
  }
};

EZRezG.decodeString = function(encodedString) {
  try {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = encodedString;
    return textArea.value;
  } catch (e) {
    console.error("Error in decodeString(): " + e);
    return null;
  }
};

EZRezG.analyticsShow = function() {
  s.linkTrackVars = "events";
  s.linkTrackEvents = "event8";
  s.events = "event8";
  s.tl(this, "o", "gdpr_banner_exists");
};

EZRezG.analyticsContinue = function() {
  s.linkTrackVars = "events";
  s.linkTrackEvents = "event9";
  s.events = "event9";
  s.tl(this, "o", "gdpr_continue_click");
};

EZRezG.analyticsCookiePolicy = function() {
  s.linkTrackVars = "events";
  s.linkTrackEvents = "event10";
  s.events = "event10";
  s.tl(this, "o", "gdpr_cookie_policy_click");
};

EZRezG.showGDPRMessage = function() {
  if (!EZRezG.localStorageAvailable() || !EZRezG.areCookiesEnabled()) {
    //   $('<div class="gdpr-container"><div class="gdpr-box"><p><span class="gdpr-box-header">' + EZRezG.GDPR_Box_Header + '</span><br /><span class="gdpr-box-contents">' + EZRezG.NoCookiesMessage + '</span></p></div></div>').appendTo('body');
    return;
  }

  var required = EZRezG.getCookie(EZRezG.GDPRRequiredCookie);
  if (required)
    if (required == "true") {
      var show = true;
      var consent = EZRezG.getCookie(EZRezG.GDPRConsentCookie);
      if (consent) if (consent == "Y") show = false;
      if (show) {
        EZRezG.analyticsShow();

        $(
          '<div class="gdpr-container"><div class="gdpr-box"><p><span class="gdpr-box-header">' +
            EZRezG.GDPR_Box_Header +
            '</span><br /><span class="gdpr-box-contents">' +
            EZRezG.GDPR_Box_Contents +
            '</span></p><div class="gdpr-box-continue-btn"></div></div></div>'
        ).appendTo("body");

        $(".gdpr-box-continue-btn").on("click", function(e) {
          EZRezG.analyticsContinue();

          e.preventDefault();
          e.stopPropagation();
          EZRezG.setCookie(EZRezG.GDPRConsentCookie, "Y", 20 * 365);
          $(".gdpr-container").hide();
        });

        $("#gdpr-cookie-policy-link").on("click", function(e) {
          EZRezG.analyticsCookiePolicy();
        });
      }
    }
  return;
};

window.onload = function() {
  try {
    EZRezG.showGDPRMessage();
  } catch (e) {
    console.error("Error in showGDPRMessage(): " + e);
  }
}