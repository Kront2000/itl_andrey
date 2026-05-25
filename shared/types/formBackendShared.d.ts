 interface ResourceLink {
    self: string;
}

 interface OpenGraphMeta {
    "og:title": string;
    "og:type": string;
    "og:site_name": string;
    "og:description": string;
    "og:url": string;
    "og:image": string;
}

 interface SEOMeta {
    title: string;
    description: string;
    keywords?: string;
    text_bottom?: string;
    text_top?: string;
}

 interface StoreDetail {
    name: string;
    address: string;
    phone: string;
    schedule: string;
}

 interface ReviewStatic {
    id: number;
    attributes: {
        rating: number;
    };
    count: number;
}

 interface SharedProductData {
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


interface WideCardItem {
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