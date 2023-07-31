import "./LoganImage.css";

const images = [
  {
    id: 1,
    url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/succession-logan-roy-brian-cox-2995954.jpg?tf=2048x",
  },
  {
    id: 2,
    url: "https://i.guim.co.uk/img/media/31e4501e1f425cc2c4422a303fa4930e663c0c1c/1301_249_4398_2639/master/4398.jpg?width=620&dpr=2&s=none",
  },
  {
    id: 3,
    url: "https://www.rollingstone.com/wp-content/uploads/2023/04/V_brian-cox-1.jpg?w=1581&h=1054&crop=1",
  },
  {
    id: 4,
    url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/brian-cox-como-logan-roy-succession-3045742.jpg?tf=2048x",
  },
  {
    id: 5,
    url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3a4fb28c-3054-11ed-96fb-e8279a2aa443.jpg?crop=4403%2C2477%2C29%2C570&resize=1500",
  },
];

function LoganImage() {

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];


  return (
    <div>
      <img key={randomImage.id} src={randomImage.url} alt={`Logan Roy ${randomImage.id}`} />
    </div>
  );
}

export default LoganImage;
