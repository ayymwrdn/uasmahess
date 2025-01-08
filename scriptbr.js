const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active");
});

   // Fungsi untuk validasi form
   function validateForm() {
    // Ambil elemen input dari form
    var namaTransaksi = document.getElementById('namaTransaksi').value;
    var jumlah = document.getElementById('jumlah').value;
    var kategori = document.getElementById('kategori').value;

    // Periksa apakah semua kolom diisi
    if (namaTransaksi === "" || jumlah === "" || kategori === "") {
        // Tampilkan pesan error jika ada kolom yang kosong
        document.getElementById('error-message').style.display = 'block';
        return false; // Cegah pengiriman form
    } else {
        // Sembunyikan pesan error jika semua kolom diisi
        document.getElementById('error-message').style.display = 'none';
        
        // Panggil fungsi untuk menambah transaksi ke dalam tabel
        addTransactionToTable(namaTransaksi, jumlah, kategori);

        // Reset form setelah transaksi ditambahkan
        document.getElementById('formTransaksi').reset();
        
        return false; // Mencegah form untuk dikirim ke server
    }
}

// Fungsi untuk menambah transaksi ke dalam tabel
function addTransactionToTable(namaTransaksi, jumlah, kategori) {
    var tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];

    // Buat elemen baris (tr)
    var newRow = document.createElement('tr');

    // Buat elemen untuk nama transaksi
    var tdNama = document.createElement('td');
    tdNama.textContent = namaTransaksi;
    newRow.appendChild(tdNama);

    // Buat elemen untuk jumlah buku
    var tdJumlah = document.createElement('td');
    tdJumlah.textContent = jumlah;
    newRow.appendChild(tdJumlah);

    // Buat elemen untuk kategori buku
    var tdKategori = document.createElement('td');
    tdKategori.textContent = kategori;
    newRow.appendChild(tdKategori);

    // Tambahkan baris baru ke dalam tabel
    tableBody.appendChild(newRow);
}

// Fungsi untuk mereset transaksi (menghapus semua data dalam tabel)
function resetTransactions() {
    var tableBody = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Menghapus semua baris di tbody
}