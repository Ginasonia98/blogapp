import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const inputBorderColor = isInputFocused ? "border-blue-500" : "border-gray-300";

  return (
    <div className="flex justify-center items-center">
      <div className={`relative ${inputBorderColor}`}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchValue}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="px-4 py-2 pr-8 border rounded-3xl w-full sm:w-auto sm:max-w-md  focus:outline-none"
          style={{ width: "370px" }}
        />
        <FaSearch
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
/**
 *Tipe Props:
type SearchBarProps = { onSearch: (keyword: string) => void; };: Mendefinisikan tipe Props untuk komponen SearchBar. Props ini memiliki satu properti yaitu onSearch yang merupakan fungsi yang menerima sebuah string sebagai argumen dan tidak mengembalikan nilai.
Definisi Komponen SearchBar:
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => { ... }: Mendefinisikan komponen SearchBar sebagai fungsi komponen fungsional yang menerima Props dengan tipe SearchBarProps. Props ini akan diterima sebagai argumen dalam fungsi komponen ini.
State dan Penanganan Perubahan Input:
const [searchValue, setSearchValue] = useState("");: Membuat state searchValue dengan nilai awal kosong. Fungsi useState mengembalikan array dengan dua elemen, yaitu nilai state dan fungsi untuk mengubah nilai state.
const [isInputFocused, setIsInputFocused] = useState(false);: Membuat state isInputFocused dengan nilai awal false. State ini akan digunakan untuk menentukan apakah input sedang dalam fokus atau tidak.
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { ... }: Membuat fungsi untuk menangani perubahan pada input. Fungsi ini akan mengubah nilai searchValue sesuai dengan nilai input yang dimasukkan pengguna.
const handleInputFocus = () => { ... }: Membuat fungsi untuk menangani saat input mendapatkan fokus. Fungsi ini mengubah nilai isInputFocused menjadi true.
const handleInputBlur = () => { ... }: Membuat fungsi untuk menangani saat input kehilangan fokus. Fungsi ini mengubah nilai isInputFocused menjadi false.
const inputBorderColor = isInputFocused ? "border-blue-500" : "border-gray-300";: Membuat variabel inputBorderColor yang bergantung pada nilai isInputFocused. Jika input dalam fokus, maka warna border akan menjadi "border-blue-500", jika tidak dalam fokus, maka warna border akan menjadi "border-gray-300".
Return Komponen:
<div className="flex justify-center items-center"> ... </div>: Menggunakan elemen div dengan class "flex justify-center items-center" sebagai wadah utama komponen SearchBar.
<div className={relative ${inputBorderColor}}> ... </div>: Menggunakan elemen div dengan class "relative" dan class "inputBorderColor" yang bergantung pada nilai state isInputFocused. Ini digunakan untuk membuat wadah untuk input dan ikon search.
<input ... />: Menggunakan elemen input untuk menampilkan input teks. Beberapa properti dan event handler yang digunakan di antaranya:
value={searchValue}: Mengatur nilai input menjadi nilai dari state searchValue.
onChange={handleChange}: Menetapkan fungsi handleChange sebagai penangan perubahan input yang akan memperbarui nilai searchValue.
onFocus={handleInputFocus}: Menetapkan fungsi handleInputFocus sebagai penangan saat input mendapatkan fokus.
onBlur={handleInputBlur}: Menetapkan fungsi handleInputBlur sebagai penangan saat input kehilangan fokus.
className="px-4 py-2 pr-8 border rounded-3xl w-full sm:w-auto sm:max-w-md focus:outline-none": Menetapkan beberapa class CSS untuk mengatur tampilan input.
style={{ width: "370px" }}: Menetapkan properti style inline untuk mengatur lebar input menjadi 370px.
<FaSearch ... />: Menggunakan komponen FaSearch dari 'react-icons/fa' untuk menampilkan ikon search. Beberapa properti dan event handler yang digunakan di antaranya:
className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer": Menetapkan beberapa class CSS untuk mengatur tampilan ikon search.
onClick={handleSearch}: Menetapkan fungsi handleSearch sebagai penangan saat ikon search diklik.
 */






