import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  decreaseBalance = val => {
    this.setState(prevState => ({
      balance: prevState.balance - val,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-conatiner">
        <div className="content-container">
          <div className="name-container">
            <p className="profile">s</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-conatiner">
            <p className="para">Your Balance</p>
            <div className="remaining-balance">
              <p className="balance">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominatiopn-container">
            {denominationsList.map(eachNum => (
              <DenominationItem
                eachNum={eachNum}
                decreaseBalance={this.decreaseBalance}
                key={eachNum.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
