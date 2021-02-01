// Object seklinde yapilmadigi surece kabul edilmiyor


function Rectangle(a, b) {
    //let perimeter = 2 * (a + b );
    //let area = (a * b);
    return {
        length: a,  //en
        width: b,   //boy
        perimeter: 2*(a+b), //cevre
        area: (a*b),  //alan
    }
}