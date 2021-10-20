function pow(x,n){
    return x ** n;
}

function minus(x,y) {
    return x-y;
}



async function fetching_name(x) {
    let url = 'https://rickandmortyapi.com/api/character/' + x
    const response = await fetch(url);
    const resp = await response.json();    
    return resp.name;
}


async function fetching_gender(x) {
    let url = 'https://rickandmortyapi.com/api/character/' + x
    const response = await fetch(url);
    const resp = await response.json();    
    return resp.gender;
}



