import { Session } from "./session";

export interface Meetup {
    id: string;
    name: string;
    communityId: string;
    friendIds?: string[];
    venueId: string;
    sessions: Session[]
}
