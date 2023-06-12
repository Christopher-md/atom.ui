# Date

> UI `<Date />` component

## Usage

```tsx
import React from "react";
import Date from "@/components/UI/Date";

const App = () => {
    const [input, setInput] = useState("29.07.2000");

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    
    return (
        <Date
            name="date"
            label="Date"
            value={input}
            placeholder="dd.mm.yyyy"
            onChange={onHandleChange}
        />
    );
}

export default App;
```

## Properties

The date component extends all the input's own HTML attributes, NumberFormatProps form `react-number-format` library and several non-native ones:

| Name      | Type                | Description                                                                                 |  
|:----------|:--------------------|:--------------------------------------------------------------------------------------------|  
| label     | `string`            | Label of the component                                                                      |
| fullWidth | `boolean`           | If it is in the true state, then its width will be equal to 100%                            |
| error     | `string`, `boolean` | It can take both a boolean value and a string. Can be used to display if the field is valid |
