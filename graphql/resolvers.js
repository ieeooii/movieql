const winnie = {
    name: 'Winne',
    age: 1,
    gender: 'Not human',
};

const resolvers = {
    Query: {
        person: () => winnie,
    }
};

export default resolvers;