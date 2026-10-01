console.log("Praktikum Dimulai");

// Aktivitas 1 : DOM selection selekdi DOM
// DOM Selection kita harus "Menangkap Elemen" Sebelum kita manipulasi HTML
// Ambil elemen --> Simpan di dalam variabel Javascript

// 1. Ambil Elemen Judul Berdasarkan ID
// document.getElemenById("...") -> Ambil elemen html spesifik berdasarkan ID
const judulUtama = document.getElementById("judul-utama");

// 2. querySelector("#...")  mengambil ID berdasarkan atribut ID
// Tanda (#) Artinya menargetkan ID (.) Menargetkan atribut ID
// Ambil elemen Sub Judul berdasarkan ID
const subJudul = document.querySelector("#sub-judul");

// 2. Mengambil Elemen Pada Kartu 1 (Kartu Manipulasi Teks & Style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

// 3. Mengmbil tombol aksi pada kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. Mengambil elemen pada karu 2 (fitur catatan dimnamis /  todolist)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan =  document.getElementById("daftar-catatan");
const jumlahCatatan =  document.getElementById("jumlah-catatan");
const pesanKosong =  document.getElementById("pesan-kosong");

// Aktivitas 2 : Manipulasi Teks & Style (Pada Kartu 1)
// addEvenListener("click", function() {...}) -> artinya tolong dengarkan dan tunggu
// setelah di "click" oleh user jalankan perintah di dalam function 

// A. Mengubah warna Teks & preview
btnUbahTeks.addEventListener("click", function(){
    // .innerText = Mengisi/menimpa tulisan teks yang ada di HTML
    teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM";

    // .style.color = Mengubah warna teks secara  langsung melalui Javascript (inline)
    teksPreview.style.color = "#ff3f6f"

    // console.log = Mencetak pesan di console
    console.log("DOM Teks Preview telah diperbaharui");
})

// B. Mengubah warna Background Box Preview
btnToggleWarna.addEventListener("click", function(){
    // .classList.toggle("nama-class") -> menambahkan class jika blum ada, menghapus clas jika sudah ada
    // Jika class tersebut velum ada pada elemen, maka class tersebut akan ditambahka
    // jika class tersebut sudah ada pada elemen maka class tersebut akan di hapus
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM Box Preview telah diperbaharui");
})

// Mengembalikan Teks & warna Teks Preview ke default (Reset)
btnReset.addEventListener("click", function(){
    //Mengembalikan teks previeuw ke default
    teksPreview.inne = "Hallo! Teks ini siap diubah di Javascript";

    // Kosongkan warna agar warna kembali ke default
    teksPreview.style.color = "";

    // Hapus class khusus menggunakan .classList.remove("nama-class")
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM Box Preview telah dikembalikan ke default");
})

// Aktivitas 3 & 4 : Membuat catatan dinamis to do list & menghitung jumlah catatan (pada kartu 2)
// Dibagian ini kita belajar membuat elemen HTML baru (<li>) secara dinamis mengunakan Javascript
// Lalu mengisi teks nya, memberi tombol hapus, lalu menempelkannya ke dalam layar

// Langkah 1 : Membuat variabel untuk menampung jumlah catatan
// 'let' digunakan karena nilainya akan berubah ubah (mutable)
let totalCatatan = 0;

// Langkah 2 : Membuat fungsi untuk menambah catatan baru 
// Fungsi ini adalah kumpulan perintah yang diberi nama, kita bisa mengambilnya kapan pun kita mau
function perbaruiJumlah(){
    //Masukkan angka totalCatatan ke dalam elemen HTML jumlahCatatan
    jumlahCatatan.innerText = totalCatatan;

    // Percabangan Kondisi : Apakah catatannya 0?
    if (totalCatatan === 0) {
        // Jika 0: hapus class "hidden" agar pesan "Tidak ada catatan" muncul
        pesanKosong.classList.remove("hidden");
    } else {
        // Jika > 0: Tambahkan class "hidden" agar pesan "Tidak ada catatan" hilang
        pesanKosong.classList.add("hidden");
    }
}


// Langkah 3 : Membuat fungsi untuk menambahkan catatan baru 
function tambahCatatan(){
    // 3.1 inputCatatan.value -> Mengambil  teks yang diketik user yang di input
    // .trim() -> Menghapus spasi kosong di awal dan akhir teks
    const isiTeks = inputCatatan.value.trim();

    // 3.2 Validasi input : jika variabel isiTeks kosong ("...") maka tampilkan alert
    if (isiTeks === "") {
        alert("Catatan tidak boleh kosong!");
        return; // Hentikan fungsi jika input kosong 
    }

    // 3.3 createElement("li") -> Membuat elemen HTML baru <li> hanya di memory Javascript
    const liBaru = document.createElement("li");
    liBaru.className = " note-item"; // Memberi class agar tampilannya sesuai style css

    // 3.4 Mengisi teks catatan baru dengan cara innetHTML mengisi <li> dengan teks dan tombol hapus
    // Tanda Backtick (`) digunakan agar kita bisa menulis teks multi-baris dan menyisipkan variabel dengn ${variabel}
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class = "btn-hapus">Hapus</button>`;

    // 3.5 Menambahkan Event Listener padda tombol hapus pada item <li>
    // querySelector(".btn-hapus") -> mengambil tombol yang baru dibuat di dalam <li>
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function(){
        // Menghapus <li> dari daftarCatatan  (<ul>)
        liBaru.remove(); // menghapus elemen <li> dari DOM .remove()
        totalCatatan--; // mengurangi jumlah catatan  
        perbaruiJumlah(); // memperbaharui tampilan jumlah ctatan
        console.log(`DOM Catatan "${isiTeks}" telah dihapus`);
    })

    // 3.6 .appendChild(liBaru) -> Menempelkan <li> baru ke dalam <ul> daftarCatatan
    daftarCatatan.appendChild(liBaru);

    //3.7 Mengosongkan input setelah catatan ditambahkan
    inputCatatan.value = "";

    // 3.8 Menambah jumlah catatan dan memperbaharui tampilan jumlah catatan
    totalCatatan++;
    perbaruiJumlah();

    console.log(`DOM Catatan baru ditambahkan : "${isiTeks}"`);

}


// Langkah 4 : Evenet Listener untuk tombol tambah catatan
// Ketika tombol tambah diklik, jallankan fungsi tambahCatatan 
btnTambah.addEventListener("click", function(){
    tambahCatatan();
})


// Langkah 5 : Event Listener untuk menamahkan catatan ketika menekan tombol Enter di input 
inputCatatan.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        tambahCatatan();
    }
})