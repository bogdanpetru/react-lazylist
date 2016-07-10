import shallowEqual from 'shallowEqual'

export default (Component) => {
  Component.prototype.shouldComponentUpdate = function(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
  }

  return Component; 
}