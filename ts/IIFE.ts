class point {
    x: number;
    y: number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    add(point: point){
        return new point(this.x + point.x,this.y + point.y);
    }
}
class point3d extends point{
    z: number;
    constructor(x:number,y:number,z:number){
        super(x,y);
        this.z = z;
    }
    add(point: point3d){
        var point2d = super.add(point);
        return new point3d(point2d.x,point2d.y,this.z + point.z);
    }
}