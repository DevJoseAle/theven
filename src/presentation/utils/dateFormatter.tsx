

export const dateFormatter = (date: string) => {

    return new Date(date).toLocaleDateString('es-ES');
}