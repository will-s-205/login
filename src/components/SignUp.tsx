import { useState, useEffect } from 'react'
import '../assets/sass/Login.scss'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    joinedNewsletter: false
  })

  useEffect(() => {
    console.log("useEffect")
    localStorage.setItem("userCreds", JSON.stringify(formData))
  }, [formData])

  function handleChange(event: { target: { name: string; value: any; type: any; checked: boolean } }) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  // function saveData() {
  //   localStorage.setItem("userCreds", JSON.stringify({ email: formData.email, password: formData.password, joinedNewsletter: formData.joinedNewsletter })) // DEBBUG
  //   console.log(JSON.parse(localStorage.getItem("userCreds") || "")) // DEBBUG
  // }

  async function mongoSignup(event) {
    event.preventDefault()
    if (formData.email === '' && formData.email === "") {
      console.log("Please enter your email")
      return
    }
    else if (formData.password === '') {
      console.log("Please enter new password")
      return
    }
    else if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match")
      return
    }
    else
      if (formData.joinedNewsletter)
        console.log("Thanks for signing up for our newsletter!")
    console.log("Wait... signing up")

    // const url2: string = 'http://localhost:4000/api/signup'
    const url: string = 'https://server.rigo205.repl.co/api/signup'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        newsletter: formData.joinedNewsletter
      })
    })

    const data = await response.json()

    if (data.message === "User has been created") {
      console.log("Sign up successful")
      navigate('/findword', { replace: true })
      // window.location.href = "/findword"
    } else if (data.message.code === 11000) {
      alert("Email is already registered. Please login or try again.")
    } else {
      alert("Sign up failed. Please try again.")
      console.log("Sign up. Please try again.")
    }
    console.log(data) // DEBUG
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={mongoSignup} action="/api/signup" method="POST">
        <input
          type='email'
          placeholder="Email address"
          className="form-input"
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form-input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />
        <div className="form-marketing">
          <input
            id='email-okay'
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form-submit"
        >
          Sign up
        </button>
        <a href="/login" className="form-link">Already have an account? Sign in</a>
      </form>
    </div>
  )
}
