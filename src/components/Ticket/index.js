import React from "react";
import style from "./cardStyleTicket.module.css";

const Ticket = ({
  logo,
  airlines_names,
  departure_city,
  departure_code,
  arrival_city,
  arrival_code,
  interval,
  transit,
  departure,
  arrive,
  price,
  facilities,
  onClick
}) => {
  const time = () => {
    if (departure && arrive) {
      departure = ConvertToSeconds(departure);
      arrive = ConvertToSeconds(arrive);
      let diff = Math.abs(arrive - departure);
      return secondsTohhmmss(diff);
    }
    function ConvertToSeconds(time) {
      var splitTime = time.split(":");
      return splitTime[0] * 3600 + splitTime[1] * 60;
    }
    function secondsTohhmmss(secs) {
      var hours = parseInt(secs / 3600);
      var seconds = parseInt(secs % 3600);
      var minutes = parseInt(seconds / 60);
      return hours + "  hours  " + minutes + "  minutes ";
    }
  };

  const imageUrls = [
    "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672061589/koper.png",
    "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672061634/burger.png",
    "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672061667/wifi.png",
  ];

  return (
    <div className={`${style.main} card mb-4 `}>
      <div className="card-body">
        <div className="d-flex">
          <img
            className={`${style.planeIcon} m-3`}
            src={logo}
            alt="maskapai-icon"
          />
          <p className="text-muted m-3 mt-4 fw-bold">{airlines_names}</p>
        </div>
        <div className="d-flex mt-3  justify-content-between">
          <div className="flex-column ms-3">
            <p className="p-0 m-0 h4">
              {departure_city} ({departure_code})
            </p>
            <p className="text-muted fs-6 fw-light">{departure}</p>
          </div>
          <div className="flex-column ms-3 me-3">
            <img
              src={
                "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672063590/plane.png"
              }
              alt="plane-lg"
            />
          </div>
          <div className="flex-column me-5">
            <p className="p-0 m-0 h4">
              {arrival_city} ({arrival_code})
            </p>
            <p className="text-muted fs-6 fw-light">{arrive}</p>
          </div>
          <div className="flex-row">
            <p className="p-0 m-0 text-muted fw-normal">{interval}</p>
            <p className="text-muted fw-light"> ({transit} transit)</p>
          </div>
          <div className="d-flex flex-column justify-content-between p-1 gap-2 h-100">
          {facilities?.map((facility, i) => (
                <div key={i}>
                    <img
                        src={imageUrls[i]}
                        alt={`facility-${i}`}
                    />
                </div>
          ))}
          </div>
          <div className="d-flex">
            <p className="text-muted m-2 ">
              <span className="price text-primary fw-bold">$ {price},00</span>
              /pax
            </p>
          </div>
          <button
            className={style.btnSelect}
            onClick={onClick}
            // as={Link}
            // to={`/DetailFlight?id=${item.id}`}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
