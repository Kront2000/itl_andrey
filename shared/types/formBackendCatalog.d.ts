
 interface WideCatalog {
    data: WideCardItem[];
}

 interface CatalogMainEndpointData {
    data: CatalogTitleCard[];
}

 interface CatalogTitleCard {
    id: number;
    attributes: {
        name: string;
        parentId: number;
        count: number;
        img: string;
    };
    links: ResourceLink;
}

 interface CatalogFullInfoEndpointData {
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

 interface FilterAttributes {
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

 interface LTypeValues {
    id: string;
    name: string;
    xml_id: string;
    value: string;
}

 interface NTypeValues {
    min: { id: string; value: number };
    max: { id: string; value: number };
}