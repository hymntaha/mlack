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
    users:[User!]!
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
    teams: [Team!]!
  }

  type Query {
    hi: String
  }
`;
