import locationMark from "/location-mark-icon.png"

export default function Card() {
  return (
    <div id="card-component" className="container">

      <img id="card-image" className="col-8 col-md-3 rounded-2 mx-auto d-block" src="https://source.unsplash.com/WLxQvbMyfas" alt="location image"></img>

      <div id="card-main" className="row mt-4 d-flex justify-content-center">
        <div id="location" className="col-8"  >
          <p className="mb-2">
            <img className="me-1" src={locationMark} alt="A small location mark icon"></img>
            JAPAN <span><a className="ms-2" href="#">View on Google Maps</a></span>
          </p>
        </div>

        <div id="title" className="col-8">
          <h1 className="fw-bold">Mount Fuji</h1>
        </div>

        <div id="date" className="col-8">
          <p className="fw-bold mb-2">12 Jan, 2021 - 24 Jan, 2021</p>
        </div>

        <div id="description" className="col-8">
          <p className="lh-base">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
    </div>
  )
}