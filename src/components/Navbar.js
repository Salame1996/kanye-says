import React from "react";

const navbar = [
  {
    id: 1,
    url: "https://hips.hearstapps.com/hmg-prod/images/succession-roman-1-64010771d6fe0.jpg?crop=0.492xw:1.00xh;0.210xw,0&resize=980:*",
    name: "Roman Roy",
  },
  {
    id: 2,
    url: "https://www.rollingstone.com/wp-content/uploads/2019/09/frank-ocean-next-album-lie.jpg?w=1581&h=1054&crop=1",
    name: "Frank Ocean",
  },
  {
    id: 3,
    url: "https://d.newsweek.com/en/full/1592243/succession.webp?w=790&f=749fbb77436aacc6e8f2e6b655219508",
    name: "Kendall Roy",
  },
  {
    id: 4,
    url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/succession-logan-roy-brian-cox-2995954.jpg?tf=2048x",
    name: "Logan Roy",
  },
  {
    id: 5,
    url: "https://phantom-elmundo.unidadeditorial.es/fca8dc0f2ff2a804b334ee7cabe2aa2b/crop/0x27/2362x1601/resize/746/f/webp/assets/multimedia/imagenes/2023/07/19/16897536870825.jpg",
    name: "Tupac",
  },
  {
    id: 6,
    url: "https://indiehoy.com/wp-content/uploads/2019/07/thom-yorke.jpg",
    name: "Thom Yorke",
  },
];

function Navbar() {
    return (
      <div style={{ display: "flex", flexDirection: "line", alignItems: "center", justifyContent: "center" }}>
        {navbar.map((item) => (
          <div key={item.id} style={{ margin: "10px 0", textAlign: "center",padding:'10px'}}>
            <img
              src={item.url}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
            <h3 style={{ color: "white", marginTop: "10px" }}>{item.name}</h3>
          </div>
        ))}
      </div>
    );
  }
export default Navbar;

