const domain = getParam("domain");
const showDomain = Boolean(Number(getParam("showDomain")));
const theme = getParam("theme");

document.getElementById("domain").innerText = domain;

if (showDomain) {
  // Remove .invisible
  document.getElementById("domain").className = "";
}

switch (theme) {
  case "light":
    document.querySelector("body").classList.add("light");
    break;
  case "dark":
  default:
    document.querySelector("body").classList.add("dark");
    break;
}

fetch("https://" + domain + "/api/v1/instance/activity", {
  method: "GET"
})
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
  .then(function(json) {
    let d = new Date(parseInt(json[0]["week"]) * 1000);
    let date = d.getMonth() + 1 + "/" + d.getDate();
    document.getElementById("week").innerText = "(" + date + "~)";
    document.getElementById("toot").innerText = Number(json[0]["statuses"]).toLocaleString();
    document.getElementById("login").innerText = Number(json[0]["logins"]).toLocaleString();
    document.getElementById("new").innerText = Number(json[0]["registrations"]).toLocaleString();
  })
  .catch(function(error) {
    document.getElementById("ok").className = "invisible";
    document.getElementById("ng").className = "";
  });

function getParam(key) {
  let regExpString = key + "=(.*?)(&|$)";
  let regExp = new RegExp(regExpString);
  if (window.location.search.match(regExp)) {
    return window.location.search.match(regExp)[1];
  } else {
    return null;
  }
}
