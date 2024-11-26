// Hàm khởi tạo danh sách lớp và hiển thị trên HTML
function displayClassList() {
    // Tạo danh sách lớp với 9 thành viên
    const classList = [
        { hoTen: "Nguyễn Gia Bảo", gioiTinh: "Nam", noiSinh: "Bắc Giang" },
        { hoTen: "Ngô Hoàng Hiệp", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Hoàng Minh Quyết", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Trần Trường Giang", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Bùi Viết Đạt", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Vũ Đức Thắng", gioiTinh: "Nam", noiSinh: "Quảng Ninh" },
        { hoTen: "Nguyễn Đình Đức Thịnh", gioiTinh: "Nam", noiSinh: "Thanh Hóa" },
        { hoTen: "Lưu Đức Anh Dũng", gioiTinh: "Nam", noiSinh: "Hải Dương" },
        { hoTen: "Nguyễn Thị A", gioiTinh: "Nữ", noiSinh: "Hà Tĩnh" }
        
    ];

    // Truy cập phần tử HTML có id là "class-list"
    const classListElement = document.getElementById("class-list");

    // Duyệt qua danh sách lớp và thêm các mục vào HTML
    classList.forEach((student) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${student.hoTen} - Giới tính: ${student.gioiTinh} - Nơi sinh: ${student.noiSinh}`;
        classListElement.appendChild(listItem);
    });
}

// Gọi hàm khi tải trang
displayClassList();