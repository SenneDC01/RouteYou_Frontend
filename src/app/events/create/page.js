'use client';
import React, { useState } from 'react';
import RouteSelect from '@/components/atoms/route-select/RouteSelect';

export default function Page() {
  const [formValues, setFormValues] = useState({
    routeSelect: '',
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <RouteSelect
        label="Route Selection"
        name="routeSelect"
        placeholder="Select Route..."
        onChange={handleChange}
        errorMessage="Dit veld is verplicht"
      />
    </div>
  );
}
