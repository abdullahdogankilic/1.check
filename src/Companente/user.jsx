import { useParams } from "react-router-dom";
import useGithubUser from "./fetchr";

function User() {
  const { userid } = useParams();
  const { user, isLoading, isError } = useGithubUser(userid);
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
      {user && (
        <div>
          <h2>ID: {user.id}</h2>
          <h2>İsim: {user.name}</h2>
          <h2>Kullanıcı Adı: {user.username}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Telefon: {user.phone}</h2>
          <h2>Web Sitesi: {user.website}</h2>
          <h2>Şirket:</h2>
          <p>İsim: {user.company.name}</p>
          <p>Yakalama Cümlesi: {user.company.catchPhrase}</p>
          <p>BS: {user.company.bs}</p>
        </div>
      )}
    </>
  );
}

export default User;
