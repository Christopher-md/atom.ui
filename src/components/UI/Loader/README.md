# Loader

> UI `<Loader />` component

## Usage

```tsx
import Loader from "@/components/UI/Loader";

const App = () => (
    <Loader
        full
        center
        type="fixed"
        size="large"
    />
);

export default App;
```

## Properties

| Name   | Type                                        | Description                          |  
|:-------|:--------------------------------------------|:-------------------------------------|  
| type   | `fixed`, `absolute` or `static`             | Position of the Loader component     |
| size   | `extra-small`, `small`, `medium` or `large` | Size of the Loader component         |
| full   | `boolean`                                   | Set the `width` and `height` to 100% |
| center | `boolean`                                   | Center the loader component          |
