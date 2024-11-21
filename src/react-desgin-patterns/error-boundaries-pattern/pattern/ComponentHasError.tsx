import { useUser } from "./useUser";

export default function ComponentHasError() {
  const { loading, users } = useUser();
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>name is : {user?.name}</h1>
          <h1>phone is : {user?.phone}</h1>
        </div>
      ))}

      {/* If any child component throws, the whole app might crash */}
      {/* <UserPosts /> */}
    </div>
  );
}
