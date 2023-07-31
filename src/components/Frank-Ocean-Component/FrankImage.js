import "./FrankImage.css";

const images = [
  {
    id: 1,
    url: "https://es.rollingstone.com/wp-content/uploads/2023/04/Un-nuevo-album-de-Frank-Ocean-podria-llegar-pronto.jpg",
  },
  {
    id: 2,
    url: "https://www.mondosonoro.com/wp-content/uploads/2017/12/nPAxc2.jpg",
  },
  {
    id: 3,
    url: "https://www.rollingstone.com/wp-content/uploads/2019/09/frank-ocean-next-album-lie.jpg?w=1581&h=1054&crop=1",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Frank_Ocean_2022_Blonded.jpg",
  },
  {
    id: 5,
    url: "https://es.rollingstone.com/wp-content/uploads/2022/07/Frank-Ocean-celebra-los-10-aos-de-Channel-Orange-con-nueva-musica.jpg",
  },
  {
    id: 6,
    url: "https://img.asmedia.epimg.net/resizer/AWBmZ6b14TN3DEdeeBqjKqrmybg=/1288x725/filters:focal(691x366:701x376)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/EVFVV3DBRJAPHMKLJ25EZ7OVIM.jpg",
  },
  {
    id: 7,
    url: "https://www.todomusica.org/imagenes/680x380/frank_ocean.webp",
  },
  {
    id: 8,
    url: "https://images.squarespace-cdn.com/content/v1/5a0dd6831f318dcf5130a0d5/1585930507185-5CD92KM7HAOVBGWRFLBR/image-asset.jpeg?format=2500w",
  },
  {
    id: 9,
    url: "https://www.billboard.com/wp-content/uploads/media/frank-ocean-grammys-smile-2016-billboard-1548.jpg?w=942&h=623&crop=1",
  },
  {
    id: 10,
    url: "https://media.gq.com/photos/5c2e6f47523c603ec00dd150/master/w_1600,c_limit/frank-ocean-cover-gq-february-2019-01.jpg",
  },
  {
    id: 11,
    url: "https://media1.popsugar-assets.com/files/thumbor/cdOAbQ5RHO5hLzclZlkCQSU_sdg=/fit-in/1584x1892/filters:format_auto():upscale()/2022/07/11/857/n/1922283/tmp_ZLh49I_fe5d60dd0bedf6fe_GettyImages-161471758.jpg",
  },
];

function FrankImage() {

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];


  return (
    <div>
      <img key={randomImage.id} src={randomImage.url} alt={`Frank Ocean ${randomImage.id}`} />
    </div>
  );
}

export default FrankImage;