import DataFetcher from "./DataFetcher";
type User = {
  id: number;
  name: string;
  email: string;
};
export default function UsersList() {
  return DataFetcher({
    url: "https://jsonplaceholder.typicode.com/users",
    render(data, isLoading) {
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      return (
        <div>
          <h1>Users List : </h1>
          {data.map((user: User) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      );
    },
  });
}
