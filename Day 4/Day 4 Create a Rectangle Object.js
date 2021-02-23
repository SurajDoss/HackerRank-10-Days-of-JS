function Rectangle(a, b) {
    let perimeter, area;
    area = a * b;
    perimeter = 2 * (a + b)
    this.length =  a;
    this.width =  b;
    this.perimeter = perimeter;
    this.area = area;
}
