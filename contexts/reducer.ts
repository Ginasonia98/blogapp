const setPost = (value: any[]) => {
  return {
    type: "SET_POST",
    value,
  };
};

const setLoading = (value: any[]) => {
  return {
    type: "SET_LOADING",
    value,
  };
};

export { setPost, setLoading };
/**Fungsi setPost:
const setPost = (value: any[]) => { ... }: Mendefinisikan fungsi setPost yang menerima parameter value dengan tipe array dari tipe data apa pun.
return { type: "SET_POST", value }: Mengembalikan objek yang memiliki properti type dengan nilai "SET_POST" dan properti value dengan nilai dari parameter value. Objek ini digunakan untuk memberi tahu reducer bahwa aksi yang dilakukan adalah untuk mengatur state posts dalam konteks aplikasi.
Fungsi setLoading:
const setLoading = (value: any[]) => { ... }: Mendefinisikan fungsi setLoading yang menerima parameter value dengan tipe array dari tipe data apa pun.
return { type: "SET_LOADING", value }: Mengembalikan objek yang memiliki properti type dengan nilai "SET_LOADING" dan properti value dengan nilai dari parameter value. Objek ini digunakan untuk memberi tahu reducer bahwa aksi yang dilakukan adalah untuk mengatur state isLoading dalam konteks aplikasi.
Ekspor Fungsi:
export { setPost, setLoading };: Mengekspor fungsi setPost dan setLoading agar dapat diimpor dan digunakan oleh komponen-komponen lain dalam aplikasi untuk memperbarui state dalam konteks aplikasi.
Fungsi-fungsi ini merupakan tindakan yang dilakukan dalam aplikasi. Ketika fungsi-fungsi ini dipanggil dan dikirimkan dengan parameter yang sesuai, objek yang sesuai akan dikembalikan untuk mengkomunikasikan aksi yang dilakukan kepada reducer dalam konteks aplikasi. Aksi-aksi ini bertujuan untuk memperbarui state posts dan isLoading dalam konteks aplikasi sesuai dengan nilai yang diberikan. */