function collatz(n) {
    //your code here
    let count = 1 ;
    while ( n > 1 ) {
        count ++ ;
        n % 2 == 0? n = n/2: n = n * 3 + 1;
    }

    return count;
}

  console.log(collatz(15));