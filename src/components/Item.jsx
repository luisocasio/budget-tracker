import React, { useState } from "react";
import EditForm from "./EditForm";

const Item = ({ id, name, budget, removePurchase, updatePurchase }) => {
  const [editing, setEditing] = useState(false);

  const updateEditing = value => {
    setEditing(value);
  };

  return (
    <div className="item-container">
      {editing && (
        <EditForm
          id={id}
          name={name}
          budget={budget}
          updatePurchase={updatePurchase}
          updateEditing={updateEditing}
        />
      )}

      {!editing && (
        <>
          <h2>{name}</h2>
          <h2>${budget}</h2>

          <div className="editItem" onClick={() => updateEditing(true)}>
            Edit
          </div>
          <div className="deleteItem" onClick={() => removePurchase(id)}>
            X
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
