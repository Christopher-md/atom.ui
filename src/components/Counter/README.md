# Counter

> UI `<Counter />` component

## Usage

```tsx
import React, { useState } from "react";

import Counter from "@/components/Counter";

const App = () => {
    const [count, setCount] = useState(0);
    
    return (
        <Counter
            count={count}
            className="counter"
            onChange={(number) => setCount(number)}
        />
    );
}

export default App;
```

## Properties

| Name      | Type                      | Description                                         |  
|:----------|:--------------------------|:----------------------------------------------------|  
| count     | `number`                  | Date display format                                 |
| onChange  | `(value: number) => void` | The function is called every time the value changes |
| className | `string`                  | Prop for defining and changing styles               |
