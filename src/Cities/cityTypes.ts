interface City {
    city: string,
    country: string,
    locations: Location[],
    id: number,
}
interface Location {
    name: string,
    info: string
}


export {
    City,Location
}