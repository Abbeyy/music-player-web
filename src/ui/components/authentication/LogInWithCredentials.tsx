import { useState } from "react";

const LogInWithCredentials = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>) =>
    setUsername(e.currentTarget.value);

  const onChangePassword = (e: React.FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  const onLogin = () => {
    //Login...
  };

  const validateUsername = () => setUsernameIsValid(!!username.length);

  const validatePassword = () => setPasswordIsValid(!!password.length);

  return (
    <>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={onChangeUsername}
        onKeyDown={validateUsername}
      />
      {!usernameIsValid ? <p>Username is not a valid input.</p> : null}
      <input
        placeholder="Password"
        type="text"
        value={password}
        onChange={onChangePassword}
        onKeyDown={validatePassword}
      />
      {!usernameIsValid ? <p>Password is not a valid input.</p> : null}

      <button onClick={onLogin} disabled={!usernameIsValid || !passwordIsValid}>
        Login
      </button>
    </>
  );
};

export default LogInWithCredentials;
