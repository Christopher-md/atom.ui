<style>
    p {
        font-size: 14px;
    }
    .text-center {
        text-align: center;
    }
</style>

<h1 class="text-center">Atom</h1>

---

**Atom** is a npm user interface library based on React. It is fully customizable and allows you to use dark and light modes

## Installation

### With npm:
```shell
npm install @atom-dev/material
```

### With Yarn:
```shell
yarn add @atom-dev/material
```

## Getting started with Atom

Here is an example of a basic app using Atom UI's Button component:

```tsx
import { Button } from "@atom-dev/material";
import "@atom-dev/material/dist/style.css";

const App = () => (
    <Button 
        interval={500} 
        onClick={() => console.log("Clicked!")}
    >
        Click
    </Button>
);

export default App;
```
