import React from 'react'
import './Login.scss'

export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: false
  })

  function handleChange(event: { target: { name: any; value: any; type: any; checked: boolean } }) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    if (formData.email === '') {
      console.log("Enter your email")
    } else if (formData.password === '') {
      console.log("Enter new password")
    } else if (formData.password !== formData.passwordConfirm) {
      console.log("Passwords do not match")
    } else if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!")
    } else {
      console.log("Successfully signed up")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
