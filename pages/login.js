import { useState } from 'react';
import SEO from '../components/SEO';
import LoginHeader from '../components/LoginHeader';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';


export default function LoginPage() {

    const pageHeader = `Login | ${process.env.siteTitle}`;
    const [ isSigningIn, setIsSigningIn ] = useState(true);

    const toggleIsSigningIn = () => {
        setIsSigningIn(! isSigningIn);
    }

    return <div className="container mx-auto py-6 sm:py-12">

        <SEO title={pageHeader} />

        { isSigningIn
        ? <div>
            <LoginHeader
                toggleIsSigningIn={toggleIsSigningIn}
                header={`Login to your account`}
                question={`Don't have an account?`}
                cta={`Sign up`}
            />
            <SignInForm />
        </div>

        : <div>
            <LoginHeader
                toggleIsSigningIn={toggleIsSigningIn}
                header={`Create your account`}
                question={`Already have an account?`}
                cta={`Sign in`}
            />
            <SignUpForm />
        </div> }
    </div>
}
