# Switch

> UI `<Switch />` component

## Usage

```tsx
import Switch from "@/components/UI/Switch";

const App = () => {
    const [checked, setChecked] = useState(true);
    
    return (
        <Switch
            checked={checked}
            className="switch"
            onChange={(event) => {
                setChecked(event.target.checked);
            }}
        />
    );
}

export default App;
```

## Properties

The switch component extends all the input's own HTML attributes
