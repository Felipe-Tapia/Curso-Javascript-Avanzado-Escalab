




    const submitButton = document.querySelector('.submitBtn');
    submitButton.addEventListener('click', e => {
        e.preventDefault();
        dataInputs();
    })


export function dataInputs(){
    const nameUser = document.querySelector('.usuario').value;
    const passUser = document.querySelector('.password').value;
    console.log(  nameUser,passUser, 'datos formulario');

// const client = document.querySelector('.usuario').value;
// const loginBtn = document.querySelector('.submitBtn');

// loginBtn.addEventListener('click', e => {console.log('hola')})


const url = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token';
// let client = 'dualipa';
// let password = 'du4321';


fetch( url , {
    method: 'POST',
    body: JSON.stringify({
        client_id: nameUser,
        client_secret: passUser,
        audience: "https://escalab.academy",
        grant_type: "client_credentials"
       }),
    headers:{
        'Content-type': 'application/json',
        'Authorization': 'Basic ' + btoa(nameUser + ':' + passUser)
    }
}).then(response => response.json(),
)
.then(data => {console.log(`Token_type: ${data.token_type}  Access_token: ${data.access_token}`)
let token = data.access_token
if (token == undefined) {
    alert('cuidaito');
}else{
   //window.location.replace('./pedidos.html');
    getOrders(token);
}
})

// .then(data => {const token = data.access_token
// const payload = token.split('.')[1];
// const decoded = JSON.parse(atob(payload));
// console.log(decoded);
// }

.catch(err => console.log(err)) // error handling
}
const getUrl = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/api/orders'


export const getOrders = async (token) => {
    try {
        console.log(token)
        const res = await fetch(getUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
                //adds the info obtained in the div contenido
                const newCard = document.createElement('div');
                newCard.classList.add('card');
                newCard.innerHTML =
                `
                <div class="card-content">
                    <h3 class="priceList">${data[i].id}</h3>    
                    <h2 class="nameList">${data[i].table}</h2>  
                    <p>${data[i].created_at}</p>
                    <p>${data[i].waiter}</p>
                    <p>${data[i].order[i].product}</p>
                    <p>${data[i].order[i].quantity}</p>
                </div>
                `;
                const contenido = document.querySelector('.contenido');
                contenido.appendChild(newCard);

        }


    } catch (error) {
   console.log(error) }
}




