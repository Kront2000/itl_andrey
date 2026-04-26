interface SharedProductData {
    id: number,
    attributes: {
        name: string,
        product: {
            quantity: number,
            type: string,
            stores: {
                items: Record<string, { ID: string, AMOUNT: number } | null>
            },
            price: {
                value: number,
                valueFormatted: string
            },
            currency: string
        },
        description: string,
        preview: string,
        image: string,
        stikers: string[],
        properties: Record<string, { name: string, value: number | string | string[] } | null>
    }
    links: {
        self: string,
    }
}