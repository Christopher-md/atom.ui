# Search

> UI `<Search />` component

## Usage

```tsx
import Search from "@components/UI/Search";

const App = () => {
    const [value, setValue] = useState("");

    return (
        <Search
            value={value}
            label="Search..."
            onEnter={() => console.log("Enter!")}
            onChange={(e) => setValue(e.target.value)}
        />
    )
};

export default App;
```

## Properties

The search component extends all the input's own HTML attributes and several non-native ones:

| Name      | Type                | Description                                                                                 |  
|:----------|:--------------------|:--------------------------------------------------------------------------------------------|  
| label     | `string`            | Label of the component                                                                      |
| fullWidth | `boolean`           | If it is in the true state, then its width will be equal to 100%                            |
| error     | `string`, `boolean` | It can take both a boolean value and a string. Can be used to display if the field is valid |
