import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", city: "" }); 

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/users")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("API xatosi:", err);
      });
  }, []);

  const handleAddUser = () => {
    const newId = users.length + 1;
    const user = { id: newId, ...newUser };
    setUsers([...users, user]);
    setShowModal(false);
    setNewUser({ name: "", email: "", city: "" });
  };

  if (!users.length) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="absolute left-80 top-20 m-auto text-center">
      <button
        onClick={() => setShowModal(true)}
        className="text-white cursor-pointer bg-green-700 rounded-xl px-4 py-3 mb-4"
      >
        + Qo'shish
      </button>

      <div className="border border-gray-500 text-center mx-auto my-4">
        <table className="table-auto w-full border-collapse border border-gray-500">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-500 px-4 py-2">ID</th>
              <th className="border border-gray-500 px-4 py-2">Name</th>
              <th className="border border-gray-500 px-4 py-2">Email</th>
              <th className="border border-gray-500 px-4 py-2">Citi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-500 px-4 py-2">{user.id}</td>
                <td className="border border-gray-500 px-4 py-2">
                  {user.name}
                </td>
                <td className="text-red-900 border border-gray-500 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-500 px-4 py-2">{user.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
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
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">City:</label>
              <input
                type="text"
                value={newUser.state}
                onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)} 
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleAddUser} 
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

export default Users;
