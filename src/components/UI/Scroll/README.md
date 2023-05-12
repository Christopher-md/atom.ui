# Scroll

> UI `<Scroll />` component

## Usage

```tsx
import Scroll from "@/components/UI/Scroll";

const style = {
    width: "300px",
    height: "300px",
}

const App = () => (
    <Scroll>
        <div style={style}>BOX</div>
        <div style={style}>BOX</div>
        <div style={style}>BOX</div>
        <div style={style}>BOX</div>
        <div style={style}>BOX</div>
    </Scroll>
);

export default App;
```

## Properties

| Name      | Type              | Description                           |  
|:----------|:------------------|:--------------------------------------|  
| children  | `React.ReactNode` | Content of the component              |
| className | `string`          | Prop for defining and changing styles |
