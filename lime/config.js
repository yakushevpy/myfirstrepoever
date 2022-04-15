let projects = {
    'Lime': "lime",
    'Konga': "konga",
    'Mango': "mango",
    "LimeCess": "limecess"
}
let environments = {
    "QAStand": "qastand",
    "QAStand-2": "qastand-2",
    "QAStand-3": "qastand-3"
}

function setEnvironment(projectName, environmentName) {
    let env = `http://cabinet.${projectName}.${environmentName}.lime.local`
    let div = document.getElementById('log');
    div.innerHTML = `<b>Текущее окружение</b><br>${env}`;
    return;
}

function fillSelectors() {
    let projectSelector = document.getElementById('project').options;
    for (let value of Object.values(projects)){
        projectSelector[projectSelector.length] = new Option(value, value);   
    }
    let environmentSelector = document.getElementById('environment').options;
    for (let value of Object.values(environments)){
        environmentSelector[environmentSelector.length] = new Option(value, value);
    }
}



