# Tooltip

> UI `<Tooltip />` component

## Usage

```tsx
import Tooltip from "@/components/UI/Tooltip";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, expedita";

const App = () => (
    <Tooltip
        text={lorem}
        className="tooltip"
    >
        <Button>Hover me</Button>
    </Tooltip>
);

export default App;
```

## Properties

| Name      | Type              | Description                           |  
|:----------|:------------------|:--------------------------------------|  
| children  | `React.ReactNode` | Content of the component              |
| text      | `string`          | The text to be displayed              |
| className | `string`          | Prop for defining and changing styles |
