import "./login.css"

export default function Login() {
    return (
        <div className="Login">
            <div className="form">
                <h2>Login</h2>
                <div className="input">
                    <div className="inputBox">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" placeholder="example@test.com" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="">Password</label>
                        <input type="password" name="" placeholder="......." />
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value="Sign In" />
                    </div>
                </div>
                <p className="forget">
                    Forget Password ? <a href="/">Click Here!</a>
                </p>
            </div>
        </div>
    )
}