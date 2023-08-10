import { useState } from "react";

import "./App.css";

import BookingForm from "./BookingForm/BookingForm";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <>
        <div className="">
          <BookingForm />
        </div>
      </>
    </Provider>
  );
}

export default App;
