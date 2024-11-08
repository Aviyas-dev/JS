const n= 5;
let stars="";
for(k = 0; k<n; k++){
    let i = 0;
  
    while (i < k + 1) {
         stars = stars + "* ";
        i++;
     }
     stars = stars + "\n";
 }
console.log(stars);



for(k = 0; k<n; k++){
    let i = 0;
  for(j = 0; j < n - k- 1; j++){
    stars = stars + " ";
  }
    while (i < k + 1) {
        if (i==0 || i==k ){
            stars = stars + "* ";
        }
       else { stars = stars + "  ";}
        i++;
    }
    stars = stars + "\n";
}
for(k = 0; k<n; k++){
    let i = 0;
  for(j = 0; j < n - k- 1; j++){
    stars = stars + " ";
  }
    while (i < k + 1) {
        if (i==0 || i==k ){
            stars = stars + "* ";
        }
       else { stars = stars + "  ";}
        i++;
    }
    stars = stars + "\n";
}
console.log(stars);
