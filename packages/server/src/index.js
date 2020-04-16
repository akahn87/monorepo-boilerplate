import {ApolloServer, gql} from 'apollo-server'
import commonFunction from '@draxt/common'

commonFunction()

console.log('Hello from the server')
console.log('Another Hello from the server')
console.log('Change only in server update')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'hey from resolver land',
  },
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
