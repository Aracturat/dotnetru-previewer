export interface Talk {
    id: string;
    speakerIds: string[];
    title: string;
    description: string;

    seeAlsoTalksIds?: string[];
    codeUrl?: string;
    slidesUrl?: string;
    videoUrl?: string;
}
