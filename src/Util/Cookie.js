function SetCookie(cookieName, cookieData) {
  var date = new Date();
  date.setDate(date.getDate() + 7);
    
  document.cookie = `${cookieName} = ${cookieData}; expires=${date.toUTCString()};path=/`;
}

function GetCookie(cookieName) {
  let getCookie = document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`);
  if (getCookie)
    return getCookie[2];
}

export {SetCookie, GetCookie}