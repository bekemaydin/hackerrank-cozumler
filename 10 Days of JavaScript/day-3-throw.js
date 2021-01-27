// if else ile olmuyor. throw kullanmak icin tek her biri icin
// ayri if kosulu kullanmak gerek


function isPositive(a) {
    if ( a === 0) {
        throw Error('Zero Error');
    } 
    if ( a < 0) {
        throw Error('Negative Error');
    }
    return 'YES';
}