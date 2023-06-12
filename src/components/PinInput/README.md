# PinInput

> UI `<PinInput />` component

## Usage

```tsx
import React, { useState } from "react";

import PinInput from "@/components/PinInput";

const App = () => (
    <PinInput
        pageCount={25}
        forcePage={page}
        onPageChange={({ selected }) => setPage(selected)}
    />
);

export default App;
```

## Properties

The component includes a lot of props, so we will analyze only the frequently used ones:

| Name          | Type                         | Description                                                                                                                                   |  
|:--------------|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|  
| length        | `number`                     | The length of your PIN code                                                                                                                   |
| values        | `string[]`                   | Field values. If no values are passed, the default value defined in `defaultValues` is used                                                   |
| onChange      | `(values: string[]) => void` | The function is called every time the value changes                                                                                           |
| onComplete    | `(value: string) => void`    | The function is called when all fields are filled in                                                                                          |
| defaultValues | `string[]`                   | In the case when the component is unmanaged, default values are set, where the number of values in the array is equal to the number of fields |
| otp           | `boolean`                    | If `true`, then the attribute `autocomplete="one-time-code"` is added, otherwise `autocomplete="off"`                                         |
| mask          | `boolean`                    | If `true`, then the attribute `type="password"` is set, otherwise `type="text"`                                                               |
