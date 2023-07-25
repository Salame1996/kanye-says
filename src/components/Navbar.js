import React from "react";
import './Navbar.css'
import { Link} from "react-router-dom";

const navbar = [
    {
        id: 7,
        url: "https://www.highsnobiety.com/static-assets/thumbor/65wttSNsU0r89G6irsIXlW_EWwM=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2022/02/11223811/kanye-west-social-media-reactions-kim-billie-.jpg",
        name: "Kanye West",
        link:""
      },
  {
    id: 1,
    url: "https://hips.hearstapps.com/hmg-prod/images/succession-roman-1-64010771d6fe0.jpg?crop=0.492xw:1.00xh;0.210xw,0&resize=980:*",
    name: "Roman Roy",
    link:"roman-roy"
  },
  {
    id: 2,
    url: "https://www.rollingstone.com/wp-content/uploads/2019/09/frank-ocean-next-album-lie.jpg?w=1581&h=1054&crop=1",
    name: "Frank Ocean",
    link:"frank-ocean"
  },
  {
    id: 3,
    url: "https://d.newsweek.com/en/full/1592243/succession.webp?w=790&f=749fbb77436aacc6e8f2e6b655219508",
    name: "Kendall Roy",
    link:"kendall-roy"
  },
  {
    id: 4,
    url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/succession-logan-roy-brian-cox-2995954.jpg?tf=2048x",
    name: "Logan Roy",
    link:"logan-roy"
  },
  {
    id: 5,
    url: "https://phantom-elmundo.unidadeditorial.es/fca8dc0f2ff2a804b334ee7cabe2aa2b/crop/0x27/2362x1601/resize/746/f/webp/assets/multimedia/imagenes/2023/07/19/16897536870825.jpg",
    name: "Tupac",
    link:"tupac"
  },
  {
    id: 6,
    url: "https://indiehoy.com/wp-content/uploads/2019/07/thom-yorke.jpg",
    name: "Thom Yorke",
    link:"thom-yorke"
  },
];


function Navbar() {
    return (
      <div className="navbar-container">
        {navbar.map((item) => (
          <div key={item.id} className="navbar-item">
            <Link to={`/${item.link}`} style={{ textDecoration: "none" }}>
              <img src={item.url} alt="" className="navbar-image" />
              <h3 className="navbar-name">{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default Navbar;
  
  
  
  
  
  
  
