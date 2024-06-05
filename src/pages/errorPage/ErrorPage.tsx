import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) ? (
        <p>
          <i>{error.statusText}</i>
        </p>
      ) : (
        <p>
          <i>{(error as Error).message}</i>
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
