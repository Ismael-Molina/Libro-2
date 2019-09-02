//cadena de promesas
Promise.reject(new Error("Algo malo sucedio"))
    .then((res)=>{
        console.log(res);
        return 456;
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.message);
        return Promise.resolve(123);
    });