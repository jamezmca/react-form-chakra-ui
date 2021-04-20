import React, { useState } from 'react'
import {
    Stack,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    FormHelperText,
    Box,
    Heading,
    Text,
    Link
} from '@chakra-ui/react'


const PrettyForm = () => {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const isInvalid = password === '' || emailAddress === ''

    function handleSignIn(event) {
        event.preventDefault()
    }

    return (
        <div>
            <Box textAlign="center">
                <Heading>Sign In To Your Account</Heading>
                <Text>
                    Or <Link>start your 14 day trial</Link>
                </Text>
            </Box>
            <form method="POST" onSubmit={handleSignIn}>
                <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5}>
                    <FormControl>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                            isRequired
                            type="email"
                            id="email"
                            aria-describedby="email-helper-text"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />
                        <FormHelperText id="email-helper-text">
                            Your user account email address.
                    </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputGroup>
                            <Input
                                isRequired
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                aria-describedby="password-helper-text"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)} />
                            <InputRightElement width="4.5rem">
                                <Button height="1.75rem"
                                    size="sm"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormHelperText id="password-helper-text">
                            The password you used to sign up with.
                    </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <Button colorScheme="blue" 
                        type='submit' 
                        disabled={isInvalid}
                        width="full">Sign In</Button>
                    </FormControl>
                </Stack>
            </form>
        </div>
    )
}

export default PrettyForm
