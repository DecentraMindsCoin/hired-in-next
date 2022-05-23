import { useState } from "react";
import { login } from "../../lib/utils";

// ================ LOGIN FORM ====================
//
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.


const styles = {
    wrapper: `w-full h-full py-5 text-center bg-emerald-300`,
    row: `py-5 flex justify-between px-5 items-center`,
    errorMessage: ``,
    input: `mx-5 outline-none px-3 rounded-xl py-2`,
    button: `border-2 mx-5 py-2 rounded-full mt-8 cursor-pointer hover:bg-white`

}
export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const disableButton = !email || password.length < 6 || loading;

  const handleLogin = async () => {
    setError(null)
    setLoading(true)
    try {
      await login({ email, password })
      alert("Login succesfull")
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  };

  return (
    <div className={styles.wrapper}>
        <h1 className="font-bold text-xl underline">Login Form</h1>
      <div className={styles.row}>
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor={"password"}>Password</label>
        <input
          id={"password"}
          type={"password"}
          value={password}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className={styles.errorMessage}>{error}</div>

      <div className={styles.button}>
        <button disabled={disableButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
