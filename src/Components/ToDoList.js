import React, { useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import './Style/TodoStyle.css';
import PopUpTodo from './TODOPopUp';

function ToDoList() {
  const [items, setItems] = useState([
    {
      id: 1,
      Topic: "Gaming",
      Checked: true,
      Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore sapiente omnis quod minima porro asperiores expedita aliquid illo vel vitae quia officia ab natus doloribus qui praesentium alias perferendis"
    },
    {
      id: 2,
      Topic: "Reading",
      Checked: false,
      Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore sapiente omnis quod minima porro asperiores expedita aliquid illo vel vitae quia officia ab natus doloribus qui praesentium alias perferendis"
    }
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newItem, setNewItem] = useState({ Topic: '', Content: '' });
  const [currentId, setCurrentId] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        Topic: newItem.Topic,
        Checked: false,
        Content: newItem.Content
      }
    ]);
    setNewItem({ Topic: '', Content: '' });
    togglePopup();
  };

  const handleUpdateItem = () => {
    setItems(items.map(item => 
      item.id === currentId ? { ...item, Topic: newItem.Topic, Content: newItem.Content } : item
    ));
      setNewItem({ Topic: '', Content: '' });
    setIsUpdate(false);
    setCurrentId(null);
    togglePopup();
  };

  const handleEditItem = (id) => {
   // const itemToEdit = items.find(item => item.id === id);
   // setNewItem({ Topic: itemToEdit.Topic, Content: itemToEdit.Content });
    setCurrentId(id);
    setIsUpdate(true);
    togglePopup();
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <header>ToDoList</header>
      <div className={showPopup ? 'blur' : ''}>
        <div className="todo-container">
          <ul className="todo-list">
            {items.map(item => (
              <li key={item.id} className="todo-item">
                <div className="todo-item-content">
                  <h2>{item.Topic}</h2>
                  <p>{item.Content}</p>
                </div>
                <div className="icons">
                  <MdDelete onClick={() => handleDeleteItem(item.id)} className="icon" />
                  <MdEdit onClick={() => handleEditItem(item.id)} className="icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button id="RoundButton" onClick={togglePopup}><b>Add</b></button>
      </div>
      {showPopup && (
        <PopUpTodo
          onClose={togglePopup}
          onAdd={handleAddItem}
          onUpdate={handleUpdateItem}
          newItem={newItem}
          setNewItem={setNewItem}
          isUpdate={isUpdate}
        />
      )}
      <footer>CopyRights 2024</footer>
    </>
  );
}

export default ToDoList;
