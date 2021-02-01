// 1 ile baslayip 5 ile bitecek
// her bir x degeri kendi ve x+1 degeri ile islem yapacak


function getCount(objects) {
    var ctr = 0;
    for(var i=0; i<objects.length; i++){
      if(objects[i].x == objects[i].y) {
        ctr++;
      }
    }
    return ctr;
}