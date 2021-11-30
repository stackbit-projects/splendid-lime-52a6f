import * as React from 'react';
import SignupButton from '../SignupButton/SignupButton.tsx';

export const SignUpForm = () => {
    const [opened, setOpened] = React.useState(false);

    if (opened) {
        return null;
    } else {
        return <SignupButton onClick={() => setOpened(true)} />
    }
}