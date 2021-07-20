function subSum(array, start, end) {
    
    if(Array.isArray(array) == false){return NaN};
    if (start < 0) {start = 0; };
    if(end>array.length - 1){end =array.length - 1 };
    //if(array.length = 0){return 0};

    return array
    .slice(start, end + 1)
    .map(Number)
    .reduce((a, x) => a + x, 0);
    
}