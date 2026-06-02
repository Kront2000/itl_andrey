export interface FooterPhonesData {
    data: {
        id: number, attributes: {
            name: string
        }
    }[]
}
export interface FooterSocialMediaData {
    data: {
        id: number, attributes: {
            name: string
        }, links: {
            self: string;
        }
    }[]
}
export interface FooterInfoData {
    data: {
        id: number,
        attributes: {
            name: string
        }, links: {
            self: string;
        }
    }[]
}

export interface ResourceLink {
    self: string;
}

export interface OpenGraphMeta {
    "og:title": string;
    "og:type": string;
    "og:site_name": string;
    "og:description": string;
    "og:url": string;
    "og:image": string;
}

export interface SEOMeta {
    title: string;
    description: string;
    keywords?: string;
    text_bottom?: string;
    text_top?: string;
}

export interface StoreDetail {
    name: string;
    address: string;
    phone: string;
    schedule: string;
}

export interface ReviewStatic {
    id: number;
    attributes: {
        rating: number;
    };
    count: number;
}

export interface SharedProductData {
    id: number;
    attributes: {
        name: string;
        product: {
            quantity: number;
            type: string;
            stores: {
                items: Record<string, { ID: string; AMOUNT: number } | null>;
            };
            price: {
                value: number;
                valueFormatted: string;
            };
            currency: string;
        };
        description: string;
        preview: string;
        image: string;
        stikers: string[]; 
        properties: Record<string, { name: string; value: number | string | string[] } | null>;
    };
    links: ResourceLink;
}


export interface WideCardItem {
    id: number;
    attributes: {
        name: string;
        images: {
            desktop: { src: string };
            preview: string;
        };
        text: {
            title: string;
            text: string;
        };
        styles: {
            text_position: string; 
            text_color: string;
        };
    };
}