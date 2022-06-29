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

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {itemList.map((item, i) => {
        return <Note key={i} title={item.title} content={item.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
