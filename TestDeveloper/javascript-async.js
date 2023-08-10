const axios = require("axios");

/*
Pada umumnya, JavaScript dieksekusi secara sinkron, yang berarti setiap pernyataan dieksekusi satu per satu dan program menunggu operasi saat ini selesai sebelum melanjutkan ke pernyataan berikutnya.
Namun, ada situasi di mana operasi dapat memakan waktu, seperti mengambil data dari jaringan, membaca atau menulis berkas, atau mengeksekusi kode secara asinkron di luar utas eksekusi utama. Ini dapat menyebabkan program tetap berjalan tanpa harus menunggu operasi tersebut selesai.
Untuk mengatasi ini, JavaScript menyediakan beberapa mekanisme untuk mengelola proses asinkron:
*/

// membuat function async , menggunakan async await
async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1" //variable response akan menunggu proses axios get selesai lalu value dari proses tersebut akan di assign ke response
    );

    console.log("Response:", response.data); // disini kita akan log value dari response yang sudah di assign dari proses async
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

// membuat function async , menggunakan promises

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// <-- menunggu response dari get axios, lalu assign hasil ke param response
// <-- log parameter setelah mendapatkan hasil dari axios get
// <-- log parameter setelah mendapatkan hasil dari axios get
// kode akan di pastikan berjalan sesuai sequence dari promise

// membuat function async , menggunakan callback function
function fetchDataWithCallback(callback) {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error, null);
    });
}

function handleData(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Response:", data);
  }
}

fetchDataWithCallback(handleData);
