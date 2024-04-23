import path from "path";
import express from "express";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Konfigurasi middleware untuk melayani file statis dari direktori 'public'
const mantap = express();

mantap.use(
  "/images",
  express.static(path.join(__dirname, "public/images"))
);

export default mantap;

// Tambahkan rute lainnya di sini
// ...
