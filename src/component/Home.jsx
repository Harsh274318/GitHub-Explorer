import React, { useContext, useEffect, useState } from 'react'
import Searchbar from './Searchbar'
// import axios from 'axios'
import Userlist from './UserList'
import Context from './Context'
import UserDetails from './UserDetails'


const Home = () => {

  const { state, setState } = useContext(Context)
  return (
    <div className="container">

      {/* LEFT */}
      <div className="left">
        <Searchbar />

        {state.loading && <h2>loading...⌛</h2>}

        {state.data && !state.loading && state.data.length === 0 && (
          <p>User not found 👤</p>
        )}

        {state.data?.map(user => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => setState(prev => ({
              ...prev,
              selectedUser: user.login
            }))}
          >
            <img src={user.avatar_url} alt="avatar" />
            <p>{user.login}</p>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="right">
        <UserDetails />
      </div>

    </div>
  )
}

export default Home
{/* <Userlist key={user.id} user={user} /> */ }
{/* <div >
  <Searchbar />

  {state.loading && <h2>loading...⌛</h2>}

  {state.data && !state.loading && state.data.length === 0 && <p>User not found 👤</p>}


  {state.data?.map(user => (

    <div key={user.id} className='user-card'
      onClick={() => obj.setState(prev => ({
        ...prev,
        selectedUser: user.login
      }))}
    >
      <img src={user.avatar_url} alt="avatar" />
      <p>{user.login}</p>
    </div >


  ))}
  <UserDetails />
</div > */}