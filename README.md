# React Lazy List

Lazy render only rows that are visible.

Do not use this component (yet), it's main purpose is to experiment with lazy render on large datasets.


## Usage

```
  const rows = [
    {
      name: 'hello', lastName: 'world'
    }, {
      ..
    },
    ..
  ]
  const renderRow = (row, rows, realIndex, props) => {
    return <div>{row.name}</div>
  }

  <LazyList 
    rows={rows}
    height={400}
    rowHeight={50}
    renderRow={renderRow}
  />
```

## Installation

```bash
git clone https://github.com/bogdanpetru/react-lazylist.git
cd react-lazylist
npm install
npm start
open http://localhost:3000
```

## License

MIT
