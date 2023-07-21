import "./Kanyeimage.css";

const images = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/79/f6/11/79f6115f7acd11d494e029fac3c317dd.jpg",
  },
  {
    id: 2,
    url: "https://assets3.cbsnewsstatic.com/hub/i/r/2022/10/07/e17c01c4-5ac2-4c3a-aa88-2022a785a92f/thumbnail/620x413/ce00bd1eb4989bcc446adb7158d6e001/gettyimages-1429667472.jpg?v=8be0a296491a12ce38351fd824e37a16#%22%20alt=%22Givenchy%20:%20Front%20Row%20-%20Paris%20Fashion%20Week%20-%20Womenswear%20Spring/Summer%202023%20%22%20height=%22413%22%20width=%22620%22%20class=%22%20lazyloaded%22%20data-srcset=%22https://assets3.cbsnewsstatic.com/hub/i/r/2022/10/07/e17c01c4-5ac2-4c3a-aa88-2022a785a92f/thumbnail/620x413/ce00bd1eb4989bcc446adb7158d6e001/gettyimages-1429667472.jpg?v=8be0a296491a12ce38351fd824e37a16%201x,%20https://assets1.cbsnewsstatic.com/hub/i/r/2022/10/07/e17c01c4-5ac2-4c3a-aa88-2022a785a92f/thumbnail/1240x826/e5a0726270949a2fe4905490e3c2bd99/gettyimages-1429667472.jpg?v=8be0a296491a12ce38351fd824e37a16%202x%22%20srcset=%22https://assets3.cbsnewsstatic.com/hub/i/r/2022/10/07/e17c01c4-5ac2-4c3a-aa88-2022a785a92f/thumbnail/620x413/ce00bd1eb4989bcc446adb7158d6e001/gettyimages-1429667472.jpg?v=8be0a296491a12ce38351fd824e37a16%201x,%20https://assets1.cbsnewsstatic.com/hub/i/r/2022/10/07/e17c01c4-5ac2-4c3a-aa88-2022a785a92f/thumbnail/1240x826/e5a0726270949a2fe4905490e3c2bd99/gettyimages-1429667472.jpg?v=8be0a296491a12ce38351fd824e37a16",
  },
  {
    id: 3,
    url: "https://i.redd.it/untnsaah6sl31.jpg",
  },
  {
    id: 4,
    url: "https://celebcandle.com/cdn/shop/products/Kanye-Final-Small_1080x.jpg?v=1566512560",
  },
  {
    id: 5,
    url: "https://consequence.net/wp-content/uploads/2016/01/screen-shot-2016-01-29-at-9-24-24-am.png",
  },
];

function KanyeImage() {

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];


  return (
    <div>
      <img key={randomImage.id} src={randomImage.url} alt={`Kanye West ${randomImage.id}`} />
    </div>
  );
}

export default KanyeImage;
