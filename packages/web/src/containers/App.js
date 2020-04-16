import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'

const HELLO = gql`
  {
    hello
  }
`

function App() {
  const {loading, error, data} = useQuery(HELLO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <h2>{data.hello}</h2>
}

export default App
