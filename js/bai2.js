function calculateRectangleArea() {
    let a = Number(prompt("Nhập chiều dài: "));
    let b = Number(prompt("Nhập chiều rộng: "));
    let S = a*b;
    document.write("Diện tích hình chữ nhật là: " + S);
    
}

function calculateTriangleArea() {
    let a = Number(prompt("Nhập cạnh a: "));
    let b = Number(prompt("Nhập cạnh b: "));
    let c = Number(prompt("Nhập cạnh c: "));
    let p = 0.5 * (a + b + c);
    document.write("Diện tích hình tam giác là: " + Math.sqrt(p * (p-a) * (p-b) *(p-c)));
}

function calculateSquareArea() {
    let a = Number(prompt("Nhập cạnh của hình vuông: "));
    document.write("Diện tích hình vuông là: " + a*a);
}