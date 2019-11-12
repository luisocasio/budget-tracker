import React, { useState } from "react";

const EditForm = ({ id, name, budget, updatePurchase, updateEditing }) => {
  const defaultObject = {
    name: name,
    budget: budget
  };

  const [formData, setFormData] = useState(defaultObject);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updatePurchase(id, formData);
    updateEditing(false);
  };

  return (
    <div className='edit-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Item Name:{" "}
          <input
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor='budget'>
          Item Cost:{" "}
          <input
            type='text'
            name='budget'
            id='budget'
            onChange={handleChange}
            value={formData.budget}
          />
        </label>

        <button>Update Purchase</button>
      </form>
    </div>
  );
};

export default EditForm;
