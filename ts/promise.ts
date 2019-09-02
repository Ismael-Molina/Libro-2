//promesas en paralelo
function loadItem(id: number): Promise<{id: number}> {
    return new Promise((resolve)=>{
        console.log("cargando item", id);
        setTimeout(()=>{
            resolve({id: id});
        },1000);
    });
}
//cadena (serie)
let item1,item2;
loadItem(1)
    .then((res)=>{
        item1 = res;
        return loadItem(2);
    })
    .then((res)=>{
        item2 = res;
        console.log("hecho");
    });
    Promise.all([loadItem(1),loadItem(2)])
        .then((res)=>{
            [item1,item2]=res;
            console.log("hecho");
        });