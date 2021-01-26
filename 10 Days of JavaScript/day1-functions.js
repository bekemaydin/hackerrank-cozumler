var f = [];
function factorial(n){
    if ( n==0 || n == 1)
        return 1;
    if ( f[n] > 1)
        return n;
    return f[n] = factorial(n-1) * n;
}