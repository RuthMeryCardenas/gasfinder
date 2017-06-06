const Result = (update) => {
  const result = $("<section class='result'></section>");

  return result;
}

const Station = (id, name, address, district, update) => {
  const station = $("<div class='station'></div>").attr("data-identifier", id);
  const name_station = $("<h3 class='name-station'>" + name + "</h3>");
  const information = $("<p class='information'></p>");
  const address_station = $("<span class='address-station'>" + address + "</span>");
  const line_jump = $("<br>");
  const district_station = $("<span class='district-station'>" + district + "</span>");

  information.append(address_station);
  information.append(line_jump);
  information.append(district_station);
  station.append(name_station);
  station.append(information);

  return station;
}

const Load_List_Stations = () => {
  const parent = $(".result");
  const list_stations = $("<div class='list-stations'></div>");
  state.stations.forEach((station, index) => {
    list_stations.append(Station (index, station.name, station.address, station.district));
  });
  parent.append(list_stations);
}
