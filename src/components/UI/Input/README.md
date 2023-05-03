# Input

> UI `<Input />` component

## Usage

```jsx
import Input from "@components/UI/Input";

const App = () => {
    const [value, setValue] = useState("")

    return (
        <Input
            label="ФИО"
            value={value}
            placeholder="Чайковский К.А."
            onChange={(e) => setValue(e.target.value)}
        />
    )
};

export default App;
```

## Properties

| Name         | Type                                               | Description                                                       |  
|:-------------|:---------------------------------------------------|:------------------------------------------------------------------|  
| `onChange`   | `(event: ChangeEvent<HTMLInputElement>) => void`   | default `change` event to get `input` value                       |
| `value`      | `string, number`                                   | value to `control` input                                          |
| `type`       | `text, password or number`                         | prop to set input `type` attribute                                |
| `label`      | `string`                                           | prop to display input `label`                                     |
| `fullWidth`  | `boolean`                                          | If `true`, the input will take up the full width of its container |
| `disabled`   | `boolean`                                          | If `true`, the input will be disabled                             |
| `error`      | `boolean, string`                                  | prop to set error state                                           |
| `inputProps` | `object`                                           | attributes applied to the `input` element                         |
| `className`  | `string`                                           | prop to add classes to root `input` element                       |
