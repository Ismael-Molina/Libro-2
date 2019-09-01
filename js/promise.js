//usando then
var promesa = new Promise(function (resolve, reject) {
    resolve(123);
});
promesa.then(function (res) {
    console.log("El resultado de llamada es:", res === 123);
});
promesa["catch"](function (err) {
});
