import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";

const initialValues = { username: "", phone_number: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        setData={setData}
        data={data}
        initialValues={initialValues}
        update={update}
        setUpdate={setUpdate}
      />
      <Contacts
        data={data}
        setData={setData}
        setUpdate={setUpdate}
        setInfo={setInfo}
      />
    </div>
  );
}

export default App;
