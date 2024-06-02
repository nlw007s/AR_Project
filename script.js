document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.getElementById('continueButton').classList.remove('hidden');
    }, 3000); // 3 detik
});

function continueToNextPage() {
    // Lakukan tindakan yang diinginkan ketika tombol diklik
    // Misalnya, arahkan ke halaman lain:
    window.location.href = "main.html";
}

