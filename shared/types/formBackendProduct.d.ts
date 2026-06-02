export interface PropertyItem {
  name: string;
  value: number | string | string[];
}

export interface ProductData {
    data: ProductResource;
    included: {
        stores: Record<string, StoreDetail>;
    };
    links: ResourceLink;
    meta: MetaInformation;
}

export interface MetaInformation {
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

export interface ProductResource {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
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

export interface Tizers {
    id: number;
    attributes: {
        name: string;
        preview_text: string;
    };
    images: {
        preview: string;
    };
}

export interface Sale {
    id: string;
    attributes: { name: string };
    self: { link: string };
}

export interface Brand {
    id: number;
    attributes: {
        name: string;
        images: { preview: string };
    };
    links: ResourceLink;
}

export interface ProductCommerce {
    quantity: number;
    currency: string;
    price: {
        value: number;
        valueFormatted: string;
    };
    stores: StoreStock[];
}

export interface ProductTab {
    title: string;
    info: string;
    sort: number;
}

export interface ProductImages {
    preview: { src: string; alt: string };
    detail: { src: string; alt: string };
    more: Array<{ src: string; alt: string }>;
}

export interface StoreStock {
    store_id: string;
    amount: string;
    text: string;
}

export interface ProductReviewsData {
    data: Review[];
    links: ResourceLink;
}

export interface Review {
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

export interface ReviewStaticData {
    data: {
        id: number;
        attributes: { count: number };
    }[];
    meta: {
        rating: number;
    };
}