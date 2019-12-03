interface CityTypes {
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
    CityTypes,Location
}