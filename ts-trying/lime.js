"use strict";
exports.__esModule = true;
var Urls = {
    env_url: 'https://adm-ru-lime-pyakushev.te.lime.local/RU_Lime_PYakushev',
    username: 'admin',
    password: 'Password123'
};
var request = {
    url: "".concat(Urls.env_url, "/SecurityTokenService/identity/connect/token"),
    method: 'POST',
    header: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    body: {
        mode: 'urlencoded',
        urlencoded: "grant_type=password&scope=openid offline_access AdminApiScope&username=".concat(Urls.username, "&password=").concat(Urls.password, "&client_id=AdminAPI&client_secret=secretPassword")
    }
};
var responce = fetch(request.url)
    .then(function (res) { return console.log(res); });
