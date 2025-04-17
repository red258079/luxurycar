function changeImage(thumb, imagePath) {
    document.getElementById('mainCarImage').src = imagePath;
    document.querySelectorAll('.thumbnails img').forEach(img => img.classList.remove('active'));
    thumb.classList.add('active');
}
function openModal() {
    document.getElementById("priceModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("priceModal").style.display = "none";
}
window.onclick = function (event) {
    const modal = document.getElementById("priceModal");
    if (event.target === modal) closeModal();
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);


    fetch("https://getform.io/f/adrnlpoa", {
        method: "POST",
        body: data
    })
        .then(response => {
            if (response.ok) {
                form.reset();
                document.getElementById("formResponse").style.display = "block";
            } else {
                alert("Gửi không thành công. Vui lòng thử lại sau.");
            }
        })
        .catch(error => {
            alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
            console.error(error);
        });
});


