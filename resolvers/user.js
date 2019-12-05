export default {
  Query: {
    getUser: (parent, {id}, {models}) => models.User.findOne({where:{id}}),
    allUsers: (parent, {id}, {models}) => models.User.findAll({where:{id}})
  },
  Mutation: {
    createUser:(parent, args, {models})=> models.User.create(args),
  },
}
