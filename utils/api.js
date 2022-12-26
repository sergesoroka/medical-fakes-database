import { useState, useEffect } from 'react'

function useApi() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://apex.oracle.com/pls/apex/sergespace/video_ua/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  return { data, isLoading }
}

export default useApi;