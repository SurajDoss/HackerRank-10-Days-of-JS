function sides(literals, ...expressions) {
    let a = expressions[0];
    let p = expressions[1];
    
    var tot = [];
    
    var s1 = (p+Math.sqrt(Math.pow(p, 2) - 16 * a))/4;
    var s2 = (p-Math.sqrt(Math.pow(p, 2) - 16 * a))/4; 
    
    tot.push(s1);
    tot.push(s2);
    tot.sort();
    return tot;
    
}
