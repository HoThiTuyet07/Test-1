function sum() {
    let a = document.getElementById("soa").value;
    let b = document.getElementById("sob").value;
    let result = parseFloat(a) + parseFloat(b);
    document.getElementById("kq").innerHTML = `Kết quả: ${result}`;
    
}
sum();