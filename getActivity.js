const domain = decodeURIComponent(window.location.search.match(/domain=(.*?)(&|$)/)[1]);
const showDomain = Boolean(Number(decodeURIComponent(window.location.search.match(/showDomain=(.*?)(&|$)/)[1])));
document.getElementById("domain").innerText = domain;
if (showDomain) {
    document.getElementById("domain").className = "";
}
fetch("https://" + domain + "/api/v1/instance/activity", {
    method: "GET"
}).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error();
    }
}).then(function (json) {
    let d = new Date(parseInt(json[0]["week"]) * 1000);
    let date = d.getMonth() + 1 + "/" + d.getDate();
    document.getElementById("week").innerText = "(" + date + "~)";
    document.getElementById("toot").innerText = json[0]["statuses"];
    document.getElementById("login").innerText = json[0]["logins"];
    document.getElementById("new").innerText = json[0]["registrations"];
}).catch(function (error) {
    document.getElementById("ok").className = "invisible";
    document.getElementById("ng").className = "";
});