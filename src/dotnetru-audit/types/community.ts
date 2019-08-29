import { LogoUrl } from "./logo-url";

export interface Community {
    id: string;
    name: string;
    city: string;
    timeZone: string;

    logoUrl: LogoUrl;
    logoBorderedUrl: LogoUrl;
    logoWhiteUrl: LogoUrl;
    logoWhiteBorderedUrl: LogoUrl;

    vkUrl?: string;
    twitterUrl?: string;
    telegramChannelUrl?: string;
    telegramChatUrl?: string;
    meetupComUrl?: string;
    timePadUrl?: string;
}
