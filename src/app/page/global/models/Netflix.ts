export interface NetFlix {
    nav: Nav;
    hero: Film;
}

export interface Nav {
    logo: Image;
}

export interface Film {
    title: string;
    imgGallery: Image[]
}

export interface Image {
    src: string;
    alt: string;
}
