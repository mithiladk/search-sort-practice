import React, { useContext, useState } from 'react';
import { UserContext } from '../App';


function Home() {
  const { users, setUsers } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const [sorted, setSorted] = useState(false);
  const[editMode,setEditMode] = useState(false);
  const[newUser,setNewUser] = useState({id:'',name:"",email:""})

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ id: '', name: '', email: '' });
    setEditMode(false);
  };

  const handleSortChange = () => {
    const sortedNames = [...users].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setUsers(sortedNames);
    setSorted(true);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleRemoveUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={handleSearchChange}
      />

      <button onClick={handleSortChange}>Sort Names</button>
      {!editMode && (
        <button onClick={handleEditClick}> Add User</button>
      )}
      {editMode && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="ID"
            name="id"
            value={newUser.id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
       

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {sorted
            ? filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>
                  <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                </td> */}
              </tr>
            ))
            : users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                 <td>
                  <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
                </td>
                </td>
              </tr>
            ))}
        </tbody>

</table>
    </div>
  );
}

export default Home;
