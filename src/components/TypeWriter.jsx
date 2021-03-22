import React from 'react'
import Typical from 'react-typical'

class TypeWriter extends React.Component {

    render() {
        return (
            <Typical
                steps={[2000, ">Hi, I'm Román_"]}
                loop={1}
                wrapper="h1"
                className="header-content__title"
            />
        )
    }
}

export default TypeWriter