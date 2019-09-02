class inicio {
    private text: string;
    constructor (text: string){
        this.text = text;
    }
    public principal(): number{
        console.log(this.text);
        return 0;
    }
}
let s = new inicio("hola m undo");
s.principal();
