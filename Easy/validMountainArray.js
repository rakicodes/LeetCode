var validMountainArray = function(arr) {
    if (arr.length<=2) return false;
    
    let prev=arr[0];
    let peak = false; 
    
    for (let i=1; i<arr.length; i++) {
        let curr = arr[i];
        
        // not increasing
        if (prev===curr) {
            return false;
        }
        
        // reached peak and peak can't be the first val
        if (prev>curr && i>1) {
            peak=true;
        }
        
        // before peak, curr decreases
        // after peak, curr increases
        if ((prev<curr && peak) || (prev>curr && !peak)) {
            return false;
        }
        
        prev = curr;
        curr = arr[i];
    
    }
    
    // check if no peak
    return peak;
    
};