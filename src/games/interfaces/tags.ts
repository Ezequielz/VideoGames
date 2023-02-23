export interface Tags {
    count:    number;
    next:     string;
    previous: null;
    results:  Tag[];
}

export interface Tag {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    language:         Language;
    games:            Game[];
}

export interface Game {
    id:    number;
    slug:  string;
    name:  string;
    added: number;
}

export enum Language {
    Eng = "eng",
}
