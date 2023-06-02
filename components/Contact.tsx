import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  /**const [name, setName] = useState('');: Membuat state name yang akan menyimpan nilai inputan nama dari pengguna. Inisialisasi awal dengan string kosong.
const [email, setEmail] = useState('');: Membuat state email yang akan menyimpan nilai inputan email dari pengguna. Inisialisasi awal dengan string kosong.
const [message, setMessage] = useState('');: Membuat state message yang akan menyimpan nilai inputan pesan dari pengguna. Inisialisasi awal dengan string kosong.
const [isValid, setIsValid] = useState(false);: Membuat state isValid yang akan menentukan apakah semua inputan valid atau tidak. Inisialisasi awal dengan nilai false. */

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**Fungsi ini akan dipanggil ketika formulir dikirim.
e.preventDefault();: Mencegah perilaku default dari formulir, yaitu pengiriman HTTP POST. */

    if (isValid) {
      emailjs
        .sendForm(
          "service_lqrzbjh",
          "template_ekbweka",
          e.currentTarget,
          "NEWyaFSwozlZwDspo"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Your message has been sent successfully!');
            window.location.reload();
          },
          (error) => {
            console.log(error.text);
            alert('An error occurred, please try again later.');
          }
        );
    } else {
      alert('Please fill in all required fields with valid information.');
    }
  };
  /**Jika isValid bernilai true, maka semua inputan dianggap valid.
emailjs.sendForm(...): Mengirim formulir menggunakan fungsi sendForm dari pustaka emailjs dengan parameter yang diperlukan seperti ID layanan, ID template email, elemen formulir yang akan dikirim (e.currentTarget), dan user ID.
.then(...): Menangani hasil pengiriman email yang sukses dengan mencetak pesan ke konsol, menampilkan pesan berhasil kepada pengguna, dan memuat ulang halaman.
.catch(...): Menangani kesalahan dalam pengiriman email dengan mencetak pesan error ke konsol dan menampilkan pesan kesalahan kepada pengguna.
Jika isValid bernilai false, maka setidaknya satu atau lebih inputan tidak valid.
Menampilkan pesan kesalahan kepada pengguna untuk mengisi semua inputan yang diperlukan dengan informasi yang valid. */

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;

    if (name === 'user_name') {
      setIsValid(value.trim() !== '');
    } else if (name === 'user_email') {
      setIsValid(/^\S+@\S+\.\S+$/.test(value));
    } else {
      setIsValid(value.trim() !== '');
    }

    if (name === 'user_name') {
      setName(value);
    } else if (name === 'user_email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };
  /**
   *Fungsi handleInputChange:
Fungsi ini akan dipanggil ketika ada perubahan pada inputan nama, email, atau pesan.
Mendapatkan nilai dan nama inputan yang berubah.
Kondisional:
Jika name adalah "user_name", maka validasi dilakukan dengan memeriksa apakah nilai tidak kosong (value.trim() !== '').
Jika name adalah "user_email", maka validasi dilakukan dengan menggunakan ekspresi reguler untuk memeriksa apakah nilai memiliki format email yang valid (/^\S+@\S+\.\S+$/.test(value)).
Jika tidak, validasi dilakukan dengan memeriksa apakah nilai tidak kosong (value.trim() !== '').
Memperbarui nilai isValid berdasarkan hasil validasi.
Memperbarui state name, email, atau message sesuai dengan nama inputan yang berubah.
   */

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className='text-center font-bold text-xl'>Contact Us</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="user_email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              name="user_message"
              rows={4}
              value={message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Send"
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
/**
 *Mendefinisikan tampilan formulir kontak dengan menggunakan class CSS dan elemen HTML.
Melampirkan fungsi sendEmail pada event onSubmit formulir untuk mengirimkan formulir saat tombol "Submit" diklik.
Menggunakan state name, email, dan message untuk mengisi nilai inputan dan memperbarui state ketika inputan berubah.
Menggunakan state isValid untuk menentukan apakah tombol "Submit" harus dinonaktifkan atau tidak, tergantung pada validasi inputan.
Menampilkan pesan kesalahan jika inputan tidak valid.
Menampilkan tombol "Submit" yang hanya dapat diklik jika semua inputan valid.
 */

export default ContactForm;

