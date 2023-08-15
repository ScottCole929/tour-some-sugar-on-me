import { Venues } from "./venues.js"
import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Current Bookings</h2>
        ${Bookings()}
    </section>
</article>
<article class="sidebyside">
    <section>
        <h2>Available Venues</h2>
        ${Venues()}
    </section>
    <section>
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`

// Wrapped Venus and Bands in a separate article and named the class SIDEBYSIDE
// and need to target this in CSS for styling purposes

mainContainer.innerHTML = applicationHTML