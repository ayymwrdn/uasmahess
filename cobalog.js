function login() {
    // Mendapatkan nilai input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username dan password yang valid (contoh)
    const validUsername = "admin";
    const validPassword = "1111";

    // Mengecek apakah username dan password sesuai
    if (username === validUsername && password === validPassword) {
        window.location.href = "indexbr.html"; // Redirect ke halaman lain
    } else {
        // Menampilkan pesan kesalahan jika login gagal
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = "block";
    }
}