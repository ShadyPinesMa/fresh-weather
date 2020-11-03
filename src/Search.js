import React from "react";
export default function Search() {
  return (
    <div className="Search">
      <div className="app-wrap">
        <div className="blanket">
          <form id="search-form">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  id="city-search"
                  placeholder="Search"
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-2">
                <button
                  type="submit"
                  id="search-button"
                  className="btn btn-success w-100"
                >
                  <i className="fas fa-search" id="search" /> Search
                </button>
              </div>
              <div className="col-2">
                <button
                  type="button"
                  id="current-location-button"
                  className="btn btn-success w-100"
                >
                  <i className="fas fa-map-marker-alt" id="location"></i>{" "}
                  Location
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
