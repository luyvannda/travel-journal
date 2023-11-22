import globeIcon from "/small-globe-icon.png"

export default function Header() {
  return (
    <>
      <div id="header-component" className="container-fluid pt-3 pb-3 bg-danger">
        <h5 className="text-center text-white"><img className="pe-2" src={globeIcon} alt="A globe icon"></img>my travel journal.</h5>
      </div>
    </>
  )
}