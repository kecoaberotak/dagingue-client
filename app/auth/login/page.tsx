export default function LoginPage() {
  return (
    <form className="form-login">
      <p>Login</p>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="password" />
      <button className="button login-button">Login</button>
    </form>
  );
}
