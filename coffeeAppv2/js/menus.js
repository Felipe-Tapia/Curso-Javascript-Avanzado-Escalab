const getUrl = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/api/menus'
const contenido = document.querySelector('.entradas');
const platosDeFondo = document.querySelector('.platosDeFondo');
const paraBeber = document.querySelector('.paraBeber');

const getPagination = async () => {
    try {
        const dataLimpia = {};
        //function to remove all "-" from a object
        const removeDashes = (obj) => {
            Object.keys(obj).forEach(key => {
                dataLimpia[key.replace(/-/g, '')] = obj[key];
            });
            return dataLimpia;
        }

    
        const res = await fetch(getUrl);
        const data = await res.json();
        removeDashes(data)
        const entradas = dataLimpia.entradas;
        const platos = dataLimpia.fondo;
        const bebidas = dataLimpia.jugosbebidas;       
        const postres = dataLimpia.postres;
        const ensaladas = dataLimpia.ensaladas;
        const sandwichs = dataLimpia.sandwichs;
        const agregados = dataLimpia.agregados;
                    let countPlatos = 0;
                    let countBebidas = 0;
        entradas.forEach(e => {

            const name = e.name;
            const price = e.price;
            const id = e.id;
            const description = e.description;
            const img= e.img;

            const newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML = 
            `
            <div class="card-content">
                <h3 class="priceList">$${price}</h3>
                <h2 class="nameList">${name}</h2>
                <p>${description}</p>
            </div>  
            `;
           contenido.appendChild(newCard);
        }

        );
        platos.forEach(e => {
            if (countPlatos >= 3){
                return;
            }
            const name = e.name;
            const price = e.price;
            const id = e.id;
            const description = e.description;
            const img= e.img;

            const newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML = 
            `
            <div class="card-content">
                <h3 class="priceList">$${price}</h3>
                <h2 class="nameList">${name}</h2>
                <p>${description}</p>
            </div>  
            `;
            platosDeFondo.appendChild(newCard);
            countPlatos+=1;
        }
        );  
        bebidas.forEach(e => {
             if (countBebidas >= 3){
                return;
            }
            const name = e.name;
            const price = e.price;
            const id = e.id;
            const description = e.description;
            const img= e.img;

            const newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.innerHTML = 
             `
            <div class="card-content">
                <h3 class="priceList">$${price}</h3>
                <h2 class="nameList">${name}</h2>
                <p>${description}</p>
            </div>  
            `;
            paraBeber.appendChild(newCard);
            countBebidas+=1;
        }
        );

  
        

        // const numeroDeCategorias = Object.values(data).length;              
        // for (let i = 0; i < numeroDeCategorias; i++) {
        //     const categoria = Object.values(data)[i];
        //     const div = document.createElement('div');
        //     div.classList.add('categoria');
        //     div.innerHTML = `
        //     <h2>${categoria}</h2>
        //     <div class="entradas-categoria">
        //     </div>
        //     `;
        //     entradas.appendChild(div);
        // }


    } catch (error) {
        console.log(error);
    }

    }
    getPagination();
    //function to create the cards
//