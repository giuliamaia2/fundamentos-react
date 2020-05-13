import React from 'react'

export default class Contador extends React.Component {
    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    render() {
        return (
            <div>
                Número: {this.state.numero}
                <button onClick={this.maisUm}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}