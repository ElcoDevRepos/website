"use client";

import React, { useState } from 'react';
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  // State for storing form input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // State for submission feedback
  const [message, setMessage] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform client-side validation if necessary
    //
    // URL for the API route (to be implemented on your server)
    const apiURL = 'https://connect.mailerlite.com/api/subscribers';

    // Post data to the API route
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2VhMjdhOTJiNDJlMmYxNDEyY2UzNmYyNzhlZTUyMDgxYTE3YTRjYzg3NWMzMzBjZDJkZWNlMjkxMmM0MzEzNTNiYjQ3MzlhNDEyYThkM2QiLCJpYXQiOjE3MDc4NjE2NjUuNjQ3NDQzLCJuYmYiOjE3MDc4NjE2NjUuNjQ3NDQ2LCJleHAiOjQ4NjM1MzUyNjUuNjQzMzEsInN1YiI6IjgxNTA1MiIsInNjb3BlcyI6W119.iTvf9L06B1mwczxzweykHgv258VMO0Ka2yiFnPx7ts-tljrROi3F8KVa9-9q-OrkgSBk41nM4UOnAin45OpJ9x-_1YwwIQz_HUVG-A-sjPIZyqO50cYrADk77loFw6c2aDCXSvPHBoqy-4E7GiNZZgtbxazktJCKKhNkHdxTouNmvV-idl6raiuC7gr02KKCDApoYnH7Rsn4k-UuvaOL7MSU0geQNrnOhWr8KJKR18X5FRfStiKG1xJMt05CBkE-FkJdaRhJM4RdddojQ0L7PbQyRHeKDspE0ADsPjL8MGke550jg6bsigFxMrqj-qQhtpjpIwo0UIrytChomlRErEGLQ_sYo6M63qSHvvbrKhkpxdfe5sU4YvS9sJjMGeUzVB14SJAFixH9_aLmepjSQYoBZOTmGFmA_s9iDaY88soJFJUWOYRae4myDP885ZpjtnjZ2kzr1K44uVOh194W3cI_BCtF6o82GTp4BMARJZ0-FYraGRAUioicfbdWrYS3aIRducHj7Fn2aRiUZ5P-KkShPftIPmoep3G-z-hMXkZ85_pKzk3MiCYGancucGqYbpsfJ4TZViszT_ER1hzQ5MwwMPQCZmB0kOsDXNR4i9HIlvOg77bFSF1YxJa8zmPLP7wlGuXv5S5WF-blftFzwD15YXCwm1FC8dASF48Rxmw'
        },
        body: JSON.stringify(
          {
            email,
            fields: {
              name
            },
            groups: [
              "111812671042488110"
            ]
          }
        ),
      });

      const data = await response.json();

      if (data.data) {
        setMessage('Thank you for subscribing!');
        // Reset form fields
        setName('');
        setEmail('');
      } else {
        setMessage('There was a problem with your subscription.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Error submitting form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".2s">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Want to hear more about us? Subscribe to our newsletter below.
      </p>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
        />
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
          No spam, guaranteed.
        </p>
        {message && <p className="text-center font-semibold">{message}</p>}
      </div>
      {/* Your SVG code remains unchanged */}
    </form>
  );
};

export default NewsLatterBox;
