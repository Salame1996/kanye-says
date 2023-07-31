import "./ThomImage.css";

const images = [
  {
    id: 1,
    url: "https://pyxis.nymag.com/v1/imgs/b4c/02b/dfd4e2c39ae1784d33044f487ec40b6237-09-thom-yorke.2x.rsquare.w330.jpg",
  },
  {
    id: 2,
    url: "https://static01.nyt.com/images/2018/09/10/arts/10playlist/merlin_141076701_ab33bfea-f699-4b7b-984d-e07124a9f738-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    id: 3,
    url: "https://i.guim.co.uk/img/media/875d215dc3b37c89708e4e19e2818e9d51d163b7/628_0_1944_1167/master/1944.jpg?width=620&dpr=2&s=none",
  },
  {
    id: 4,
    url: "https://www.rockaxis.com/img/newsList/1219412.jpg",
  },
  {
    id: 5,
    url: "https://estaticos-cdn.elperiodico.com/clip/f1348c85-6037-44e0-b319-298f40846e69_alta-libre-aspect-ratio_default_0.jpg",
  },
  {
    id: 6,
    url: "https://www.ultrabrit.com/wp-content/uploads/2022/03/Thom-Yorke.jpg",
  },
  {
    id: 7,
    url: "https://highprofiles.info/wp-content/uploads/2016/04/Yorke-main.jpg",
  },

  {
    id: 9,
    url: "https://indiehoy.com/wp-content/uploads/2019/07/thom-yorke.jpg",
  },
];

function ThomYorkeImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <div>
      <img
        key={randomImage.id}
        src={randomImage.url}
        alt={`Thom Yorke ${randomImage.id}`}
      />
    </div>
  );
}

export default ThomYorkeImage;
