import "./Kanyeimage.css";

const images = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/79/f6/11/79f6115f7acd11d494e029fac3c317dd.jpg",
    },

  ];
  
  function KanyeImage() {
    return (
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={`Kanye West ${image.id}`} />
        ))}
      </div>
    );
  }
  
  export default KanyeImage;