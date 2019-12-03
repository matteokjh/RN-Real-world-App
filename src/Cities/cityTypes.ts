interface CityTypes {
    city: string,
    country: string,
    locations: Location[],
    id: string,
}
interface Location {
    name: string,
    info: string
}


export {
    CityTypes,Location
}