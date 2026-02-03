export const formatCurrency = (value: number, location: string = 'pt-BR', currency: string = 'BRL') => {
    return new Intl.NumberFormat(location, {
        style: "currency",
        currency: currency
    }).format(value);
}