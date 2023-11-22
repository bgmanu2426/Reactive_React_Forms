import { useState } from "react"
import Input from "./form-input/Input"

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const formData = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}",
      errorMessage: "Username should be 3-16 charecters and shouldn't include any special charecter!",
      autocomplete :"off",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "E-mail",
      required: true,
      errorMessage: "Should be a vaild email address",
      autocomplete :"off"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      errorMessage:"Password should be minimum of 6 charecters and include at least 1 lowercase letter, 1 uppercase letter, 1 number & 1 special charecter",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}`
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage:"Passwords did not match",
      required: true,
      pattern: values.password
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      {formData.map((field) => (
        <Input key={field.id} {...field} onChange={onChange} />
      ))}
      <button className='button'>Submit</button>
    </form>
  )
}

export default App