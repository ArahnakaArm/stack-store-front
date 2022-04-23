import { ProjectDetails } from "./dashboard-four.model";

export const PROJECTDATA: ProjectDetails[] = [
    {
        id: 1,
        name: 'App design and development',
        startDate: 'Jan 03, 2015',
        dueDate: 'Oct 12, 2018',
        teamMembers: [
            {
                image: 'assets/images/users/user-1.jpg',
                name: 'Mat Helme',
            },
            {
                image: 'assets/images/users/user-2.jpg',
                name: 'Michael Zenaty',
            },
            {
                image: 'assets/images/users/user-3.jpg',
                name: 'James Anderson',
            },
            {
                image: 'assets/images/users/user-5.jpg',
                name: 'Username',
            },
        ],
        status: 'Work in Progress',
        clients: 'Halette Boivin',
    },
    {
        id: 2,
        name: 'Coffee detail page - Main Page',
        startDate: 'Sep 21, 2016',
        dueDate: 'May 05, 2018',
        teamMembers: [
            {
                image: 'assets/images/users/user-3.jpg',
                name: 'Mat Helme',
            },
            {
                image: 'assets/images/users/user-4.jpg',
                name: 'Michael Zenaty',
            },
            {
                image: 'assets/images/users/user-5.jpg',
                name: 'Username',
            },
        ],
        status: 'Pending',
        clients: 'Durandana Jolicoeur',
    },
    {
        id: 3,
        name: 'Poster illustation design',
        startDate: 'Mar 08, 2018',
        dueDate: 'Sep 22, 2018',
        teamMembers: [
            {
                image: 'assets/images/users/user-2.jpg',
                name: 'Mat Helme',
            },
            {
                image: 'assets/images/users/user-6.jpg',
                name: 'Michael Zenaty',
            },
            {
                image: 'assets/images/users/user-7.jpg',
                name: 'Username',
            },
        ],
        status: 'Completed',
        clients: 'Lucas Sabourin',
    },
    {
        id: 4,
        name: 'Drinking bottle graphics',
        startDate: 'Oct 10, 2017',
        dueDate: 'May 07, 2018',
        teamMembers: [
            {
                image: 'assets/images/users/user-9.jpg',
                name: 'Mat Helme',
            },
            {
                image: 'assets/images/users/user-10.jpg',
                name: 'Michael Zenaty',
            },
            {
                image: 'assets/images/users/user-1.jpg',
                name: 'Username',
            },
        ],
        status: 'Work in Progress',
        clients: 'Donatien Brunelle',
    },
    {
        id: 5,
        name: 'Landing page design - Home',
        startDate: 'Coming Soon',
        dueDate: 'May 25, 2021',
        teamMembers: [
            {
                image: 'assets/images/users/user-5.jpg',
                name: 'Mat Helme',
            },
            {
                image: 'assets/images/users/user-8.jpg',
                name: 'Michael Zenaty',
            },
            {
                image: 'assets/images/users/user-2.jpg',
                name: 'James Anderson',
            },
            {
                image: 'assets/images/users/user-7.jpg',
                name: 'Username',
            },
        ],
        status: 'Coming Soon',
        clients: 'Karel Auberjo',
    },
]