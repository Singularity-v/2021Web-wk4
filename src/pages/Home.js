import Header from "../components/Header"
import ProductList from "../components/ProducList"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <NavBar/>
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;