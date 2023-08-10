## Jelaskan pengertian SEO menurut pemahamanmu (html)

- Jawaban
  Html menurut pemahaman saya itu seperti sekumpulan text yang disusun dengan menggunakan rules dan ketentuan tertentu,
  agar dapat di mengerti oleh system / browser dan ditampilan secara benar dan teratur.

## Jelaskan perbedaan antara cookie, sessionStorage dan localStorage!

- Jawaban
  perbedaan dari ketiganya terletak di sisi cara penyimpanan , umur data, dan ruang lingkup data.
  Cookie dikirim melalui server ke client lalu menyimpan data2 di perangkat client,
  sessionStorage menyimpan data langsung di sisi client tetapi hanya pada saat sesi / page tertentu terbuka,
  localStorage menyimpan data yang bersifat key-property pada sisi user , dan akan tetap ada sebelum dihapus.

## Sebutkan perbedaan antara GET dan POST! (general)

- Jawaban
  Perbedaan metode GET dan POST
  Cara Penggunaan , GET digunakan untuk mengambil data dari server dan POST digunakan untuk mengirim data ke server
  Cara Mengirim data ke server, GET dapat mengirim Request Query di dalam url , sedangkan POST dapat mengirim Request Body ke server

## Jelaskan z-index dan bagaimana susunan konteks terbentuk. (css)

- Jawaban
  Element yang di buat menggunakan z-index akan membentuk suatu konteks 'tumpukan' dimana indeks tertinggi ada di posisi yang paling atas,
  [ZINDEX Example](./z-index.css)

## Sebutkan metode untuk menyembunyikan suatu konten secara visual dan membuatnya tersedia hanya untuk pembaca layar / screen reader!

- Jawaban
  Ada beberapa metode untuk mencapai hal ini
  [Visual Hidden](./visual-hidden.css)

## Jelaskan cara kerja this dalam JavaScript!

- Jawaban
  Dalam JavaScript, penggunaan kata kunci this menunjuk pada objek yang sedang menjalankan suatu fungsi pada saat itu. Bagaimana this berperilaku bisa berubah sesuai dengan cara dan lokasi di mana fungsi itu dipanggil. Fungsi dari this adalah untuk memberikan akses ke properti dan metode dari objek yang relevan pada situasi tertentu.
  objek yang diacu oleh this dapat berubah berdasarkan konteks.

## Sebutkan minimal 3 framework js yang kamu ketahui dan berikan nilai kemampuan kamu dalam menggunakan ke 3 framework tersebut.

- Jawaban
  Framework 1 = React saya sangat memahami framework ini untuk front end development , dengan nilai 8/10
  Framework 2 = Express.js saya sangat familiar dan memahami framework express dan sering menggunakan nya sebagai backend server di project2 yang saya kerjakan, dengan nilai 9/10
  Framework 3 = Socket.io framework ini sering saya gunakan untuk membangun peer to peer system pada project tertentu yang saya kerjakan, dengan nilai 5/10
  Framework 4 = Vue.js, dengan nilai 8/10
  Framework 5 = Vite, dengan nilai 8/10
  Framework 6 = Next.js, dengan nilai 6/10

## Jelaskan bagaimana kinerja asynchronous pada javascript, kalau bisa dengan kodingan. (js)

- Jawaban
  [Javascript Async](./javascript-async.js)

## Jelaskan perbedaan SPA dan PWA (general)

- Jawaban
  Single Page Application (SPA) adalah jenis aplikasi web yang bekerja seperti satu halaman saja
  Progressive Web App (PWA) adalah jenis aplikasi web yang berbasis teknologi web modern untuk memberikan pengalaman yang mirip dengan aplikasi kepada user

## Jelaskan dan berikan contoh Promise

- Jawaban
  Promises dalam JavaScript adalah cara untuk mengelola operasi async
  [Javascript Promise](./javascript-promise.js)

## Buatkan hasil dari perintah berikut

- Jawaban
  output: 1000,
  type , string.
  penjelasan , dalam javascript type data int apabila di tambah / + dengan type data string , maka hasilnya akan menjadi string
  cth.
  ```
  let a = 100
  let b = 'buah'
  console.log(a + b)
  output : 100buah
  ```

## Diberikan contoh data sebagai berikut table kiri, lalu ubahlah data tersebut menjadi table kanan

- Jawaban
  [Ubah Data Json](./changeData.js)

## Buatkanlah function untuk mendapatkan suhu hari ini pada derajat celcius menggunakan open api cuaca (ex developer.accuweather)

- Jawaban
  [Get Current Weather Condition](./getWeatherToday.js)

## Buatkanlah kodingan menggunakan javascript, untuk mengisi div dengan class invalid-feedback, pertimbangkan juga jika ada banyak div yang memiliki class invalid-feedback (js)

- Jawaban

  [Fill The Div Class with Invalid Feedback](./Div-Class/fill-div-class.html)

## Jelaskan strategi - strategi caching yang kamu ketahui

- Jawaban
  > Browser Caching - Menyimpan data pada perangkat user dalam jangka waktu tertentu , agar dapat digunakan kembali tanpa melakukan request lagi
  > Caching pada Web Server - Menyimpan copy dari web page , untuk menanggulangi request yang berulang2 dari client pada web yang statis
  > Database Query Caching - menyimpan data sementara di dalam penyimpanan cloud / server , biasa yang saya gunakan redis, untuk merespon request dengan hasil yang sama / statis.
  > Object Caching - untuk menyimpan hasil komputasi yang rumit , dan sering di request.

## Jelaskan bagaimana kerja service-worker pada javascript, berikan contoh kodingan jika kamu pernah menggunakannya

- Jawaban
  Yang pernah saya gunakan,
  untuk Push Notification

```
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
```

# Buatlah sebuah grafik semenarik mungkin, untuk menghitung :

## Berapa banyak sub kategori pada setiap kategorinya(pada kasus di atas, dashboard, energy, building merupakan kategori).

## Berapa banyak total sub kategori setiap sub kategorinya (pada kasus di atas, sub kategori adalah, index, create, delete)

- Jawaban
  [ChartJs](./webChart/index.html)
