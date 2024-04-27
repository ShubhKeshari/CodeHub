import { useState } from 'react'

function useFormData(initialState) {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted form data',formData);
  };
  return {
    formData,
    handleChange,
    handleSubmit
  };
};

export default useFormData;
