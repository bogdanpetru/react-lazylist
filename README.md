# React Lazy List

Awesome react list, lazy renders only the visible rows.
The component is not production ready, working on documentation.

## Goal
A list that be performant with 10^6 lines rendered, flexible line height, easy customizable (themes and render hooks). Supports `tabs` as iPhone contact list.

## TODO:
- [ ] write api documentation and examples before any code
- [ ] render only visible rows, with option to control buffer size
- [ ] create a theming schema
- [ ] complete documentation
- [ ] everything is customisable, and has a prop hook
- [ ] horizontal list
- [ ] support for infinite scroll (skip/limit), and pagination?
- [ ] use flow
- [ ] test coverage

## Props




## Usage

```js
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
