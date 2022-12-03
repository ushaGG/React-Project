import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1663490700158-493859483680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI1fHxuYXR1cmUlMjBkYXJrJTIwd2l0aCUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Your Journey Your Story"
        text="Choose your Favourite Journey"
        buttontext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
