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

      <div style={{height: 300}}>
        <LazyList
          minItemHeight={40}
          style={{height: 300}}
          data={gen(10000)}
          renderItem={() => <div> bau bau </div>}
        />
        {({ name }) => <div> bau bau from { name } </div>}
      </div>
    </div>
  }
}

export default DemoApp;
