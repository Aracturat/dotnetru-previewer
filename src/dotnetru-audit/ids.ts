import { directories } from "./utils";

import Octokit from '@octokit/rest';

function getDirectoryFiles(directory: string, accessToken?: string): Promise<string[]> {
    const octokit = new Octokit({
        auth: accessToken
    });

    return octokit.repos
        .getContents({
            owner: 'DotNetRu',
            repo: 'Audit',
            path: `db/${ directory }`
        })
        .then((result: any) => result.data.map((e: any) => e.name))
        .then((result: string[]) => result.map(e => e.replace('.xml', '')));
}

export function getCommunityIds(accessToken?: string): Promise<string[]> {
    return getDirectoryFiles(directories.communities, accessToken);
}

export function getFriendIds(accessToken?: string): Promise<string[]> {
    return getDirectoryFiles(directories.friends, accessToken);
}

export function getMeetupIds(accessToken?: string): Promise<string[]> {
    return getDirectoryFiles(directories.meetups, accessToken);
}

export function getSpeakerIds(accessToken?: string): Promise<string[]> {
    return getDirectoryFiles(directories.speakers, accessToken);
}

export function getTalkIds(accessToken?: string): Promise<string[]> {
    return getDirectoryFiles(directories.talks, accessToken);
}

export function getVenueIds(accessToken?: string): Promise<string[]> {
    return getDirectoryFiles(directories.venus, accessToken);
}

