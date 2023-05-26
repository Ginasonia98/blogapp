import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

export default ContactForm;

