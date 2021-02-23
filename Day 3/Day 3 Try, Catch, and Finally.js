function reverseString(s) {
    try{
        let arr = s.split("");
        arr.reverse();
        s = arr.join("");
    }
    catch(e){
        console.log(e.message);
    }finally{
        console.log(s);
    }
}
