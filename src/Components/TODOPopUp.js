import React from 'react';
import './Style/TodoStyle.css';

function PopUpTodo({ onClose, onAdd, onUpdate, newItem, setNewItem, isUpdate }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(e.target);
   // console.log(id+"-"+value);

    setNewItem({ ...newItem, [id]: value });
  };

  return (
    <>
      <div className="PopUp">
        <h2>{isUpdate ? 'Update Item' : 'Add New Item'}</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="Topic"
                  placeholder="Enter Title"
                  value={newItem.Topic}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  id="Content"
                  placeholder="Enter Content"
                  value={newItem.Content}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={onClose} id="cancel-book">Close</button>
        {isUpdate ? (
          <button onClick={onUpdate} id="add-book">Update</button>
        ) : (
          <button onClick={onAdd} id="add-book">Add</button>
        )}
      </div>
    </>
  );
}

export default PopUpTodo;