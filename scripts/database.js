const database = {
    venues: [{
        id: 1,
        name: "Starwood Amphitheatre",
        address: "3839 Murfreesboro Rd, La Vergne, TN 37086",
        squareFootage: 350000,
        maximumOccupancy: 17137
    }, {
        id: 2,
        name: "Ascend Amphitheater",
        address: "310 1st Avenue South, Nashville, TN 37201",
        squareFootage: 36000,
        maximumOccupancy: 6800
    }, {
        id: 3,
        name: "EXIT/IN",
        address: "2208 Elliston Place, Nashville, TN 37203",
        squareFootage: 2500,
        maximumOccupancy: 500
    }, {
        id: 4,
        name: "Mercy Lounge",
        address: "1 Cannery Row, Nashville, TN 37203",
        squareFootage: 3000,
        maximumOccupancy: 750
    }],
    bands: [{
        id: 1,
        name: "Radiohead",
        numberOfMembers: 5,
        musicalGenre: "Indie Rock",
        yearFormed: 1992
    }, {
        id: 2,
        name: "Smashing Pumpkins",
        numberOfMembers: 4,
        musicalGenre: "Alternative",
        yearFormed: 1989
    }, {
        id: 3,
        name: "Dave Matthews Band",
        numberOfMembers: 5,
        musicalGenre: "Rock",
        yearFormed: 1994
    }, {
        id: 4,
        name: "The Beatles",
        numberOfMembers: 4,
        musicalGenre: "Rock and Roll",
        yearFormed: 1964
    }],
    bookings: [{
        id: 1,
        bandId: 3,
        venueId: 4,
        bookingDate: "08/05/2023"
    }, {
        id: 2,
        bandId: 1,
        venueId: 3,
        bookingDate: "07/23/2023"
    }, {
        id: 3,
        bandId: 4,
        venueId: 1,
        bookingDate: "05/16/2023"
    }, {
        id: 4,
        bandId: 2,
        venueId: 2,
        bookingDate: "08/10/2023"
    }]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}