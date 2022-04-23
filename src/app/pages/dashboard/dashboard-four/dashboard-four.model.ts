interface TeamMembers {
    id?: number;
    image: string;
    name: string;
}

export interface ProjectDetails {
    id: number;
    name: string;
    startDate: string;
    dueDate: string;
    teamMembers: TeamMembers[];
    status: string;
    clients: string;
}