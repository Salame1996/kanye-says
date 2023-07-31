import "./TupacImage.css";

const images = [
  {
    id: 1,
    url: "https://cdn.britannica.com/02/162002-050-02512608/Tupac-Shakur-1993.jpg",
  },
  {
    id: 2,
    url: "https://cadenaser.com/resizer/DsoE8dNqCCHDViiiRIL6v8U17bc=/736x414/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/4XVT2NBFP5M4LMYMFOPLGLXYDA.jpg",
  },
  {
    id: 3,
    url: "https://cnnespanol.cnn.com/wp-content/uploads/2023/07/Tupac.jpg?quality=100&strip=info&w=940&h=530&crop=1",
  },
  {
    id: 4,
    url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/54D3/production/_129951712_2pacgettyimages-76154363.jpg.webp",
  },
  {
    id: 5,
    url: "https://www.newframe.com/wp-content/uploads/2019/04/image-24-227.jpg",
  },
  {
    id: 6,
    url: "https://people.com/thmb/4b9m_mJ0huzuSyodT2uO5aKfJxo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/police-search-home-as-part-of-tupac-investigation-071823-01-f7723a9fb0b34bdca3284f463a3b1691.jpg",
  },
  {
    id: 7,
    url: "https://people.com/thmb/p9MeTZdUhNYjcgydAfwprHzzOLA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/tupac-walk-of-fame-star-060123-01-66c8ca19a916419db826e3fcda1e1e82.jpg",
  },
  {
    id: 8,
    url: "https://revistasantiago.cl/cms/wp-content/uploads/2021/02/Tupac-2.jpg",
  },
  {
    id: 9,
    url: "https://i.guim.co.uk/img/media/43585997f860c0d3eefce7a34480e55e53f6c574/0_0_2400_3045/master/2400.jpg?width=620&dpr=2&s=none",
  },
 
];

function TupacImage() {

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];


  return (
    <div>
      <img key={randomImage.id} src={randomImage.url} alt={`Tupac ${randomImage.id}`} />
    </div>
  );
}

export default TupacImage;
