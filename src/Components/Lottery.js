import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {

    static defaultProps = {
        title : "Loto",
        maxBall : 6,
        maxNum : 40
    }

    state = {
        nums : Array.from({ length : this.props.maxBall})
    }


    handleClick = () => {
        this.setState( curState => ({
            nums : curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
    }


    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="lotteryball-wrapper">
                    {this.state.nums.map(n => <LotteryBall nums={n}/>)}
                </div>
                <button onClick={this.handleClick}>Generat</button>
            </div>
        );
    }
}

export default Lottery;