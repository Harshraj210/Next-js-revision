
"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');

  return (
    <form>
      <label>Your Email:</label>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}