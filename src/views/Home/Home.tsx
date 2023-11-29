import CounterButton from "../../components/CounterButton/CounterButton";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
const Home = () => {
  return (
    <>
      <DisplayCard title="Home Page" description="Sample app home page">
        <CounterButton />
      </DisplayCard>
    </>
  );
};
export default Home;
