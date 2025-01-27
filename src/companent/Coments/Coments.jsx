import axios from "axios";
import React, { useEffect, useState } from "react";

function Coments() {
  const [coment, setComent] = useState();
  const [showMadaComent, setSHowMadaComent] = useState(false);
  const [newCment, setNewCment] = useState({ name: "", email: "", body: "" });
  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/comments")
      .then((res) => {
        // console.log(res.data);
        setComent(res.data);
      });
  }, []);
  if (!coment) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  const addUser = () => {
    const newId = coment.length + 1; 
    const newTodo = { id: newId, ...newCment }; 
    setComent([...coment, newTodo]);
    setSHowMadaComent(false);
    setNewCment({ name: "", email: "", body: "" }); 
  };
  
  return (
<div className="absolute left-80 top-20 m-auto text-center">
    <button   onClick={() => setSHowMadaComent(true)} className="text-white cursor-pointer bg-green-700 rounded-xl px-4 py-3 mb-4">
      + Qo'shish
    </button>

    <div className="border border-gray-500text-center mx-auto my-4">
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-500 px-4 py-2">ID</th>
            <th className="border border-gray-500 px-4 py-2">name</th>
            <th className="border border-gray-500 px-4 py-2">email</th>
            <th className="border border-gray-500 px-4 py-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {coment.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-500 px-4 py-2">{user.id}</td>
              <td className="border border-gray-500 px-4 py-2">{user.name
              }</td>
              <td className="text-red-900 border border-gray-500 px-4 py-2">
                {user.email}
              </td>
              <td className="border border-gray-500 px-4 py-2">
                {user.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {showMadaComent && (
        <div
          onClick={() => setSHowMadal(false)}
          className="fixed top-0 left-0 right-0 bottom-0   flex justify-center items-center "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg  w-96 "
          >
            <h2 className="text-xl font-bold mb-4">
              Yangi foydalanuvchini qo'shish
            </h2>
            <div className="mb-4">
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                value={newCment.name}
                onChange={(e) =>
                  setNewCment({ ...newCment, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="text"
                value={newCment.email}
                onChange={(e) =>
                  setNewCment({ ...newCment, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Body:</label>
              <input
                type="text"
                value={newCment.body}
                onChange={(e) =>
                  setNewCment({ ...newCment, body: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex justify-end">
            <button
                onClick={() => setSHowMadal(false)} 
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Bekor qilish
              </button>
              <button
                onClick={addUser} 
                className="bg-green-700 text-white px-4 py-2 rounded"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>
      )}
  </div>
  );
}

export default Coments;
