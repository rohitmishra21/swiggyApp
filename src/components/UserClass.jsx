import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1>hellow from class {this.props.name}</h1>

        )
    }
}

export default UserClass