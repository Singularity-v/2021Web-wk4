import { Layout } from 'antd';
import AppHeader from "../components/Header"
import ProductList from "../components/ProducList"
import AppFooter from "../components/Footer"
//import NavBar from "../components/NavBar"

const { Header, Content, Footer }= Layout;
function Home() {
  return (
    <Layout className="container main-layput">
      <AppHeader/>
      <Header/>
      <Content className="layout-content">
        <ProductList/>
      </Content>
      <Footer className="layout-content">
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default Home;