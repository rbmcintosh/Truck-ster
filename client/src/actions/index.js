export function loadTrucks() {
  return function (dispatch) {
    fetch("/trucks")
    .then( (response) => {
      return response.json();
    }).then((trucks) => {
      dispatch(trucksLoaded(trucks));
    });
  };
}
function trucksLoaded(trucks) {
  return {
    type: "TRUCKS_LOADED",
    value: trucks
  };
}

export function createTruck(v) {
  return function (dispatch) {
    fetch("/trucks", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadTrucks()));
  };
}

export function deleteTruck(id) {
  return function (dispatch) {
    fetch("/trucks/" + id, {
      method: "DELETE"
    }).then(() => dispatch(loadTrucks()));
  };
}