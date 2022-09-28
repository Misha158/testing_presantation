import "antd/dist/antd.css";
import { Button, Input, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className="App"
      style={{ width: "600px", margin: "0 auto", padding: "15px" }}
    >
      <Select
        style={{ width: 120 }}
        onChange={(event) => {
          setSelectValue(event);
        }}
        placeholder={"Select"}
        data-testid="select"
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Input
        placeholder="Input component"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        type="primary"
        disabled={!inputValue || !selectValue}
        onClick={() => setMessage(`${inputValue} ${selectValue} `)}
      >
        Save
      </Button>

      <div>{message}</div>
    </div>
  );
}

export default App;
