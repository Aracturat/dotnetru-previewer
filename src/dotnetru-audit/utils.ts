import { LogoUrl } from "./types/logo-url";

import crossFetch from 'cross-fetch';
import xmlParser from 'fast-xml-parser';

export function camelizeKeys(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(v => camelizeKeys(v));
    } else if (obj !== null && obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (result, key) => {
                const newKey = key[0].toLowerCase() + key.slice(1);
                return {
                    ...result,
                    [newKey]: camelizeKeys(obj[key]),
                };
            },
            {},
        );
    }
    return obj;
}

export function downloadXmlFile(url: string): Promise<any> {
    return crossFetch(url)
        .then((response: any) => response.text())
        .then((str: string) => xmlParser.parse(str))
        .then((e: any) => e[Object.keys(e)[0]])
        .then((e: any) => camelizeKeys(e));
}

export function getLogoUrl(communityId: string, isWhite: boolean, isBordered: boolean) {
    let lowerCasedCommunityId = communityId.toLowerCase();

    let logoBaseUrl = 'https://raw.githubusercontent.com/AnatolyKulakov/SpbDotNet/master/Swag'
        + `/${lowerCasedCommunityId}-squared-logo${isWhite ? '-white': ''}${isBordered ? '-bordered': ''}`
        + `/${lowerCasedCommunityId}-squared-logo${isWhite ? '-white': ''}${isBordered ? '-br': ''}`;

    return {
        png200: `${logoBaseUrl}-200.png`,
        png800: `${logoBaseUrl}-800.png`,
        png5000: `${logoBaseUrl}-5000.png`,
        svg: `${logoBaseUrl}.svg`
    } as LogoUrl;
}

const rawFileBaseUrl = `https://raw.githubusercontent.com/DotNetRu/Audit/master/db`;

export function getFileUrl(directory: string, file: string): string {
    return `${ rawFileBaseUrl }/${ directory }/${ file }`;
}

export const directories = {
    friends: 'friends',
    communities: 'communities',
    meetups: 'meetups',
    talks: 'talks',
    venus: 'venus',
    speakers: 'speakers'
};

