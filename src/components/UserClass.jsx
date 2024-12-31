import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    changeNumber = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {

        return (
            <>
                <h1> {this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <button className="bg-gray-500 px-2 rounded py-2 text-xs" onClick={this.changeNumber}>click to incease a count</button>

            </>
        )
    }
}

export default UserClass