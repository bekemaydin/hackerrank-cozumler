const PI = Math.PI  //pi icin ozel bir method var js icinde. burada bu soru icin bu methodu kullanmam gerekiyordu
function main() {
    let r = readLine();
    let area = PI * (r**2)
    console.log(area);
    let perimeter = (2 * PI * (r))
    console.log(perimeter);