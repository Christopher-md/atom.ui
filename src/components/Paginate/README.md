# Paginate

> UI `<Paginate />` component

## Usage

```tsx
import React, { useState } from "react";

import Paginate from "@/components/Paginate";

const App = () => {
    const [page, setPage] = useState(0);
    
    return (
        <Paginate
            pageCount={25}
            forcePage={page}
            onPageChange={({ selected }) => setPage(selected)}
        />
    );
}

export default App;
```

## Properties

Pagination extends all the attributes of the react-paginate library and several non-native attributes:

| Name     | Type      | Description                          |  
|:---------|:----------|:-------------------------------------|  
| disabled | `boolean` | If `true`, the component is disabled |
