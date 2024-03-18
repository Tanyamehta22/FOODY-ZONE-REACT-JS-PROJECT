import { useEffect } from "react";
import styled from "styled-compoments";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setloading(false);
      } catch (error) {
        setError("Unable to fetcg data");
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);

  // fetchFoodData();

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo " />
        </div>

        <div className="search">
          <input placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 50px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styles.section`
background: #ff4343;
border-raduis: 5px;
padding:6px 12px;
border:none;
color: white;
`;


