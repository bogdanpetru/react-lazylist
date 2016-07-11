# React Lazy List

Awesome react list, lazy renders only the visible rows.

## The component is not production ready, working on mvp.

## Goal
A list that be performant with 10^6 lines rendered, flexible line height, easy customizable (themes and render hooks). Supports `tabs` as iPhone contact list.

## TODO MVP:
- [x] write mvp documentation
- [x] implement documentation
- [ ] refactor, create examples folder
- [ ] write tests
- [ ] use flow
- [x] virtual render
- [ ] basic theme

## Props

### Basics

**itemHeight**
> itemHeight?: Number

It used to calculate how may rows are visible. I it also used to calculate the render buffer.

**data**
> data: Array/Promise(Array)

It is an array to be rendered.



## Style - bem + style

**root**

.react-lazylist
style
className


**scrollBody**
.react-lazylist__scroll-body
scrollBodyStyle
scrollBodyClassName



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

  const renderItem = ({ name }) => <div>{name}</div>

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
open http://localhost:3000
```

## License
MIT
