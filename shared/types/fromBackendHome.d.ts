

export interface FooterMenuData {
    data: {
        help: FooterMenuSection;
        company: FooterMenuSection;
    };
}

export interface FooterMenuSection {
    title: string;
    submenu: {
        id: number;
        name: string;
        links: ResourceLink;
    }[][];
}

 export interface FooterStoresData {
    data: {
        id: number;
        attributes: {
            name: string;
            address: string;
            schedule: { TEXT: string };
        };
    }[];
}

export  interface FooterSimpleNamedData {
    data: {
        id: number;
        attributes: { name: string };
        links?: ResourceLink;
    }[];
}


export  interface HeroSliderData {
    data: {
        id: number;
        attributes: {
            name: string;
            images: {
                mobile: { src: string };
                mob_image: string;
                desktop: { src: string };
                preview: string;
                detail: string;
            };
            text: {
                title: string;
                text: string;
                button_1_text: string;
            };
            styles: {
                text_position: string; 
                text_color: string;
            };
            links: {
                banner_links: string;
            };
        };
        links: ResourceLink;
    }[];
}

 export interface HeroAdvantagesData {
    data: HeroAdvantagesItem[];
}

export interface HeroAdvantagesItem {
    id: number;
        attributes: {
            name: string;
            text: string;
            image: string;
        };
        links: ResourceLink;
}

export  interface HeroHitsCategoryData {
    id: number;
    attributes: { name: string };
    links: ResourceLink;
    included: {
        "reviews-statistics": ReviewStaticData[];
    };
}

 export interface HeroHitsData {
    data: HeroHitsCategoryData[];
}

 export interface HomeHitsProductData {
    data: SharedProductData[];
    included: {
        "reviews-statistics": ReviewStatic[];
    };
}

 export interface HomePopularCategoryData {
    data: {
        id: string;
        attributes: {
            name: string;
            images: { preview: string };
        };
        links: ResourceLink;
    }[];
}

 export interface HomeBannerWithTextData {
    data: {
        id: number;
        attributes: {
            name: string;
            images: {
                preview: string;
                detail: string;
            };
            text: {
                title: string;
                text: string;
            };
            buttons: Record<string, { text: string; class: string; link: string }>;
            links: ResourceLink;
        };
    }[];
}

 export interface HomePopularBrands {
    data: {
        id: number;
        attributes: {
            name: string;
            main_page: {
                name: string;
                image: string;
                url: string;
            };
        };
        links: ResourceLink;
    }[];
}

 export interface HomeWideData {
    data: WideCardItem[];
}

 export interface HomeStockCardData {
    id: number;
    attributes: {
        name: string;
        images: {
            desktop: { src: string };
            mobile: { src: string };
        };
        title: string;
        active_period: string;
        discount: string;
        image: string;
    };
    links: ResourceLink;
}

export interface HomeStockData {
    data: HomeStockCardData[];
}

export interface HomeBlogData {
    data: {
        id: number;
        attributes: {
            title: string;
            image: string;
            detail_page: string;
        };
        links: ResourceLink;
    }[];
}

export interface HomeCompanyData {
    data: {
        id: string;
        attributes: {
            name: string;
            preview_text: string;
            images: {
                preview: string;
                detail: string;
            };
        };
        links: ResourceLink;
    }[];
}