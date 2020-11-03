const data = [
  {
    id: "https://www.primevideo.com/detail/0LTURNRIIF1SFJUX32I7XALS8U/ref=atv_hm_hom_1_c_8pZiqd_2_1",
    image_url: "https://cdn.ome.lt/lEIsF5I8-Hjuc-PVo5CEyI_gooU=/fit-in/1070x750/smart/filer_public/ce/cf/cecf2ee5-ac77-45b2-afd4-65a33b7d44d7/butcher.jpg",
    title: "The Boys",
    type: "Serie",
    streams: [
      /*=== QUANDO HOUVER MAIS DE UM SERVIÇO, ADICIONA-LO AQUI, APÓS A VÍRGULA, ABRINDO E FECHANDO CHAVES ===*/
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
      /*=== EXEMPLO ===*/
      /*=== { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/" }, ===*/
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0O733T1H6OITZW94X3B2NU9HNN/ref=atv_hm_hom_1_c_r1Fy1u_6_3",
    image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png",
    title: "John Wick",
    type: "Movie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0G0W6BJZ788WKCTROOHJ2ZGC1T/ref=atv_hm_hom_1_c_8pZiqd_2_3",
    image_url: "https://img.ibxk.com.br//ms/images/highlights/000/046/217/43615.jpg",
    title: "American Gods",
    type: "Serie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0TVNRGT07EHGOFK5R0VC0E7WOQ/ref=atv_hm_hom_1_c_8pZiqd_2_6",
    image_url: "https://www.cinemaepipoca.com.br/wp-content/uploads/2014/02/O-lobo-de-wall-street.jpg",
    title: "The Wolf of Wall Street",
    type: "Movie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0FFO7S7AIAAZELRTL8YM7ASN7H/ref=atv_hm_hom_1_c_lAPtVn_brws_10_1",
    image_url: "https://i.pinimg.com/originals/ff/be/f4/ffbef43552772cb808b766cbb6d05bb6.jpg",
    title: "Hanna",
    type: "Serie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0NUA5FMIB7LLIX0YAGAJFAZOKT/ref=atv_hm_hom_1_c_1pBUEa_brws_14_1",
    image_url: "https://upload.wikimedia.org/wikipedia/pt/e/e5/Transporter_3.jpg",
    title: "The Transporter",
    type: "Movie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0LLAAZGFX5FFP6TRRBIS4VDF1X/ref=atv_hm_hom_c_D2cIg8_brws_19_1",
    image_url: "https://images.squarespace-cdn.com/content/v1/58b866f417bffc4dc469acab/1595629277136-99C8V910FCBGWTLSU5GG/ke17ZwdGBToddI8pDm48kHZCI7Gw86yg4D5SaI-AiBEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdJLST2eZ85aQEPZfh2Ckaul8elWnhbSlPRTXBXlB2GSuiP8DDn0XNQBhpqH5_1kxzI/image-asset.jpeg",
    title: "Shrek",
    type: "Movie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "primevideo" },
    ]
  },
  {
    id: "https://www.primevideo.com/detail/0PM94DZZAKNSEKFXZZNK2OUCRX/ref=atv_hm_hom_1_c_8pZiqd_2_2",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91uOT1eNM+L._RI_.jpg",
    title: "Knives Out",
    type: "Movie",
    streams: [
      { name: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png", url: "https://www.primevideo.com/", key: "netflix" },
    ]
  },

]

$(document).ready(() => {
  let stream = 'all'
  const update = () => {
    const filter = $('#search').val()
    $('.cards').html('')
    const arr = data
      .filter(f => filter.length === 0 || new RegExp(`.*${filter}.*`, 'i').exec(f.title) || f.streams.find(f => new RegExp(`.*${filter}.*`, 'i').exec(f.key)))
      .filter(f => stream === 'all' || f.streams.find(f => f.key === stream))
    if (arr.length === 0) $('.cards').append(`<h3>No movies found</h3>`)
    else {
      arr.forEach(i => {
        const card = $(`
        <div class="card">
          <div class="card__image-container">
          <a href="${i.id}"><img src="${i.image_url}" alt=""></a>
          </div>
          <div class="card__content">
            <p>${i.title}</p>
          </div>
          <div class="card__streams"></div>
        </div>
        `)
        i.streams.forEach(i => card.find('.card__streams').append(`<a href="${i.url}"><img src="${i.name}" alt=""></a>`))
        card.hide()
        $('.cards').append(card)
      })
      $('.card').fadeIn(1000)
    }
  }
  update()
  $('#search').on('keyup', () => { stream = 'all'; update() })
  $('.filters').on('click', function () { stream = $(this).data('value'); update() })
})









/*=== SLIDE CAROUSEL ===*/
var slideIndex = 0
var slides = document.getElementsByClassName("mySlides")

showSlides()

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block"
  setTimeout(showSlides, 8000);
}

function currentSlide(no) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex = no
  slides[no - 1].style.display = "block"
}

function plusSlides(n) {
  var newslideIndex = slideIndex + n
  if (newslideIndex < 4 && newslideIndex > 0) {
    currentSlide(newslideIndex)
  }
}
