

interface FooterMenuData {
    data: {
        help: FooterMenuSection;
        company: FooterMenuSection;
    };
}

interface FooterMenuSection {
    title: string;
    submenu: {
        id: number;
        name: string;
        links: ResourceLink;
    }[][];
}

 interface FooterStoresData {
    data: {
        id: number;
        attributes: {
            name: string;
            address: string;
            schedule: { TEXT: string };
        };
    }[];
}

 interface FooterSimpleNamedData {
    data: {
        id: number;
        attributes: { name: string };
        links?: ResourceLink;
    }[];
}


 interface HeroSliderData {
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
                text_position: string; // Исправлено "text_positon"
                text_color: string;
            };
            links: {
                banner_links: string;
            };
        };
        links: ResourceLink;
    }[];
}

 interface HeroAdvantagesData {
    data: {
        id: number;
        attributes: {
            name: string;
            text: string;
            image: string;
        };
        links: ResourceLink;
    }[];
}

 interface HeroHitsCategoryData {
    id: number;
    attributes: { name: string };
    links: ResourceLink;
    included: {
        "reviews-statistics": ReviewStaticData[];
    };
}

 interface HeroHitsData {
    data: HeroHitsCategoryData[];
}

 interface HomeHitsProductData {
    data: SharedProductData[];
    included: {
        "reviews-statistics": ReviewStatic[];
    };
}

 interface HomePopularCategoryData {
    data: {
        id: string;
        attributes: {
            name: string;
            images: { preview: string };
        };
        links: ResourceLink;
    }[];
}

 interface HomeBannerWithTextData {
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

 interface HomePopularBrands {
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

 interface HomeWideData {
    data: WideCardItem[];
}

 interface HomeStockCardData {
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

 interface HomeStockData {
    data: HomeStockCardData[];
}

 interface HomeBlogData {
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

 interface HomeCompanyData {
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