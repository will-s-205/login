import '../assets/sass/FindWord.scss'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';

export default function FindWord() {
    const navigate = useNavigate();
    const buttons = ['Mother', 'Month', 'Morning', 'Meta', 'Metro', 'Meteor', 'Mind', 'Math']
    const randomButtons = buttons.sort(() => Math.random() - 0.5)

    const renderButtons = randomButtons.map((button, index) => {
        return <button key={index} className='word' onClick={handleClick} name={button}>{button}</button>
    })

    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log("FindWord - useEffect - got token - ", token); // DEBUG
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login', { replace: true });
            // console.log("FindWord - useEffect - NO TOKEN - ", token); // DEBUG
        } else {
            // console.log("FindWord - useEffect - populateFindWord() - ", token); // DEBUG
        }
    }, [navigate])


    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleClick(event) {
        if (event.target.name === 'Morning') {
            toast.success('Correct!')
        } else {
            toast.error('Wrong answer. Please try again')
        }
    }

    return (
        <div className="wrapper">
            <Toaster />
            <h1>Translate French!</h1>
            <div className="wrapper-question">
                <p>Matin</p>
            </div>
            <form className="wrapper-answer" onSubmit={handleSubmit}>
                {renderButtons}
            </form>
        </div>
    )
}