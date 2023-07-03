// import { useEffect } from 'react'
import '../assets/sass/FindWord.scss'
import { useNavigate } from 'react-router-dom'
// import jwt from 'jsonwebtoken'
import { useEffect } from 'react';

export default function FindWord() {
    const navigate = useNavigate();

    // async function populateFindWord() {
        // const data = await fetch('api/findword', {
        // OR
        // const req = await fetch('/findword', {
        //     headers: {
        //         'x-access-token': localStorage.getItem('token') || ''
        //     }
        // })
        // console.log("FindWord - populateFindWord - localStorage.getItem ", localStorage.getItem('userCreds')); // DEBUG
        // console.log("FindWord - populateFindWord - localStorage.getItem ", localStorage.getItem('token')); // DEBUG
    // };

    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log("FindWord - useEffect - got token - ", token); // DEBUG
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login', { replace: true });
            // console.log("FindWord - useEffect - NO TOKEN - ", token); // DEBUG
        } else {
            // populateFindWord();
            // console.log("FindWord - useEffect - populateFindWord() - ", token); // DEBUG
        }
    }, [navigate])


    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleClick(event) {
        // console.log('Button clicked!'); // DEBUG
        if (event.target.name === 'Morning') {
            alert('Correct!')
        } else {
            alert('Wrong answer. Please try again')
        }
    }

    return (
        <div className="wrapper">
            <h1>Translate French!</h1>
            <div className="wrapper-question">
                <p>Matin</p>
            </div>
            <form className="wrapper-answer" onSubmit={handleSubmit}>

                <button
                    className='word'
                    onClick={handleClick}
                    name='Mother'>
                    Mother
                </button>

                <button
                    className='word'
                    onClick={handleClick}
                    name='Month'>
                    Month
                </button>

                <button
                    className='word'
                    onClick={handleClick}
                    name='Morning'>
                    Morning
                </button>

                <button
                    className='word'
                    onClick={handleClick}
                    name='Meta'>
                    Meta
                </button>

                <button
                    className='word'
                    onClick={handleClick}
                    name='Metro'>
                    Metro
                </button>

                <button
                    className='word'
                    onClick={handleClick}
                    name='Meteor'>
                    Meteor
                </button>

            </form>
        </div>
    )
}