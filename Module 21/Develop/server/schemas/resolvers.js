const { User, Book } =require('../modles');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            it (context.user){
                const userData = await User.findOne({ _id: context.user._id})
                    .select('-__v -password')
                
                    return userData;
            }

            throw new AuthenticationError('You need to be logged in.');
        },
 },

 Mutation: {
    addUser: aync (parent, args) => {
        const user= await User.create(args);
        const token= signToken(user);
        return {token, user};
    }
    login: async (parent, {email, password}) => {
        const user = await User.findOne ({ email });

        if (!user) {
            throw new AuthenticationError('No User Found');
        
        if (!correctPw) {
            throw new AuthenticationError('Incorrect information');
        }

        const token = signToken(user);

        return { token, user };
        },

        saveBook:
    }
    
 }
