import { getBands, getBookings, getVenues } from "./database.js";

export const Bands = () => {
  const bands = getBands();

  let bandsHTML = "<ul>";

  for (const band of bands) {
    bandsHTML += `<li data-type="band"
                           data-id="${band.id}"
                           data-name="${band.name}"
        >${band.name}</li>`;
  }

  bandsHTML += "</ul>";

  return bandsHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let bookingInfo = getBookings();
  let venueList = [];
  let message = "";

  if (itemClicked.dataset.type === "band") {
    const bandId = itemClicked.dataset.id;
    const venues = getVenues();
    for (const booking of bookingInfo) {
      if (parseInt(bandId) === booking.bandId) {
        for (const venue of venues) {
          if (venue.id === booking.venueId) {
            venueList.push(venue.name);
          }
        }
      }
    }
    if (venueList.length > 0) {
      message = `This band is playing at the following venues: ${venueList}`;
    } else {
      message = "This band is not playing anywhere.";
    }
    window.alert(message);
  }

});
