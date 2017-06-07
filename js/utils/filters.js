'use strict';

const filterByDistrict = (list_stations,query) => {
  list_stations.empty();
  state.stations.forEach((station, index) => {
    if (station.district.toLowerCase() == query.toLowerCase()) {
      list_stations.append(Station (index, station.name, station.address, station.district));
    }
  });
}
