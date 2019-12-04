export default `
 type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Messages]!
    users:[User!]!
  }  
`;
