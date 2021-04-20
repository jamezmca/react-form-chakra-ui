import React, { useState } from 'react'

const Form = () => {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const isInvalid = password === '' || emailAddress === ''

    function handleSignIn(event) {
        event.preventDefault()
    }

    return (
        <form method="POST" onSubmit={handleSignIn}>
            <input required
                type="text"
                placeholder="Email address"
                value={emailAddress} 
                onChange={({ target }) => setEmailAddress(target.value)}/>
            <input required
                type="password"
                placeholder="Password"
                value={password} 
                onChange={({ target }) => setPassword(target.value)}/>
            <button type="submit" disabled={isInvalid}>Sign In</button>
        </form> 


    )
}

export default Form
