//usando then
const promesa = new Promise((resolve, reject) => {
    resolve(123);
});
promesa.then((res) => {
    console.log("El resultado de llamada es:",res === 123);
});
promesa.catch((err) => {
 
});