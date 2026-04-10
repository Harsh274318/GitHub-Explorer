import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import Context from './Context';

const Searchbar = () => {
  const [query, setQuery] = useState('')
  const obj = useContext(Context)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) {
        obj.setState(prev => ({ ...prev, data: [] }))
        return;
      }

      obj.setState(prev => ({ ...prev, loading: true }))
      if (query) {
        axios.get(`https://api.github.com/search/users?q=${query}`)
          .then((res) => {
            obj.setState(prev => ({ ...prev, data: res.data.items, loading: false }))
            // obj.setState(prev => ({ ...prev, loading: false }))
          })
          .catch((err) => {
            console.log(err)
            obj.setState(prev => ({ ...prev, loading: false }))

          })
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [query])

  return (
    <div className='searchbar-div'>
      <input className='search-bar' onChange={(e) => setQuery(e.target.value)} value={query} type='text' placeholder='search github user' />
    </div>
  )
}

export default Searchbar