const Result = (update) => {
  const result = $("<section class='result'></section>");
  const list_stations = $("<div class='list-stations'></div>");
  result.append(list_stations);
  return result;
}

const Station = (id, name, address, district, update) => {
  const station = $("<div class='station'></div>").attr("data-identifier", id);
  const name_station = $("<h3 class='name-station'>" + name + "</h3>");
  const information = $("<p class='information'></p>");
  const address_station = $("<span class='address-station'>" + address + "</span>");
  const line_jump = $("<br>");
  const district_station = $("<span class='district-station'>" + district + "</span>");
  const link = $("<a href=station_detail.html></a>");
  const icon = $("<span class='fa fa-map-o' aria-hidden='true'></span>");

  information.append(address_station);
  information.append(line_jump);
  information.append(district_station);
  station.append(name_station);
  station.append(information);
  link.append(icon);
  station.append(link);

  return station;
}

const Load_List_Stations = (list_stations) => {
  state.stations.forEach((station, index) => {
    list_stations.append(Station (index, station.name, station.address, station.district));
  });
}
const reRender = (list_stations) => {
  list_stations.empty();
  Load_List_Stations($(".list-stations"));
}
