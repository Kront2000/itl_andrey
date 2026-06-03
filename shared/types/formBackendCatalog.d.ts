
export interface WideCatalog {
    data: WideCardItem[];
}

export interface CatalogMainEndpointData {
    data: CatalogTitleCard[];
}

 export interface CatalogTitleCard {
    id: number;
    attributes: {
        name: string;
        parentId: number;
        count: number;
        img: string;
    };
    links: ResourceLink;
}

 export interface CatalogFullInfoEndpointData {
    data: {
        id: number;
        attributes: {
            name: string;
            count: number;
            image: string;
            images: {
                preview: { src: string };
            };
            description: string;
        };
        relationships: {
            items: {
                links: ResourceLink & {
                    next: string;
                    prev: string;
                };
            };
        };
    };
    links: ResourceLink;
    included: {
        filter: {
            attributes: FilterAttributes;
        };
        items: SharedProductData[];
        "reviews-statistics": {
            id: number;
            attributes: {
                rating: number;
                count: number;
            };
        }[];
        stores: {
            items: Record<string, StoreDetail | null>;
        };
    };
    meta: {
        seo: SEOMeta;
        og: OpenGraphMeta;
        breadcrumb: {
            attributes: { name: string };
            links: ResourceLink;
        }[];
        csrf: string;
    };
}

export interface FilterAttributes {
    prices: {
        name: string;
        type: string;
        code: string;
        values: NTypeValues;
    }[];
    properties: {
        name: string;
        type: string;
        code: string;
        values: LTypeValues[] | NTypeValues;
        expanded: boolean;
        toggle: boolean;
    }[];
}

 export interface LTypeValues {
    id: string;
    name: string;
    xml_id: string;
    value: string;
}

 export interface NTypeValues {
    min: { id: string; value: number };
    max: { id: string; value: number };
}

export interface CatalogTreeElement {
    data: CatalogTitleCard,
    subcategory: CatalogTreeElement[],
}