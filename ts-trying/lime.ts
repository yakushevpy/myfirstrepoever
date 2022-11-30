export {}

let Urls = {
    env_url: 'https://adm-ru-lime-pyakushev.te.lime.local/RU_Lime_PYakushev',
    username: 'admin',
    password: 'Password123',
}

let request = {
    url: `${Urls.env_url}/SecurityTokenService/identity/connect/token`,
    method: 'POST',
    header: {
            'content-type': 'application/x-www-form-urlencoded'
    },
    body: {
        mode: 'urlencoded',
        urlencoded: `grant_type=password&scope=openid offline_access AdminApiScope&username=${Urls.username}&password=${Urls.password}&client_id=AdminAPI&client_secret=secretPassword`
    }
}

let responce = fetch(request.url)
    .then(res => console.log(res))
