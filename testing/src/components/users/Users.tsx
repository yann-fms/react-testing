import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data)=> setUsers(data.map((user: {name:string}) =>user.name)))
        .catch(() => setError("error fetch users"));
    },[])
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
export default Users

