const url = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token';
let client = 'dualipa';
let password = 'du4321';


fetch( url , {
    method: 'POST',
    body: JSON.stringify({
        client_id: client,
        client_secret: password,
        audience: "https://escalab.academy",
        grant_type: "client_credentials"
       }),
    headers:{
        'Content-type': 'application/json'
    }
}).then(response => response.json(),
)
.then(data => console.log(`Token_type: ${data.token_type}  Access_token: ${data.access_token}`))
.catch(err => console.log(err))

