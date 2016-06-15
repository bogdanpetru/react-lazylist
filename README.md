# React Lazy List

Awesome react list, lazy renders only the visible rows.
The component is not production ready, working on documentation.

## Goal
A list that be performant with 10^6 lines rendered, flexible line height, easy customizable (themes and render hooks). Supports `tabs` as iPhone contact list.

## TODO:
- [ ] write api documentation and examples before any code
- [ ] render only visible rows, with option to control buffer size
- [ ] create a theming schema
- [ ] everything is customisable, prop hooks
- [ ] horizontal list
- [ ] support for infinite scroll (skip/limit), and pagination?
- [ ] use flow
- [ ] test coverage

## Props

### Basics

**key**
> key: String

Select what attribute to be used as key. It defaults to `id`, if no `id` attribute on data, it will use render `index`.
Other options are:
- `bufferIndex`, this is from 0 - `bufferSize`. In this case visible elements are reused and only it's content's are changed.
- `renderIndex`, this can be from 0 to length of array. It is it's index in the array. In this case elements that are not out of view are re-used.
- `custom attribute`, set a custom attribute as key, it should be unique.


**data**
> data: Array/Promise(Array)

It is an array or a promise that returns an array of objects containing data to be rendered.

**onScroll**
> onScroll: (scrollTop: Number) => void

Called onScroll.

**enableArrowNavigation**
> enableArrowNavigation?: Booleon

Weather to navigate list using arrows. Active element will have `.react-lazylist__item--active` class.
Defaults is `false`.

### Presentation

### Methods
**setScrollTop**
> setScrollTop(scrollTop: Number): void

Change `scrollTop`. When this is called, it will trigger `onScroll`.

## CSS ClassNames index
`react-lazylist`

`react-lazylist--isNavigationEnabled`

`react-lazylist--isControlled` - when `scrollTop` is controlled thru props.

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
  const getItemHeight = ( dataItem ) => 20 

  <LazyList
    data={data}
    height={400}
    minItemHeight={50}
    getItemHeight={getItemHeight}
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
