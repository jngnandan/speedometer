import { Component } from 'react'
import '../Speedometer/index.css'


class Speedometer extends Component {

    state = {
        initialSpeed: 0
    }



    render() {
        const { initialSpeed } = this.state

        const clickIncrease = () => {
            if (initialSpeed !== 200) {
                this.setState({ initialSpeed: initialSpeed + 10 })
            }
        }

        const clickDecrease = () => {
            if (initialSpeed !== 0) {
                this.setState({ initialSpeed: initialSpeed - 10 })
            }
        }

        return (
            <div className="container p-5 m-auto">
                <h1 className="text-white">SPEEDOMETER</h1>
                <p className="text-white">Max limit is 0mph, Max Limit is 200mph</p>

                <h1 className="text-white">Speed is <span className="text-danger">{initialSpeed}</span></h1>

                <button onClick={clickIncrease} className="btn btn-primary m-2">Accelerate</button>
                <button onClick={clickDecrease} className="btn btn-outline-primary m-2">Apply Break</button>
            </div>
        )
    }
}
export default Speedometer