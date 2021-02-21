export const people = [
    {
        id: '0',
        name: 'Winne',
        age: 1,
        gender: 'Not human',
    },
    {
        id: '1',
        name: 'Jisu',
        age: 20,
        gender: 'female',
    },
    {
        id: '2',
        name: 'Jenny',
        age: 18,
        gender: 'female',
    },
];

export const getById = id => {
    const filteredPeople = people.filter((person) => person.id === String(id));
    return filteredPeople[0];
}