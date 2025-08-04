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
                ${episodeInfo}
                ${comment}
                ${reviewLink}
            </p>
            
            <img 
            src="${data.last_watched__poster_link}"
            width="40%"></img>
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
                    Currently reading
                    <br />
                    <a href="${data.currently_reading__goodreads_link}">${data.currently_reading__title}</a>
                    ${quote}
                </p>
                <img 
                src="${data.currently_reading__poster_link}" width="40%">
            `
    })
    .catch((e) => {
        console.error("Error fetching currently reading book:", e)
        const currentlyreading = document.getElementById("currentlyreading")
        if (!currentlyreading) return
        currentlyreading.innerHTML = ""
    })
}

// needed in order to keep the function live while navigating
// the website.
// reference: https://discord.com/channels/927628110009098281/1006391490962010152/threads/1322305204871368764
document.addEventListener("nav", () => {
    updateLastMovieWatched()
    updateCurrentBookReading()
})