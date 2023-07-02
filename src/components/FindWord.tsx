import { useEffect } from 'react'
import '../assets/sass/FindWord.scss'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate();

    async function populateFindWord() {
        // const data = await fetch('api/findword', {
        // OR
        const req = await fetch('https://server.rigo205.repl.co/api/findword', {
            headers: {
                'x-access-token': localStorage.getItem('token') || ''
            }
        });

        const data = req.json();
        console.log(data); // DEBUG
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwt.decode(token);
            if (decodedToken.exp * 1000 < Date.now()) {
                console.log("Token expired");
                localStorage.removeItem('token');
                navigate('/signin', { replace: true })
            }
            else if (!decodedToken) {
                localStorage.removeItem('token');
                navigate('/signin', { replace: true })
            }
            else {
                populateFindWord();
                console.log("Token valid");
            }
            console.log(decodedToken); // DEBUG
        }
    }, [])

    return (
        <div className="sign-in">
            <h1>Sign In</h1>
        </div>
    )
}