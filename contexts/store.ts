export type PostType = {
  title: string;
  description: string;
  imageUrl: string;
};

export type StoreType = {
  posts: PostType[];
  isLoading: boolean;
};

const store: StoreType = {
  posts: [],
  isLoading: false,
};

export default store;
/**
 *Definisi Tipe Data:

export type PostType = { ... }: Mendefinisikan tipe data PostType yang mewakili struktur postingan. Setiap postingan memiliki properti title dengan tipe string, description dengan tipe string, dan imageUrl dengan tipe string. Tipe data ini digunakan untuk memastikan struktur data yang benar saat menyimpan postingan.
Definisi Tipe Data Store:
export type StoreType = { ... }: Mendefinisikan tipe data StoreType yang mewakili struktur state dalam konteks aplikasi. Setiap state memiliki properti posts dengan tipe array dari PostType yang digunakan untuk menyimpan daftar postingan, dan isLoading dengan tipe boolean yang menunjukkan apakah sedang dalam proses pemuatan data. Tipe data ini digunakan untuk memastikan struktur data yang benar saat menyimpan state dalam konteks aplikasi.
Inisialisasi Store:
const store: StoreType = { ... }: Mendefinisikan variabel store dengan tipe StoreType. Variabel ini berisi objek dengan properti posts yang diinisialisasi sebagai array kosong dan isLoading yang diinisialisasi sebagai false. Variabel ini digunakan sebagai state awal dalam konteks aplikasi.
Ekspor Variabel Store:
export default store;: Mengekspor variabel store sebagai default eksport dari file ini. Variabel ini dapat diimpor dan digunakan oleh komponen lain dalam aplikasi untuk mengakses dan memanipulasi state posts dan isLoading dalam konteks aplikasi.
 */
