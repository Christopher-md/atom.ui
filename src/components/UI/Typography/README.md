# Typography

> UI `<Typography />` component

## Usage

```tsx
import Typography from "@/components/UI/Typography";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, expedita";

const App = () => (
    <Typography color="secondary">
        App is running in {import.meta.env.MODE} mode
    </Typography>
);

export default App;
```

## Properties

The component also accepts all HTML properties of the tag that was passed to it in prop `as`. By default, it is equal to the span tag

| Name             | Type                                  | Description                                                                                                                   |  
|:-----------------|:--------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|  
| color            | `primary`, `secondary`, `red`         | Text color                                                                                                                    |
| children         | `React.ReactNode`                     | Content of the component                                                                                                      |
| as               | `p`, `span`, `h1-h6`                  | Component to be displayed                                                                                                     |
| disableSelection | `boolean`                             | Disables text selection                                                                                                       |
| size             | `small`, `medium`, `large`, `inherit` | Размер текста. Small равен 14px, medium равен 24px, large равен 32px и inherit наследует размер текста родительского элемента |
