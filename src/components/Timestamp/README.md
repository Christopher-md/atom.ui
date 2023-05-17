# Timestamp

> UI `<Timestamp />` component

## Usage

```tsx
import Timestamp from "@/components/Timestamp";

const App = () =>  (
    <Timestamp
        locale="en"
        className="timestamp"
        format={Luxon.DATETIME_MED_WITH_SECONDS}
    />
);

export default App;
```

## Properties

| Name       | Type                         | Description                                |  
|:-----------|:-----------------------------|:-------------------------------------------|  
| format     | `Intl.DateTimeFormatOptions` | Date format to be displayed                |
| className  | `string`                     | Prop for defining and changing styles      |
| locale     | `string`                     | Get the locale of a DateTime, such 'en-GB' |
