export default function LoginForm() {
  return (
    <form>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
