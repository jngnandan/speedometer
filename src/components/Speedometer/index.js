

import React, { Component } from 'react'
import '../Speedometer/speed.jpeg'

class Speedometer extends Component {
    state = {
        speedNumber: 0
    }

    render() {
        const { speedNumber } = this.state

        const accelerate = () => {
            return (
                speedNumber < 200 ? this.setState({ speedNumber: speedNumber + 10 })
                    :
                    this.setState({ speedNumber: speedNumber + 0 })

            )
        }

        const deccelerate = () => {
            return (
                speedNumber > 0 ? this.setState({ speedNumber: speedNumber - 10 })
                    : this.setState({ speedNumber: speedNumber - 0 })
            )
        }
        return (
            <div className="row vh-100">
                <div className="col-12 text-center text-white align-self-center">
                    <h1>Speed is <span className="text-danger">{speedNumber}</span></h1>
                    <div className="col-12">
                        <p className="col-12 mt-5">Min Limit is 0mph, Max Limit is 200mph</p>
                        <button onClick={accelerate} className="btn btn-primary col-5 m-3">Accelerate</button>
                        <button onClick={deccelerate} className="btn btn-outline-primary col-5 m-3">Apply Break</button>
                    </div>

                </div>

            </div>
        )
    }
}

export default Speedometer
