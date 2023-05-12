# Counter

> UI `<Counter />` component

## Usage

```tsx
import Counter from "@/components/Counter";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <Counter
            count={count}
            className="counter"
            onChange={(number) => setCount(number)}
        />
    )
};

export default App;
```

## Properties

| Name      | Type                       | Description                           |  
|:----------|:---------------------------|:--------------------------------------|  
| onChange  | `(number: number) => void` | Event of getting a new value          |
| count     | `number`                   | Value to control component            |
| className | `string`                   | Prop for defining and changing styles |
