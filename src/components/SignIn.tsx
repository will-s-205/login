import { useState, useEffect } from 'react'
import '../assets/sass/Login.scss'
import { useNavigate } from 'react-router-dom';

export default function Signip() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    joinedNewsletter: false
  })

  useEffect(() => {
    // console.log("useEffect") // DEBUG
    // localStorage.setItem("userCreds", JSON.stringify(formData)) // DEBUG
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

  async function mongoSignin(event) {
    event.preventDefault()
    if (formData.email === '' && formData.email === "") {
      console.log("Please enter your email")
      return
    }
    else if (formData.password === '') {
      console.log("Please enter your password")
      return
    }
    console.log("Wait... checking creds")

    // const url2: string = 'http://localhost:4000/api/signin'
    const url: string = 'https://server.rigo205.repl.co/api/signin'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    })

    const data = await response.json()

    if(data.token) { 
      console.log("SignIn - Login successful")
      localStorage.setItem('token', data.token)
      console.log("SignIn - ", data.token)
      navigate('/findword', { replace: true })
    } else {
      alert("Login failed. Please check your email and password.")
    }
    console.log(data) // DEBUG
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={mongoSignin} action="/api/signin" method="POST">
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
        <button
          className="form-submit"
        >
          Sign in
        </button>
        <a href="/signup" className="form-link">Don't have an account? Sign up</a>
      </form>
    </div>
  )
}
