const getUrl = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/api/menus'
const contenido2 = document.querySelector('.container');

const getPagination = async () => {
    try {

        const res = await fetch(getUrl);
        const data = await res.json();
        console.log(data)
        const fondo = data.fondo;
        const sandwichs = data.sandwichs;
        const postres = data.postres;
        fondo.forEach(e => {
                
                const name = e.name;
                const price = e.price;
                const id = e.id;
                const description = e.description;
                const img= e.img;
    
                const newCard = document.createElement('div');
                newCard.classList.add('card');
                newCard.innerHTML = 
                `
                <img src="${img}" alt="${name}">
    
                <div class="card-content">
                    <h3 class="priceList">$${price}</h3>
                    <h2 class="nameList">${name}</h2>
                    <p>${description}</p>
                </div>  
                `;
            contenido2.appendChild(newCard);
            }
        ),
        fondo.forEach(e => {
                    
                    const name = e.name;
                    const price = e.price;
                    const id = e.id;
                    const description = e.description;
                    const img= e.img;
        
                    const newCard = document.createElement('div');
                    newCard.classList.add('card');
                    newCard.innerHTML = 
                    `
                    <img src="${img}" alt="${name}">
        
                    <div class="card-content">
                        <h3 class="priceList">$${price}</h3>
                        <h2 class="nameList">${name}</h2>
                        <p>${description}</p>
                    </div>  
                    `;
                contenido2.appendChild(newCard);
                }
            ),
            postres.forEach(e => {
                        
                        const name = e.name;
                        const price = e.price;
                        const id = e.id;
                        const description = e.description;
                        const img= e.img;
            
                        const newCard = document.createElement('div');
                        newCard.classList.add('card');
                        newCard.innerHTML = 
                        `
                        <img src="${img}" alt="${name}">
            
                        <div class="card-content">
                            <h3 class="priceList">$${price}</h3>
                            <h2 class="nameList">${name}</h2>
                            <p>${description}</p>
                        </div>  
                        `;
                    contenido2.appendChild(newCard);
                    }
                )
                   sandwichs.forEach(e => {
                        
                        const name = e.name;
                        const price = e.price;
                        const id = e.id;
                        const description = e.description;
                        const img= e.img;
            
                        const newCard = document.createElement('div');
                        newCard.classList.add('card');
                        newCard.innerHTML = 
                        `
                        <img src="${img}" alt="${name}">
            
                        <div class="card-content">
                            <h3 class="priceList">$${price}</h3>
                            <h2 class="nameList">${name}</h2>
                            <p>${description}</p>
                        </div>  
                        `;
                    contenido2.appendChild(newCard);
                    }
                )
    }
    catch (error) {
        console.log(error)
    }
}
getPagination();