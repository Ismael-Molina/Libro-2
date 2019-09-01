function rest(primero, sergundo) {
    var lodemas = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        lodemas[_i - 2] = arguments[_i];
    }
    console.log(lodemas);
}
rest("hola", "mundo");
rest("ho", "la", "mun", "do", "cruel");
