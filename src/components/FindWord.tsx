// import { useEffect } from 'react'
import '../assets/sass/FindWord.scss'
import { useNavigate } from 'react-router-dom'
// import jwt from 'jsonwebtoken'
import { useEffect } from 'react';

export default function FindWord() {
    const navigate = useNavigate();

    async function populateFindWord() {
        // const data = await fetch('api/findword', {
        // OR
        const req = await fetch('/findword', {
            headers: {
                'x-access-token': localStorage.getItem('token') || ''
            }
        })
        console.log("FindWord - populateFindWord - localStorage.getItem ", localStorage.getItem('userCreds')); // DEBUG
        console.log("FindWord - populateFindWord - localStorage.getItem ", localStorage.getItem('token')); // DEBUG
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("FindWord - useEffect - got token - ", token); // DEBUG
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login', { replace: true });
            console.log("FindWord - useEffect - NO TOKEN - ", token); // DEBUG
        } else {
            populateFindWord();
            console.log("FindWord - useEffect - populateFindWord() - ", token); // DEBUG
        }
    }, [])



    return (
        <div className="sign-in">
            <h1>FIND WORDS PAGE</h1>
        </div>
    )
}