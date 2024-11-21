import DataFetcher from "./DataFetcher";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsList() {
  return DataFetcher({
    url: "https://jsonplaceholder.typicode.com/posts",
    render(data, isLoading) {
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      return (
        <div>
          <h1>Posts List : </h1>
          {data.map((post: Post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      );
    },
  });
}
