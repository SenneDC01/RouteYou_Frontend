'use client';
import React, { useState } from 'react';
import TextArea from '@/components/atoms/text-area/TextArea';

export default function Page() {
  const [formValues, setFormValues] = useState({ description: '' });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>{formValues.description}</p>
      <TextArea
        label="Description"
        name="description"
        placeholder="Describe your event here..."
        onChange={handleChange}
        errorMessage=""
      />
    </div>
  );
}
