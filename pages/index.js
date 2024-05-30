import RestaurantsList from "../components/RestaurantsList";
export default function Home({ restaurants }) {
  return (
    <>
      <div className="container">
        <RestaurantsList restaurants={restaurants} />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://restaurant-api.dicoding.dev/list");
  const { restaurants } = await res.json();
  return {
    props: {
      restaurants,
    },
  };
}
