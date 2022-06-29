import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [itemList, setItemList] = useState([]);

  function addItem(item) {
    setItemList((preItemList) => {
      return [...preItemList, item];
    });
  }

  function deleteItem(id) {
    setItemList((preItemList) => {
      return preItemList.filter((item, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {itemList.map((item, i) => {
        return <Note key={i} id={i} title={item.title} content={item.content} deleteItem={deleteItem} />
      })}
      <Footer />
    </div>
  );
}

export default App;
