function get_top_ad_url() {
  // get the images page from epigram
  api.pages.browse({
    filter: "slug:[images-for-ads-on-epigram]"
  }).then((pages) => {
    // creates figure element for each advert
    var topBanner = document.createElement('figure')
    var sidebar = document.createElement('figure')
    // finds figures in page to array
    var adverts = [...pages[0].html.matchAll(/<figure.*?>(.*?)<\/figure>/g)]

    // first element is top banner
    topBanner.innerHTML = adverts[0][1]
    // second element is sidebar
    sidebar.innerHTML = adverts[1][1]

    // update href and img src
    try {
      document.getElementById("top-banner-sup").href = topBanner.children[1].innerText
      document.getElementById("top-banner-sup").firstChild.src = topBanner.children[0].src
      document.getElementById("sidebar-sup").href = sidebar.children[1].innerText
      document.getElementById("sidebar-sup").firstChild.src = sidebar.children[0].src
    } catch(e) {
      console.log("Currently using Google Ads")
    }
  })
}
// triggers advert images to be loaded from https://epigram.org.uk/images-for-ads-on-epigram/
get_top_ad_url()
