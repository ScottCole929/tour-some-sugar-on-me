import { getBookings, getBands, getVenues} from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()


export const findBand = (booking, allBands) => {
    let hireBand = ""

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            hireBand = band
        }
    }
    return hireBand
}


export const findVenue = (booking, allVenues) => {
    let pickVenue = ""

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            pickVenue = venue
        }
    }
    return pickVenue
}

export const Bookings = () => {
    let bookingsHTML = ""
    bookingsHTML = "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        bookingsHTML += `<li data-type="booking"
                             data-id="${booking.id}"
                             data-bandid="${booking.bandId}"
        >${band.name} are playing at ${venue.name} on ${booking.bookingDate}.</li>`
    }

    bookingsHTML += "</ul>"

    return bookingsHTML
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let playingBands = getBands()
        
    if (itemClicked.dataset.type === "booking") {
        let bandInfo = ``

        for (const band of playingBands) {
            if (parseInt(itemClicked.dataset.bandid) === band.id)
                bandInfo +=  `\n
                              ${band.name}\n
                              ${band.numberOfMembers}\n
                              ${band.musicalGenre}\n
                              ${band.yearFormed}`

            }
            window.alert(`${bandInfo}`)
        }
    }
)
