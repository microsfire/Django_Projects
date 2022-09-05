import './App.css';
import ListComponet from "./components/ListComponet";
import UserListComponet from "./components/UserListComponet";
import React from "react";

function App() {
  return (
    <div>
      <UserListComponet />
      <ListComponet/>
    </div>
  );
}

export default App;
