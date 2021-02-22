import React from 'react'
import Typical from 'react-typical'

class TypeWriter extends React.Component {

    render() {
        return (
            <Typical
                steps={[1000, "Hello!", 500, "Hello! I'm Román", 1000, "I'm a Web Developer"]}
                loop={1}
                wrapper="h1"
                className="header-content__title"
            />
        )
    }
}

export default TypeWriter