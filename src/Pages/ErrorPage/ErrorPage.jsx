import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="errorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i> Issue: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}
