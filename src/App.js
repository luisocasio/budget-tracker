import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import "./App.css";

import Item from "./components/Item";
import ItemForm from "./components/ItemForm";

function App() {
  const [purchases, setPurchases] = useState();
  const [total, setTotal] = useState(0);

  const addPurchase = purchase => {
    axiosWithAuth
      .post("/api/accounts/", purchase)
      .then(res => {
        console.log(`Response: ${res.data}`);

        const newPurchase = { id: res.data, ...purchase };
        setPurchases([newPurchase, ...purchases]);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  };

  const updatePurchase = (id, update) => {
    axiosWithAuth
      .put(`/api/accounts/${id}`, update)
      .then(res => {
        console.log(res);
        setPurchases(
          purchases.map(purchase => {
            if (purchase.id === id) {
              return update;
            } else {
              return purchase;
            }
          })
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  const removePurchase = id => {
    axiosWithAuth
      .delete(`/api/accounts/${id}`)
      .then(res => {
        setPurchases(purchases.filter(purchase => purchase.id !== id));
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    // Handle initial fetch of data here.
    axiosWithAuth
      .get("/api/accounts/")
      .then(res => {
        console.log(res.data);
        setPurchases(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (purchases) {
      setTotal(purchases.reduce((acc, cur) => acc + Number(cur.budget), 0));
    }
  }, [purchases]);

  if (!purchases) {
    return <h1>Fetching data..</h1>;
  }

  return (
    <div className='App'>
      <div className='logo'>
        <h1>Budget Tracker</h1>
      </div>

      <ItemForm addPurchase={addPurchase} />
      {purchases.map((purchase, index) => {
        return (
          <Item
            key={index}
            {...purchase}
            removePurchase={removePurchase}
            updatePurchase={updatePurchase}
          />
        );
      })}

      <h2 className='total'>Budget Costs ${total}</h2>
    </div>
  );
}

export default App;
