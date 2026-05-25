

 interface ProductData {
    data: ProductResource;
    included: {
        stores: Record<string, StoreDetail>;
    };
    links: ResourceLink;
    meta: MetaInformation;
}

 interface MetaInformation {
    settings: {
        pate_type: "type_1"; 
    };
    info: {
        delivery: { delivery: string };
    };
    seo: {
        title: string;
        description: string;
    };
    og: OpenGraphMeta;
}

 interface ProductResource {
    id: number;
    attributes: Attributes;
}

 interface Attributes {
    name: string;
    article: string;
    description: string;
    product: ProductCommerce;
    images: ProductImages;
    tizers: Tizers[];
    properties: Record<string, { name: string; value: number | string | string[] } | null>;
    tabs: ProductTab[];
    stikers: { value: string[] };
    brand: Brand[];
    sale: Sale[];
}

 interface Tizers {
    id: number;
    attributes: {
        name: string;
        preview_text: string;
    };
    images: {
        preview: string;
    };
}

 interface Sale {
    id: string;
    attributes: { name: string };
    self: { link: string };
}

 interface Brand {
    id: number;
    attributes: {
        name: string;
        images: { preview: string };
    };
    links: ResourceLink;
}

interface ProductCommerce {
    quantity: number;
    currency: string;
    price: {
        value: number;
        valueFormatted: string;
    };
    stores: StoreStock[];
}

 interface ProductTab {
    title: string;
    info: string;
    sort: number;
}

 interface ProductImages {
    preview: { src: string; alt: string };
    detail: { src: string; alt: string };
    more: Array<{ src: string; alt: string }>;
}

 interface StoreStock {
    store_id: string;
    amount: string;
    text: string;
}

 interface ProductReviewsData {
    data: Review[];
    links: ResourceLink;
}

 interface Review {
    id: number;
    attributes: {
        created_at: string;
        author: string;
        rating: number;
        text: string;
        advantages: string;
        disadvantages: string;
        bought: boolean;
        user_experience: string;
    };
}

 interface ReviewStaticData {
    data: {
        id: number;
        attributes: { count: number };
    }[];
    meta: {
        rating: number;
    };
}