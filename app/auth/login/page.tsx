export default function LoginPage() {
  return (
    <form className="form-login">
      <p>Login</p>
      <input type="text" placeholder="Uusername" />
      <input type="password" placeholder="password" />
      <button className="button login-button">Login</button>
    </form>
  );
}
