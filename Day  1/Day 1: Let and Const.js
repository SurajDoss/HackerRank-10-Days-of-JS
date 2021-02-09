
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var rad = readLine();
    
    // Print the area of the circle:
    const PI = Math.PI;
    let areaCircle = PI * (rad * rad);
    console.log(areaCircle);
        
    // Print the perimeter of the circle:
    
    let perimeterCircle;
    
    perimeterCircle = 2 * PI* rad;
    
    console.log(perimeterCircle);

