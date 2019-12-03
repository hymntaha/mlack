export default `
  type Team {
    ownder: User!
    members: [User!]!
    channels: [Channel!]!
  }

  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Messages]!
  }  

  type Message {
    id: Int!
    text: String!
    user:User!
    channel: Channel!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    messages: Message!
    teams: [Team!]!
  }

  type Query {
    hi: String
  }
`;
