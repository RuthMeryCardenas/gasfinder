'use strict';

const Search = (update) => {
  const search = $("<section class='search'></section>");
  const get_district = $("<div class='get-district'></div>");
  const icon = $("<i>icono</i>");
  const input = $("<input type='text' placeholder='Ingresa tu distrito a buscar'>");

  get_district.append(icon);
  get_district.append(input);
  search.append(get_district);

  input.on("keypress", (e) => {
    if (e.which === 13) {
      if (input.val() != "") {
        //si se ingresa un distrito
        //llamar filtro pasando el valor
        //renderizar lista de estaciones
      }else {
        //si no ingresa nada
        //llamar filtro mostrando ALL
      }
    }
  });
  return search;
}
