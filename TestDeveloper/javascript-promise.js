// Fungsi untuk memulai blender
function startBlender() {
  console.log("Blender dimulai...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Blender selesai!");
    }, 2000); // Simulasi waktu blender selama 2 detik
  });
}

// Fungsi untuk menambahkan buah ke dalam blender
function addFruitToBlender(fruit) {
  console.log(`Menambahkan ${fruit} ke dalam blender...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${fruit} telah ditambahkan!`);
    }, 1000); // Simulasi waktu penambahan buah selama 1 detik
  });
}

// Fungsi untuk mencampur buah di dalam blender
function blendFruits() {
  console.log("Mencampur buah-buahan...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Buah-buahan telah tercampur!");
    }, 1500); // Simulasi waktu pencampuran selama 1.5 detik
  });
}

// Fungsi untuk mengambil hasil dari blender
function getResult() {
  console.log("Mengambil hasil dari blender...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Minuman sehat siap dinikmati!");
    }, 1000); // Simulasi waktu pengambilan hasil selama 1 detik
  });
}

// Langkah-langkah proses "blender buah" dengan menggunakan Promises
startBlender()
  .then((startMessage) => {
    console.log(startMessage);
    return addFruitToBlender("apel");
  })
  .then((addFruitMessage) => {
    console.log(addFruitMessage);
    return addFruitToBlender("pisang");
  })
  .then((addFruitMessage) => {
    console.log(addFruitMessage);
    return blendFruits();
  })
  .then((blendMessage) => {
    console.log(blendMessage);
    return getResult();
  })
  .then((resultMessage) => {
    console.log(resultMessage);
    console.log("Selamat menikmati minuman sehat!");
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });
