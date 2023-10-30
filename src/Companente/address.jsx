import { useParams } from "react-router-dom";
import useGithubUser from "./fetchr";

function Address() {
  const { userid } = useParams();

  const { user, isLoading, isError } = useGithubUser(userid);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      {user && (
        <div>
          {" "}
          <h2>Adres:</h2>
          <p>Sokak: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>Şehir: {user.address.city}</p>
          <p>Posta Kodu: {user.address.zipcode}</p>
          <p>Enlem: {user.address.geo.lat}</p>
          <p>Boylam: {user.address.geo.lng}</p>
        </div>
      )}
    </>
  );
}

export default Address;
