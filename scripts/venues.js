import { getVenues, getBands, getBookings } from "./database.js";

export const Venues = () => {
  const venues = getVenues();

  let venuesHTML = "<ul>";

  for (const venue of venues) {
    venuesHTML += `<li data-type="venue"
                           data-id="${venue.id}"
                           data-name="${venue.name}"
        >${venue.name}</li>`;
  }

  venuesHTML += "</ul>";

  return venuesHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const venueId = itemClicked.dataset.id;
  let bookingInfo = getBookings();
  let bandsBookedList = [];
  let message = "";

  if (itemClicked.dataset.type === "venue") {
    const bands = getBands();
    for (const booking of bookingInfo) {
      if (parseInt(venueId) === booking.venueId) {
        for (const band of bands) {
          if (band.id === booking.bandId) {
            bandsBookedList.push(band.name);
          }
        }
      }
    }
    if (bandsBookedList.length > 0) {
      message = `The following bands are booked at this venue: ${bandsBookedList}`;
    } else {
      message = "No bands booked at this venue.";
    }
    window.alert(message);
  }
});
