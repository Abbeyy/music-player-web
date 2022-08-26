import { useNavigate } from "react-router-dom";

type Props = {
  message?: string;
};

export const ErrorHandler = (props: Props) => {
  const { message } = props;

  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div>
      <h2>Uh oh! There was an error...</h2>
      <p>That's why you're seeing this page.</p>

      {message ? <h3>{message}</h3> : null}
      <p>Please go back to the home page to continue using the player.</p>
      <div onClick={goHome}>
        <p>Home</p>
      </div>
    </div>
  );
};
