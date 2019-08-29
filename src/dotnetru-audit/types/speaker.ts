export interface Speaker {
    id: string;
    name: string;
    description: string;

    avatarUrl: string;
    avatarSmallUrl: string;

    companyName?: string;
    companyUrl?: string;
    blogUrl?: string;
    constactsUrl?: string;
    twitterUrl?: string;
    habrUrl?: string;
    gitHubUrl?: string;
}
