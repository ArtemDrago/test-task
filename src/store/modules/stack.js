export const sitys = [
    {
        id:1,
        name: 'Moskov',
    },
    {
        id:2,
        name: 'Omsk',
    },
];

export const workshops = [
    {
        id: 1,
        sity_id: 1,
        name: 'workshop_1',
    },
    {
        id: 2,
        sity_id: 1,
        name: 'workshop_2',
    },
    {
        id: 3,
        sity_id: 2,
        name: 'workshop_3',
    },
];

export const workers = [
    {
        id: 1,
        name: 'Andru',
        workshop_id: 1,
        brigade_id: 2,
        shift_id: 2,
    },
    {
        id: 2,
        name: 'Vova',
        workshop_id: 1,
        brigade_id: 2,
        shift_id: 2,
    },
    {
        id: 3,
        name: 'Stas',
        workshop_id: 2,
        brigade_id: 2,
        shift_id: 2,
    },
    {
        id: 4,
        name: 'Anton',
        workshop_id: 2,
        brigade_id: 1,
        shift_id: 1,
    },
    {
        id: 5,
        name: 'Piter',
        workshop_id: 3,
        brigade_id: 2,
        shift_id: 2,
    },
    {
        id: 6,
        name: 'White',
        workshop_id: 3,
        brigade_id: 1,
        shift_id: 1,
    },
];

export const brigades = [
    {
        id: 1,
        name: 'brigade 1'
    },
    {
        id: 2,
        name: 'brigade 2'
    },
];
export const shifts = [
    {
        id: 1,
        name: '8:00 - 18:00',
    },
    {
        id: 2,
        name: '18:00 - 8:00',
    },
];