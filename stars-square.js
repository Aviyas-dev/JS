
const n= 5;
let stars="";
for (k = 0; k<n; k++){
    let i = 0;
    while (i<n) {
        stars = stars + "* ";
        i++;
    }
    stars = stars + "\n";
}
console.log(stars);
