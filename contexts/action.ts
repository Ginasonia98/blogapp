import { StoreType } from "./store";

const action = (
  state: StoreType,
  action: { type: string; value: any }
): StoreType => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, posts: action.value };
    case "SET_LOADING":
      return { ...state, isLoading: action.value };
    default:
      return state;
  }
};

export default action;

/**
 *Definisi Reducer:

const action = (state: StoreType, action: { type: string; value: any }): StoreType => { ... }: Mendefinisikan fungsi reducer dengan nama action. Fungsi ini menerima dua parameter, state yang merupakan state saat ini dalam konteks aplikasi dan action yang merupakan objek yang berisi properti type dan value yang menjelaskan aksi yang akan dilakukan terhadap state.
switch (action.type) { ... }: Menggunakan pernyataan switch untuk memilih aksi yang akan dilakukan berdasarkan nilai action.type.
case "SET_POST": ...: Jika action.type adalah "SET_POST", maka fungsi reducer akan mengembalikan objek baru dengan menggunakan spread operator (...state) untuk menjaga tetap ada semua properti dalam state saat ini, kemudian memperbarui properti posts dengan nilai dari action.value. Ini akan menggantikan nilai posts dalam state dengan nilai yang baru.
case "SET_LOADING": ...: Jika action.type adalah "SET_LOADING", maka fungsi reducer akan mengembalikan objek baru dengan menggunakan spread operator (...state) untuk menjaga tetap ada semua properti dalam state saat ini, kemudian memperbarui properti isLoading dengan nilai dari action.value. Ini akan menggantikan nilai isLoading dalam state dengan nilai yang baru.
default: return state;: Jika action.type tidak cocok dengan kasus yang ditentukan, maka fungsi reducer akan mengembalikan state saat ini tanpa melakukan perubahan.
Ekspor Reducer:
export default action;: Mengekspor fungsi reducer action sebagai default eksport dari file ini. Reducer ini dapat diimpor dan digunakan dalam konteks aplikasi untuk mengubah state berdasarkan aksi yang diterima.
Fungsi reducer ini bertanggung jawab untuk mengubah state dalam konteks aplikasi berdasarkan aksi yang diterima. Dengan menggunakan pernyataan switch, reducer mengecek nilai action.type dan melakukan tindakan yang sesuai untuk memperbarui state. Reducer ini memastikan bahwa perubahan state yang konsisten dan sesuai dengan tipe data yang telah ditentukan dalam tipe data StoreType.
 */
