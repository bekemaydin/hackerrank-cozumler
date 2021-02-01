// sitede kod yazilan alanda degistirilemeyen alanda yazilmis kodlar
// yuzunden kendi kodlarimin bir kismini calistiramadim
// class icindeki perimeter kismini disaridan uydurdum

let x, y, z
class Polygon{
    constructor(x) {
        this.x = x; // x = kenarlar
        //this.y = y;
        //this.z = z;
        //this.k = k;
        //this.l = l;
    }
    //triangle.perimeter() = (x + y + z);
    perimeter() {
        var sum = 0;
        for(var i=0;i< this.x.length; i++){
            sum = sum + this.x[i];
        }
        return sum;
    }
}

let triangle = new Polygon([x, y, z]);

// triangle.perimeter() = (x + y + z);
//console.log(triangle.perimeter);
