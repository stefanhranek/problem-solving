function bonAppetit(bill, k, b) {
  // console.log(bill, k, b)
  let bActual = 0;
  let bCharged = b;
  let difference;
  bill.forEach(price => (bActual += price));
  bActual = (bActual - bill[k]) / 2;
  // console.log(bActual);
  difference = bCharged - bActual;
  bCharged === bActual 
  ? console.log("Bon Appetit") 
  : console.log(difference);
}
 