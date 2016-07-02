import React, { Component } from 'react'

const normalizeData = (data, idProp = 'id') => {
  return data.reduce((acc, item) => {
    acc.ids.push(item.id)
    acc.dataMap[idProp] = item

    return acc;
  }, {
    ids: [],
    dataMap: {}
  })
}

const prepareData = Component => class DataLayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.loadData(this.props.data)
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.data !== nextProps.data) {
      this.loadData(nextProps.data)
    }
  }

  loadData(data) {
    if (typeof data.then === 'function') {
      this.setState({
        loading: true
      })

      return data.then((newData) => {
        if (!Array.isArray(newData)) {
            console.error("If data is a promise it must return an array");

            return null;
        }

        this.props.onDataChange(newData)
        this.setState({
          data: newData
        })
      })
    }
  }

  render() {
    const {
      loading,
      ...restProps
    } => this.props;

    let isLoading = loading

    return <Component
      {...restProps}
      data={this.state.data}
    />
  }
}

DataLayer.defaultProps = {
  data: [],
  onDataChange: () => {}
}

export default prepareData
