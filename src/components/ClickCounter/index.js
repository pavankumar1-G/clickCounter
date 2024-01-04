// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => {
      return {count: previousState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="backgroundContainer">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
