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

async function product_creating(ClientId) {
    let env = 'https://adm-ru-lime-qastand-3.te.lime.local/RU_Lime_QAStand-3-ApiTest'
    let method = '/TestApiService/api/Product/CreateShortTerm_ProductCreatedEvent'
    let url = env + method
    let postbody = `
        {
            "ContractNumber": "123456789",   // Номер продукта
            "Created": "2021-10-08T07:23:28.7364546",     // Дата
            "ClientId": 1631959,                  // ID клиента
            "Amount": 600006,
            "Currency": "810",
            "Period": 14,
            "Percent": 0.60,
            "Factor": 0,
            "PrivilegeType": 2,
            "PaymentWay": 2,
            "PaymentWayCommissionPercent": 0.00,
            "CanProlong": true,
            "InsurancePolicy": {
              "ContractNumber": "LM70155-32325466",            // "LM70155-0000003" - КЗ /  "6097-0000000" - ДЗ
              "Period": 1,
              "Amount": 675.00,
              "CostCoefficient": 3.3,
              "TermCostCoefficient": 15.00,
              "Insurer": "InsRESO"                            // СТРАХОВКА ("InsRESO" РЕСО-КЗ / "InsRGS" РГС-ДЗ)
            },
            "PaymentSourceId": null,
            "ReductionFactorId": 14,                          // 14 если акция  или id промокода
            "OfferId": 464,
            "MessageId": "6c91bfbc-dbf4-4070-a1f1-77cbc13ff73f",
            "CreatedOn": "2021-07-09T07:23:29.6227404",
            "Context": {
              "ServiceUuid": "Prd",
              "TransactionUuid": "cfcce520-ef0d-4d4a-a965-4c55c0323ab1",
              "CorrelationUuid": "758cea8c-4bdc-442e-8c24-f9e675f40388",
              "UserUuid": "aacdb2c7-8e4a-45ae-a910-bcf7052df744",
              "ClientId": null,
              "Conversation": [
                {
                  "ServiceUuid": "Api-Client",
                  "Channel": 3,
                  "TransactionUuid": "00000000-0000-0000-0000-000000000000"
                },
                {
                  "ServiceUuid": "Prd",
                  "Channel": 1,
                  "TransactionUuid": "cfcce520-ef0d-4d4a-a965-4c55c0323ab1"
                }
              ],
              "TraceInfo": {}
            }
          `
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            
        },
        body: JSON.stringify(postbody)
    })
}

