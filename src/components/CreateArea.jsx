import React, {useState} from "react";

function CreateArea(props) {
  const [newItem, setNewItem] = useState({
    title: "",
    content: ""
  });

  function handleInputField(event) {
    const {name, value} = event.target;

    setNewItem((preItem) => {
      return {
        ...preItem,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleInputField} name="title" placeholder="Title" value={newItem.title} />
        <textarea onChange={handleInputField} name="content" placeholder="Take a note..." rows="3" value={newItem.content} />
        <button onClick={(event) => {
          props.addItem(newItem);
          setNewItem({
            title: "",
            content: ""
          });
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
