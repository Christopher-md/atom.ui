# Number

> UI `<Number />` component

## Usage

```tsx
import React from "react";
import Number from "@/components/UI/Number";

const App = () => {
    const [input, setInput] = useState({
        phone: undefined,
        number: undefined,
    });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInput((prev) => ({ ...prev, [name]: value }));
    };
    
    return (
        <div>
            <Number
                name="number"
                label="Number"
                value={input.number}
                onChange={onHandleChange}
            />
            <Number
                name="phone"
                value={input.phone}
                label="Phone number"
                onChange={onHandleChange}
                format="+373 (###) #####"
                placeholder="+373 (###) #####"
            />
        </div>
    );
}

export default App;
```

## Properties

The number component extends all the input's own HTML attributes, NumberFormatProps form `react-number-format` library and several non-native ones:

| Name      | Type                | Description                                                                                 |  
|:----------|:--------------------|:--------------------------------------------------------------------------------------------|  
| label     | `string`            | Label of the component                                                                      |
| fullWidth | `boolean`           | If it is in the true state, then its width will be equal to 100%                            |
| error     | `string`, `boolean` | It can take both a boolean value and a string. Can be used to display if the field is valid |
