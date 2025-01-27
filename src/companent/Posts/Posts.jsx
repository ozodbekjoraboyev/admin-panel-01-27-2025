import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPost] = useState();
  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
  }, []);
  if (!posts) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
        <div className="absolute left-80 top-20 m-auto text-center">
    <button className="text-white cursor-pointer bg-green-700 rounded-xl px-4 py-3 mb-4">
      + Qo'shish
    </button>

    <div className="border border-gray-500text-center mx-auto my-4">
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-500 px-4 py-2">ID</th>
            <th className="border border-gray-500 px-4 py-2">title</th>
            <th className="border border-gray-500 px-4 py-2">link</th>
            <th className="border border-gray-500 px-4 py-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-500 px-4 py-2">{user.id}</td>
              <td className="border border-gray-500 px-4 py-2">{user.title
              }</td>
              <td className="text-red-900 border border-gray-500 px-4 py-2">
                {user.link}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {user.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    </>
  );
}
export default Posts;
