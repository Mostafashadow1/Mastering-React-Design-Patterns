import { useEffect, useState } from "react";
import { Post } from "../Data";

interface DataFetcherProps {
  url: string;
  render: (data: any, isLoading: boolean) => JSX.Element;
}
export default function DataFetcher({ url, render }: DataFetcherProps) {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
        console.log(json);
      });
  }, []);

  return render(data, isLoading);
}
