

const getPagination = async () => {
    try {
        const res = await fetch(`https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/api/menus`);
        const data = await res.json();
        console.log(data.entradas.map(e => newFunction(e)))
    }catch (error) {
        console.log(error)
    }

    function newFunction(e) {
        return console.log(e);
    }
    
}
getPagination()
