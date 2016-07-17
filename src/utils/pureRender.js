import shallowEqual from 'shallowequal'

export default (Component) => {
  Component.prototype.shouldComponentUpdate = function(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
  }

  return Component;
}
