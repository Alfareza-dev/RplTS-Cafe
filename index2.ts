interface Book {
  id: number
  judul: string
  kategori: string
  harga: number
  stok: number
}

const books: Book[] = [
  { id: 1, judul: "TS dasar", kategori: "Pemrograman", harga: 150_000, stok: 10 },
  { id: 2, judul: "NestJs Lanjutan", kategori: "Web", harga: 200_000, stok: 5 },
  { id: 3, judul: "Data Structure", kategori: "Ilmu Komputer", harga: 180_000, stok: 8 }
]

// 1. Daftar buku berdasarkan kategori
function byCategory(kategori: string): Book[] {
  return books.filter((b) => b.kategori === kategori)
}

console.log("1. Buku kategori Web:")
console.log(byCategory("Web"))
console.log("----------------------------------")

// 2. Total nilai gudang (stok * harga per buku)
let totalGudang = books.map((b) => b.stok * b.harga)
console.log("2. Total nilai tiap buku (stok x harga):")
console.log(totalGudang)
console.log("----------------------------------")

// 3. Tambahkan stok untuk buku dengan stok terbesar
let maxStok = books.reduce((max, b) => (b.stok > max.stok ? b : max))
maxStok.stok += 10
console.log("3. Buku dengan stok terbesar setelah ditambah:")
console.log(maxStok)
console.log("----------------------------------")

// 4. Konversi ke format ringkas
let ringkas = books.map(
  (b) => `${b.judul} — Rp${b.harga} (Stok: ${b.stok})`
)
console.log("4. Format ringkas semua buku:")
console.log(ringkas)
console.log("----------------------------------")

// 5. Menampilkan semua judul buku
console.log("5. Semua judul buku:")
books.forEach((b) => console.log(b.judul))
console.log("----------------------------------")
