interface WideCatalog {
    data: {
        id: number,
        attributes: {
            name: string,
            images: {
                desktop: {
                    src: string,
                },
                preview: string,
            },
            text: {
                title: string,
                text: string,
            },
            styles: {
                text_position: string,
                text_color: string
            }
        }
    }[]
}

interface CatalogMainEndpointData {
    data: CatalogTitleCard[]
}

interface CatalogTitleCard {
    id: number,
    attributes: {
        name: string,
        parentId: number,
        count: number,
        img: string,
    },
    links: {
        self: string,
    }
}

interface CatalogFullInfoEndpointData {
    data: {
        id: number,
        attributes: {
            name: string,
            count: number,
            image: string,
            images: {
                preview: {
                    src: string,
                }
            },
            description: string,
        },
        relationships: {
            items: {
                links: {
                    self: string,
                }
            }
        }
    },
    links: {
        self: string
    },
    included: {
        filter: {
            attributes: {
                prices: {
                    name: string,
                    values: {
                        min: {
                            id: string,
                            value: number,
                        },
                        max: {
                            id: string,
                            value: number,
                        }
                    }
                }[],
                properties: {
                    name: string,
                    type: string,
                    code: string,
                    values: {
                        id: string,
                        name: string,
                        xml_id: string,
                        value: string,
                    }[],
                    expanded: boolean,
                    toggle: boolean,
                }[],
            }

        },
        items: SharedProductData[],
        "reviews-statistics": {
            id:number,
            attributes: {
                rating: number,
                count: number,
            }
        }[],
        stores: {
            items: Record<string, { name: string, address: string, phone: string, schedule: string } | null>
        },
        

    },
    meta: {
        seo: {
            title: string,
        },
        og: {
            "og:tite": string,
            "og:type": string,
            "og:site_name": string,
            "og:description": string,
            "og:url": string,
            "og:image": string,
        },
        breadcrumb: {
            attributes: {
                name: string,
            },
            links: {
                self: string,
            }
        }[],
        csrf: string,
    }
}