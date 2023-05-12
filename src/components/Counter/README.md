# Timestamp

> UI `<Timestamp />` component

## Usage

```tsx
import { DateTime as Luxon } from "luxon";
import Counter from "@/components/Timestamp";

const App = () => (
    <Timestamp
        locale="en"
        className="timestamp"
        format={Luxon.DATETIME_MED_WITH_SECONDS}
    />
);

export default App;
```

## Properties

| Name      | Type                         | Description                           |  
|:----------|:-----------------------------|:--------------------------------------|  
| format    | `Intl.DateTimeFormatOptions` | Date display format                   |
| locale    | `string`                     | Prop to change localization           |
| className | `string`                     | Prop for defining and changing styles |
