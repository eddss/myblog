import logo from "./logo.svg";
import "./App.css";
import { Header, Footer, Layout } from "./Components/Base";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Layout>헬로월드</Layout>
      <Footer></Footer>
    </>
  );
}

export default App;
