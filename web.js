// Lấy nút và phần tử chứa nội dung
const changeTextButton = document.getElementById('changeTextButton');
const newContent = document.getElementById('newContent');

// Hàm thay đổi nội dung khi nhấn nút
changeTextButton.addEventListener('click', () => {
    // Thay đổi nội dung
    newContent.textContent = 'Chúc mừng! Bạn đã thay đổi nội dung của trang web.';
    
    // Hiển thị hiệu ứng fade-in cho nội dung
    newContent.classList.add('show');
});
