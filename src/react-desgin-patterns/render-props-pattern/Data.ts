export type User = {
  id: number;
  name: string;
  email: string;
  phone: number;
};
export type Post = {
  id: number;
  title: string;
  desc: string;
};
export const usersData: User[] = [
  { id: 1, name: "Mostafa Mohamed", email: "mostafa@gmial.com", phone: 457478 },
  { id: 2, name: "Ahmed Mohamed", email: "ahmed@gmial.com", phone: 4577478 },
  { id: 3, name: "Mohamed Ahmed", email: "mohamed@gmial.com", phone: 4577478 },
];
export const postsData: Post[] = [
  {
    id: 1,
    title: "title of post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    title: "title of post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,
    title: "title of post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 4,
    title: "title of post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];
