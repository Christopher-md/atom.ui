# Badge

> UI `<Badge />` component

## Usage

```tsx
import React from "react";
import useToggle from "@/hooks/useToggle";

import Badgg from "@/components/Badge";
import Button from "@/components/UI/Button";

const App = () => {
    const [online, toggle] = useToggle(false);

    return (
        <Badge
            color={online ? "green" : "red"}
            content={online ? "Online" : "Offline"}
        >
            <Button interval={500} onClick={toggle}>
                Click me
            </Button>
        </Badge>
    );
}
```

## Properties

| Name       | Type                                                     | Description                     |  
|:-----------|:---------------------------------------------------------|:--------------------------------|  
| color      | `red`, `green`, `orange` or `blue`                       | Color of the Badge's background |
| placement  | `top-left`, `top-right`, `bottom-left` or `bottom-right` | Placement of the Badge          |
| children   | `React.ReactNode`                                        | Content of the component        |
