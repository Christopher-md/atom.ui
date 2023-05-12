# Radio

> UI `<Radio />` component

## Usage

```tsx
import React from "react";
import Radio from "@components/UI/Radio";

const App = () => {
    const [value, setValue] = useState("Male");

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <Radio
                label="Male"
                value="Male"
                name="gender"
                onChange={onHandleChange}
                checked={input.gender === "Male"}
            />
            <Radio
                name="gender"
                label="Female"
                value="Female"
                onChange={onHandleChange}
                checked={input.gender === "Female"}
            />
        </div>
    )
};

export default App;
```

## Properties

The radio component extends all the input's own HTML attributes and several non-native ones:

| Name           | Type                             | Description                                 |  
|:---------------|:---------------------------------|:--------------------------------------------|  
| label          | `string`                         | Label of the component                      |
| labelPlacement | `top`, `bottom`, `left`, `right` | placement of a label relative to its marker |
