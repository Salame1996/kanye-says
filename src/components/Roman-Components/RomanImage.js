import "./RomanImage.css";

const images = [
  {
    id: 1,
    url: "https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2022/06/21051854/roman-2x10-1.jpg",
  },
  {
    id: 2,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x1.jpg",
  },
  {
    id: 3,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x2.jpg",
  },
  {
    id: 4,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x3.jpg",
  },
  {
    id: 5,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x5.jpg",
  },
  {
    id: 6,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x6.jpg",
  },
  {
    id: 7,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x7.jpg",
  },
  {
    id: 8,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x9.jpg",
  },
  {
    id: 9,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-1x10.jpg",
  },
  {
    id: 10,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-2x1.jpg",
  },
  {
    id: 11,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-2x5.jpg",
  },
  {
    id: 12,
    url: "https://cdn.pastemagazine.com/www/articles/2021/10/15/roman-2x9.jpg",
  },
];

function RomanImage() {

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];


  return (
    <div>
      <img key={randomImage.id} src={randomImage.url} alt={`Kanye West ${randomImage.id}`} />
    </div>
  );
}

export default RomanImage;
