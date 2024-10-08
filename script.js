// Variabel untuk menyimpan angka acak dan jumlah tebakan
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 10;

// Dapatkan elemen-elemen dari HTML
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const guessesLeftSpan = document.getElementById('guessesLeft');
const restartBtn = document.getElementById('restartBtn');

// Fungsi untuk memeriksa tebakan
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    // Validasi input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "1-100 ora luweh ora kurang";
        feedback.className = 'incorrect';
        return;
    }

    // Kurangi jumlah tebakan
    guessesLeft--;

    // Cek apakah tebakan benar
    if (userGuess === secretNumber) {
        feedback.textContent = `Yey pener, angka ne = ${secretNumber}.`;
        feedback.className = 'correct';
        endGame();
    } else if (guessesLeft === 0) {
        feedback.textContent = `Salah. Jane iso po ra? Angka ne seng bener = ${secretNumber}.`;
        feedback.className = 'incorrect';
        endGame();
    } else {
        if (userGuess > secretNumber) {
            feedback.textContent = "Keduwuren";
        } else {
            feedback.textContent = "Keciliken";
        }
        feedback.className = 'incorrect';
    }

    // Update jumlah tebakan yang tersisa
    guessesLeftSpan.textContent = guessesLeft;

    // Kosongkan input setelah setiap tebakan
    guessInput.value = "";
}

// Fungsi untuk mengakhiri permainan
function endGame() {
    // Nonaktifkan input dan tombol
    guessInput.disabled = true;
    guessBtn.disabled = true;

    // Tampilkan tombol restart
    restartBtn.classList.remove('hidden');
}

// Fungsi untuk mereset permainan
function restartGame() {
    // Reset semua variabel dan tampilan
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessesLeft = 10;
    guessesLeftSpan.textContent = guessesLeft;
    feedback.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    restartBtn.classList.add('hidden');
}

// Tambahkan event listener untuk tombol "Guess"
guessBtn.addEventListener('click', checkGuess);

// Tambahkan event listener untuk tombol "Restart"
restartBtn.addEventListener('click', restartGame);
