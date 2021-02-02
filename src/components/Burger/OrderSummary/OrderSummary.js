import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  render() {
    const ingredentSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitilize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        )
      }
    )
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious burger with following ingredients:</p>
        <ul>{ingredentSummary}</ul>
        <p>Continue to Checkout?</p>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <Button clicked={this.props.purchaseCancelled} btnType='Danger'>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType='Success'>
          CONTINUE
        </Button>
      </Aux>
    )
  }
}

export default OrderSummary
