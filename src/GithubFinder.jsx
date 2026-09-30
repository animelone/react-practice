import { useState, useEffect } from 'react'

function GithubFinder() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchUser(username) {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      )

      if (!response.ok) {
        throw new Error('GitHub user not found')
      }

      const data = await response.json()
      setUser(data)
    } catch (error) {
      setUser(null)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchUser(username)
  }

  useEffect(() => {
  fetchUser('octocat')
}, [])

 return (
  <div>
    <h1>GitHub Finder</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>

    {loading && <p>Loading...</p>}

    {error && <p>{error}</p>}

    {user && (
      <div>
        <img
          src={user.avatar_url}
          alt={user.name}
          width="150"
        />

        <h2>{user.name}</h2>

        <p>{user.bio}</p>
      </div>
    )}
  </div>
)
}

export default GithubFinder