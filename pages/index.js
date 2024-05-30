import RestaurantsList from "../components/RestaurantsList";
import Container from "../components/styled/Container";

export default function Home({ restaurants }) {
  return (
    <Container maxWidth="80%">
      <RestaurantsList restaurants={restaurants} />
    </Container>
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
