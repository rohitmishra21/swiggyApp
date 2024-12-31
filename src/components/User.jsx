import React from 'react'
import UserFunction from './UserFunction'
import UserClass from './UserClass'

const User = () => {
    return (
        <div className='p-10 text-3xl uppercase'>
            <UserFunction />
            <UserClass name={ "rohit sir i am from (class) "} />
        </div>
    )
}

export default User
