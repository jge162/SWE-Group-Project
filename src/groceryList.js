import React, { useState } from 'react';
import groceryUtils from './grocery';
import GroceryItem from './groceryItem';

function GroceryList() {
  const generateId = () => new Date().getTime();

  const [groceryList, setGroceryList] = useState(groceryUtils.get());
  const [item, setItem] = useState({ id: generateId(), name: '', quantity: null, price: null, total: null });

  const deleteHandler = (id) => {
    groceryUtils.remove(id);
    setGroceryList(groceryUtils.get());
  };

  const removeOneHandler = (id, quantity) => {
    groceryUtils.removeOne(id, quantity);
    setGroceryList(groceryUtils.get());
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (item.name && item.name.trim()) {
      groceryUtils.createOrUpdate(item.id, item.name.trim(), item.quantity, item.price, item.total);
      setItem({ id: generateId(), name: '', quantity: null, price: null, total: null});
      setGroceryList(groceryUtils.get());
    }
  };

  const clearList = () => {
    groceryUtils.clear();
    setGroceryList(groceryUtils.get());
    document.location.reload();
  };

  return (
    <div>
      <section className="section-center">
        <form className="grocery-form" onSubmit={addHandler}>
          <div className="form-control">
            <input type="text"
              id="grocery"
              placeholder="e.g. bread"
              value={item.name}
              onChange={() => setItem({id: item.id, name: "", quantity: null, price: null, total: null})} />
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
        </form>
        <div className={`grocery-container ${groceryList.length ? 'show-container' : ''}`}>
          {groceryList.map((listItem) =>
            <GroceryItem
              key={listItem.id}
              id={listItem.id}
              quantity={listItem.quantity}
              name={listItem.name}
              price={listItem.price}
              total={listItem.total}
              remoneOne={removeOneHandler}
              delete={deleteHandler}
            />
          )}
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      </section>
    </div >
  );
}

export default GroceryList;