# React Lazy List

Awesome react list, lazy renders only the visible rows.

## Goal
A list that be performant with 10^6 lines rendered, flexible line height, easy customizable (themes and render hooks). Supports `tabs` as iPhone contact list.

## TODO MVP:
- [x] write mvp documentation
- [x] implement buffer
- [x] update buffer only when it's limits are exceeded
- [ ] buffer items in direction of scroll
- [ ] refactor, create examples folder
- [ ] write tests
- [ ] use flow
- [x] virtual render
- [ ] basic theme

## Props

### Basics

**itemHeight**
> itemHeight: Number

It used to calculate how may rows are visible. I it also used to calculate the render buffer.
For now the list can render only fixed height rows.

**data**
> data: Array(Array)

It is an array to be rendered.

### Render

**renderItem**
> renderItem(dataItem: Object) -> JSX/String

Custom renderer for listitem.


## Usage

```js
  const data = [
    {
      name: 'hello', lastName: 'world'
    }, {
      ..
    },
    ..
  ]

  const renderItem = ({ name /* you have access to data item */}) => <div>{name}</div>

  <LazyList
    data={data}
    itemHeight={50}
    renderItem={renderItem}
  />
```

## Installation

```bash
git clone https://github.com/bogdanpetru/react-lazylist.git
cd react-lazylist
npm install
npm start
open http://localhost:3002
```

## License
MIT
