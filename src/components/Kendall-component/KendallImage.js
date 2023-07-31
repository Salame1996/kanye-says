import "./KendallImage.css";

const images = [
  {
    id: 1,
    url: "https://media.gq-magazine.co.uk/photos/5d77c16f60bd0400088c1f6a/master/w_1600,c_limit/20190910-Succession-06.jpg",
  },
  {
    id: 2,
    url: "https://depor.com/resizer/IvcJ1OUL4kkE4RNkNL40lJf_tJA=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K7JNC54U5NEKVOWY7ZPOU6MXOU.jpg",
  },
  {
    id: 3,
    url: "https://cdn.mos.cms.futurecdn.net/YKfBQR3n239PysvPr9WbNd-1920-80.jpg.webp",
  },
  {
    id: 4,
    url: "https://static.cinemax.com/2021-10/kendall-roy-s1-1920.jpg?w=1200",
  },
  {
    id: 5,
    url: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/05/Jeremy-Strong-Kendall-Roy-Succession-Finale.jpg",
  },
  {
    id: 6,
    url: "https://tvline.com/wp-content/uploads/2021/11/succession-jeremy-strong-kendall-roy-season-3-episode-3.jpg?w=620&h=420&crop=1",
  },
  {
    id: 7,
    url: "https://opoyi.com/wp-content/uploads/2023/05/FwvSZIbXgAAsh23.jpeg",
  },
  {
    id: 8,
    url: "https://www.binaural.es/wp-content/uploads/2020/05/kendall.jpg",
  },
  {
    id: 9,
    url: "https://static.tvtropes.org/pmwiki/pub/images/succession_kendall2.jpg",
  },
  {
    id: 10,
    url: "https://static.stereogum.com/uploads/2022/04/Kendall-Roy-1651239634.jpeg",
  },
  {
    id: 11,
    url: "https://www.jacketsjunction.com/wp-content/uploads/2023/04/Succession-S04-Kendall-Roy-Gray-Coat.webp",
  },
];

function KendallImage() {

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];


  return (
    <div>
      <img key={randomImage.id} src={randomImage.url} alt={`Kendall Roy ${randomImage.id}`} />
    </div>
  );
}

export default KendallImage;
