import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPost] = useState([]);
  const [showPosts, setshowPosts] = useState(false);
  const [newSHowPosts, setnewSHowPosts] = useState({
    title: "",
    link: "",
    body: "",
  });

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/posts")
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  if (!posts.length) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const addPost = () => {
    const newId = posts.length + 1;
    const newPostObj = { id: newId, ...newSHowPosts };
    setPost([...posts, newPostObj]);
    setshowPosts(false);
    setnewSHowPosts({ title: "", link: "", body: "" });
  };

  return (
    <>
      <div className="absolute left-80 top-20 m-auto text-center">
        <button
          onClick={() => setshowPosts(true)}
          className="text-white cursor-pointer bg-green-700 rounded-xl px-4 py-3 mb-4"
        >
          + Qo'shish
        </button>

        <div className="border border-gray-500 text-center mx-auto my-4">
          <table className="table-auto w-full border-collapse border border-gray-500">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-500 px-4 py-2">ID</th>
                <th className="border border-gray-500 px-4 py-2">Title</th>
                <th className="border border-gray-500 px-4 py-2">Link</th>
                <th className="border border-gray-500 px-4 py-2">Body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="border border-gray-500 px-4 py-2">
                    {post.id}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {post.title}
                  </td>
                  <td className="text-red-900 border border-gray-500 px-4 py-2">
                    {post.link}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {post.body}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showPosts && (
          <div
            onClick={() => setshowPosts(false)}
            className="fixed top-0 left-0 right-0 bottom-0   flex justify-center items-center "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4">Yangi post qo'shish</h2>
              <div className="mb-4">
                <label className="block mb-2">Title:</label>
                <input
                  type="text"
                  value={newSHowPosts.title}
                  onChange={(e) =>
                    setnewSHowPosts({ ...newSHowPosts, title: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Link:</label>
                <input
                  type="text"
                  value={newSHowPosts.link}
                  onChange={(e) =>
                    setnewSHowPosts({ ...newSHowPosts, link: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Body:</label>
                <input
                  type="text"
                  value={newSHowPosts.body}
                  onChange={(e) =>
                    setnewSHowPosts({ ...newSHowPosts, body: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setshowPosts(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={addPost}
                  className="bg-green-700 text-white px-4 py-2 rounded"
                >
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Posts;
