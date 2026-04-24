interface FooterMenuData {
    data: {
        help: {
            title: string,
            submenu: {
                id: number,
                name: string,
                links: {
                    self: string,
                }
            }[][]
        },
        company: {
            title: string,
            submenu: {
                id: number,
                name: string,
                links: {
                    self: string,
                }
            }[][]
        },
    }
}

interface FooterStoresData {
    data: {
        id: number,
        attributes: {
            name: string,
            address: string,
            schedule: {
                TEXT: string,
            }
        }
    }[]
}

interface FooterPhonesData {
    data: {
        id: number, attributes: {
            name: string
        }
    }[]
}
interface FooterSocialMediaData {
    data: {
        id: number, attributes: {
            name: string
        }, links: {
            self: string;
        }
    }[]
}
interface FooterInfoData {
    data: {
        id: number,
        attributes: {
            name: string
        }, links: {
            self: string;
        }
    }[]
}

interface HeroSliderData {
    data: {
        id: number,
        attributes: {
            name: string,
            images: {
                mobile: {
                    src: string,
                },
                mob_image: string,
                desktop: {
                    src: string
                },
                preview: string,
                detail: string,
            },
            text: {
                title: string,
                text: string,
                button_1_text: string,
            },
            styles: {
                text_positon: string,
                text_color: string, 
            },
            links: {
                banner_links: string,
            }
        },
        links: {
            self: string,
        }
    }[]
}

interface HeroAdvantagesData {
    data: {
        id: number,
        attributes: {
            name: string,
            text: string,
            image: string,
        }
        links: {
            self: string,
        }
    }[]
}



interface HeroHitsCategoryData {
    
        id: number,
        attributes: {
            name: string,
        }
        links: {
            self: string
        }
    
}

interface HeroHitsData {
    data: HeroHitsCategoryData[];
}



interface HomeHitsProductData {
    data: SharedProductData[],
    included: {
        "reviews-statistics":
        {
            id: number,
            attributes: {
                rating: number
            },
            count: number
        }[]
    }
}

interface HomePopularCategoryData {
    data: {
        id: string,
        attributes: {
            name: string,
            images: {
                preview: string,
            }
        },
        links: {
            self: string
        }
    }[]
}

interface HomeBannerWithTextData {
    data: {
        id: number,
        attributes: {
            name: string,
            images: {
                preview: string,
                detail: string,
            },
            text: {
                title: string,
                text: string,
            },
            buttons: Record<string, { text: string, class: string, link: string }>,
            links: {
                self: string
            }

        }
    }[]
}

interface HomePopularBrends {
    data: {
        id: number,
        attributes: {
            name: string,
            main_page: {
                name: string,
                image: string,
                url: string,
            },
        }
        links: {
            self: string,
        }
    }[]
}

interface HomeWideData {
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
                "text_positon": string,
                "text_color": string,
            }
        }
    }[]
}

interface HomeStockCardData {

    id: number,
    attributes: {
        name: string,
        images: {
            desktop: {
                src: string,
            }
            mobile: {
                src: string,
            }
        },
        title: string,
        active_period: string,
        discount: string,
        image: string,
    },
    links: {
        self: string,
    }

}

interface HomeStockData {
    data: HomeStockCardData[]
}

interface HomeBlogData {
    data: {
        id: number,
        attributes: {
            title: string,
            image: string,
            detail_page: string,
        },
        links: {
            self: string,
        }
    }[]
}

interface HomeCompanyData {
    data: {
        id: string,
        attributes: {
            name: string,
            preview_text: string,
            images: {
                preview: string,
                detail: string,
            },


        },
        links: {
            self: string,
        }
    }[]
}