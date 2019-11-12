import React, { useState } from "react";

const ItemForm = ({ addPurchase }) => {
  const defaultObject = { name: "", budget: "" };

  const [formData, setFormData] = useState(defaultObject);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPurchase(formData);
    setFormData(defaultObject);
  };

  return (
    <div className='add-form'>
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

        <button>Add Purchase</button>
      </form>
    </div>
  );
};

export default ItemForm;
