function updateNetWorth() {
    fetch("https://storage.googleapis.com/anselboero-website-prod-apis/net_worth.json")
    .then((response) => response.json())
    .then((data) => {
        const networth = document.getElementById("networth")
        if (!networth) return
        networth.innerHTML = `
            <p>
                Live Net Worth: ${data.net_worth} €
            </p>
        `
    })
    .catch(() => {
        const networth = document.getElementById("networth")
        if (!networth) return

        networth.innerHTML = ""
    })
}


function updateLastMovieWatched() {
    fetch("https://storage.googleapis.com/anselboero-website-prod-apis/last_movie_watched.json")
    .then((response) => response.json())
    .then((data) => {
        const lastmoviewatched = document.getElementById("lastmoviewatched")
        if (!lastmoviewatched) return
        
        const episodeInfo = data.last_watched__type === "episode" 
            ? `<br />${data.last_watched__series_title} - S${data.last_watched__series_season_number.padStart(2, '0')}E${data.last_watched__series_episode_number.padStart(2, '0')}` 
            : "";

        const comment = data.last_watched__comment 
            ? `<br /><i>${data.last_watched__comment}</i>` 
            : "";
        const reviewLink = data.last_watched__review_link
            ? `<br />Read my review <a href="${data.last_watched__review_link}">here</a>.`
            : "";

        
        lastmoviewatched.innerHTML = `
            <p>
                Recently watched
                <br />
                <a href="${data.last_watched__imdb_link}">${data.last_watched__title}</a>: ${data.last_watched__rating}
            </p>
            
            <img 
            src="${data.last_watched__poster_link}"
            width="40%"></img>
            <p>
                ${episodeInfo}
                ${comment}
                ${reviewLink}
            </p>
        `
    })
    .catch(() => {
        const nowplaying = document.getElementById("nowplaying")
        if (!nowplaying) return

        nowplaying.innerHTML = ""
    })
}

function updateCurrentBookReading() {
    fetch("https://storage.googleapis.com/anselboero-website-prod-apis/currently_reading_book.json")
    .then((response) => response.json())
    .then((data) => {
        const currentlyreading = document.getElementById("currentlyreading")
        if (!currentlyreading) return

        const quote = data.currently_reading__quote 
            ? `<br /><i>${data.currently_reading__quote}</i>` 
            : "";

        currentlyreading.innerHTML = `
                <p>
                    What I'm reading
                    <br />
                    <a href="${data.currently_reading__goodreads_link}">${data.currently_reading__title}</a>
                </p>
                <img 
                src="${data.currently_reading__poster_link}" width="40%"></img>
                <p>
                    ${quote}
                </p>

            `
    })
    .catch((e) => {
        console.error("Error fetching currently reading book:", e)
        const currentlyreading = document.getElementById("currentlyreading")
        if (!currentlyreading) return
        currentlyreading.innerHTML = ""
    })
}

function testBlock() {
    const testBlock1 = document.getElementById("testblock1")
    const testBlock2 = document.getElementById("testblock2")
    if (!testBlock1) return
    if (!testBlock2) return

    testBlock1.innerHTML = `
        <p>
            What I'm reading
            <br />
            <a href="https://www.goodreads.com/book/show/41038">The Rotters' club</a>
        </p>
        <img 
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320495527i/41038.jpg" width="40%">
        <p>
            This was in the days before men learned to discuss their feelings, of course. 
            And in the days before 
            bonding sessions between management and workforce were at all common. 
            They were pioneers, in a way, these three.
        </p>
    `

    testBlock2.innerHTML = `
        <p>
                Recently watched
                <br />
                <a href="https://www.imdb.com/title/tt16431966">Sometimes I think About Dying</a>: 7
            </p>
            <img 
            src="https://m.media-amazon.com/images/M/MV5BYzY2OTIzMjUtNmNlZC00YTg0LTgwZWUtN2UwMmMwZjdiODI3XkEyXkFqcGc@._V1_SX300.jpg"
            width="40%"></img>
        `
}

// needed in order to keep the function live while navigating
// the website.
// reference: https://discord.com/channels/927628110009098281/1006391490962010152/threads/1322305204871368764
document.addEventListener("nav", () => {
    updateLastMovieWatched()
    updateCurrentBookReading()
    testBlock()
})