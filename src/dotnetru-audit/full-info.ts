import { directories, downloadXmlFile, getFileUrl, getLogoUrl } from "./utils";

import { Friend } from "./types/friend";
import { Venue } from "./types/venue";
import { Meetup } from "./types/meetup";
import { Talk } from "./types/talk";
import { Community } from "./types/community";
import { Speaker } from "./types/speaker";

export function getCommunity(communityId: string): Promise<Community> {
    return downloadXmlFile(getFileUrl(directories.communities, `${ communityId }.xml`))
        .then(res => {
            res.logoUrl = getLogoUrl(res.id, false, false);
            res.logoBorderedUrl = getLogoUrl(res.id, false, true);
            res.logoWhiteUrl = getLogoUrl(res.id, true, false);
            res.logoWhiteBorderedUrl = getLogoUrl(res.id, true, true);

            return res as Community;
        });
}

export function getFriend(friendId: string): Promise<Friend> {
    return downloadXmlFile(getFileUrl(directories.friends, `${ friendId }/index.xml`))
        .then(res => {
            res.logoUrl = getFileUrl(directories.friends, `${ friendId }/logo.jpg`);
            res.logoSmallUrl = getFileUrl(directories.friends, `${ friendId }/logo.small.jpg`);

            return res as Friend;
        });
}

export function getMeetup(meetupId: string): Promise<Meetup> {
    return downloadXmlFile(getFileUrl(directories.meetups, `${ meetupId }.xml`))
        .then(res => {
            if (res.friendIds) {
                res.friendIds = res.friendIds.map((e: any) => e.friendId);
            }
            res.sessions = res.sessions.map((e: any) => e.session);

            return res as Meetup;
        });
}

export function getSpeaker(speakerId: string): Promise<Speaker> {
    return downloadXmlFile(getFileUrl(directories.speakers, `${ speakerId }/index.xml`))
        .then(res => {
            res.avatarUrl = getFileUrl(directories.speakers, `${ speakerId }/avatar.jpg`);
            res.avatarSmallUrl = getFileUrl(directories.speakers, `${ speakerId }/avatar.small.jpg`);

            return res as Speaker;
        });
}

export function getTalk(talkId: string): Promise<Talk> {
    return downloadXmlFile(getFileUrl(directories.talks, `${ talkId }.xml`))
        .then(res => {
            res.speakerIds = res.speakerIds.map((e: any) => e.speakerId);

            if (res.seeAlsoTalksIds) {
                res.seeAlsoTalksIds = res.seeAlsoTalksIds.map((e: any) => e.seeAlsoTalksId);
            }

            return res as Talk;
        });
}

export function getVenue(venueId: string): Promise<Venue> {
    return downloadXmlFile(getFileUrl(directories.friends, `${ venueId }.xml`))
        .then(res => res as Venue);
}
