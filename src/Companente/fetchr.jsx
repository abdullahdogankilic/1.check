import useSWR from "swr";

function useGithubUser(userid) {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users/" + userid
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
