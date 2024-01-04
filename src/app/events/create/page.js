'use client';
import React, { useState } from 'react';
import DateTimePicker from '@/components/atoms/date-time-picker/DateTimeField';

export default function Page() {
  const [formValues, setFormValues] = useState({ startDate: '' });
  const [errors, setErrors] = useState({ startDate: 'Error' });

  const dateChange = (e) => {
    setFormValues({ ...formValues, [e.name]: e.value });
  };

  return (
    <div>
      <p>{formValues.startDate}</p>
      <DateTimePicker
        label="Start Date"
        name="startDate"
        onChange={dateChange}
        errorMessage={errors.startDate}
      />
    </div>
  );
}
