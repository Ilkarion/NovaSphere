import { login, signup } from './actions'
import styles from "./login.module.scss"
import PasswordField from './passwordField'

export default function LoginPage() {
  return (
    <div className={`${styles.formContainer}`}>
      <form className={`${styles.form}`}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div>
          <PasswordField />
        </div>
        
        <div className={`${styles.btns}`}>
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </div>
      </form>
    </div>
  )
}