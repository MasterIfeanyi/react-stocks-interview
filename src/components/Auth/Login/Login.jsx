import "./Login.css"

const Login = () => {



  return (
    <form className='row g-3 custom-form my-2'>
        <div className="input-group custom-input-group">
            <input
                type="email"
                className="custom-form-control"
                placeholder="Email"
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="password"
                className="custom-form-control"
                placeholder="Password"
            />
        </div>
        <div className=''>
            <button type="submit" className="btn btn-brand w-100 create-btn">
                Add Entry
            </button>
        </div>
    </form>
  )
}

export default Login