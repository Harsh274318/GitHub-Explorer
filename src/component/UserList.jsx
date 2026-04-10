import React from 'react'

const Userlist = ({ user }) => {
  return (
    <div className='user-card'>
      <img src={user.avatar_url} alt="avatar" />
      <p>{user.login}</p>
    </div>
  )
}

export default Userlist