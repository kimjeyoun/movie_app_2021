import React from "react";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e83052e72f16e0ec45df3d996ba5f499017ebdfe7be4193c64b6401588aeebef11bd33984dfe11215e3b7d10b6e0daf1cd7133",
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df65640f2470b6d8c70694e0e40060b3faadcf92c770b78fdbb48baeaa524eab228",
  },
  {
    id: 3,
    name: "samgyetang",
    image:
      "https://www.chuksannews.co.kr/data/photos/20210414/art_16177684990221_d040c6.jpg",
  },
  {
    id: 4,
    name: "kimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_%28pixabay%29.jpg/330px-Gimbap_%28pixabay%29.jpg",
  },
  {
    id: 5,
    name: "naengmyeon",
    image:
      "http://www.djtimes.co.kr/news/photo/202008/83537_61046_2932.jpg",
  },
];

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
    </div>;
}

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
