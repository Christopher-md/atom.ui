# Button

> UI `<Button />` component

## Usage

```tsx
import Counter from "@/components/UI/Button";

const App = () => (
    <Button onClick={() => console.log("Clicked!")}>
        Click
    </Button>
);

export default App;
```

## Properties

The button extends all the button's own HTML attributes and several non-native ones:

| Name      | Type                | Description                           |  
|:----------|:--------------------|:--------------------------------------|  
| children  | `React.ReactNode`   | Content of the component              |
