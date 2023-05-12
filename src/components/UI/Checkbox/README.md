# Checkbox

> UI `<Checkbox />` component

## Usage

```tsx
import React from "react";
import Checkbox from "@/components/UI/Checkbox";

const App = () => {
    const [cars, setCars] = useState({
        mercedes: false,
        volkswagen: true,
    });

    const onHandleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setCars((prev) => ({ ...prev, [name]: checked }));
    };
    
    return (
        <div>
            <Checkbox
                name="volkswagen"
                label="Volkswagen"
                onChange={onHandleCheck}
                checked={cars.volkswagen}
            />
            <Checkbox
                name="mercedes"
                label="Mercedes"
                checked={cars.mercedes}
                onChange={onHandleCheck}
            />
        </div>
    )
}

export default App;
```

## Properties

The checkbox extends all the input's own HTML attributes and several non-native ones:

| Name           | Type                             | Description                                 |  
|:---------------|:---------------------------------|:--------------------------------------------|  
| label          | `string`                         | Label of the component                      |
| labelPlacement | `top`, `bottom`, `left`, `right` | placement of a label relative to its marker |
