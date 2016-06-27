import React, { Component } from 'react'
import LazyList from './src/LazyList'
import faker from 'faker'

function gen(no) {
  let list = [];

  while(no--) {
    list.push({
      name: faker.name.firstName(),
      name: faker.internet.email()
    })
  }

  return list;
}

class DemoApp extends Component {
  render() {
    return <div>
      <h1>Lazt List</h1>

      <LazyList
        items={gen(1000)}
        renderRow={() => <div> bau bau </div>}
      />
    </div>
  }
}

export default DemoApp;
