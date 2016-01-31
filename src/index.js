import React, { Component } from 'react';
import { render } from 'react-dom';
import LazyList from './LazyList'
import faker from 'faker'

const genData = (no) => {
  let copy = no
  const items = []

  while(copy--){
    items.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    })
  }

  return items
}

const items = genData(10000)

const renderRow = (row, rows, realIndex, props) => {
  return <div>{row.name}</div>
}

class App extends Component {
  render () {
    return <LazyList 
      rows={items}
      height={400}
      rowHeight={50}
      renderRow={renderRow}
    />
  }
}

render(<App />, document.getElementById('root'));
