function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    
    let reuslt = arr2.slice();
  
    reuslt.splice(n,0,...arr1);
  
    return reuslt;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);