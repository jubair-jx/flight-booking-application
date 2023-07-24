import { useState } from "react";

import "./App.css";

import BookingForm from "./BookingForm/BookingForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="banners">
        <BookingForm />
      </div>
    </>
  );
}

export default App;
