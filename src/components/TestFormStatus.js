//useformstatus hook


import React from 'react';
import { useFormStatus } from 'react-dom';

async function submitFormData(formData) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000); // Simulate form submission
  });
}

function SimpleForm() {
  const { pending, submit } = useFormStatus();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    await submit(() => submitFormData(formData)); // Ensure correct usage of submit
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default SimpleForm;
