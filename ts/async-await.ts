async function foo(){
    try {
        var val = await getMePromise();
        console.log(val);
    } catch (error) {
        console.log("Error: ", err.message);
    }
}