import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Vision from './component/Vision';
import UniqueNFT from './component/UniqueNFT';
import BuyBom from './component/BuyBom';
import About from './component/About';
import Features from './component/Features';
import PrivateSales from './component/PrivateSales';
import TokenSale from './component/TokenSale';
import SecureBlockchain from './component/SecureBlockchain';     
import ImageWithText from './component/ImageWithText';
import AppSection from './component/AppSection';



// >>>>>>> main
function App() {
  return (
    <>
    <div className="App " >
      <Header></Header>
      <Vision></Vision>
      <UniqueNFT></UniqueNFT>
      <BuyBom></BuyBom>
      <About></About>
      <Features></Features>
      <PrivateSales></PrivateSales> 
      <TokenSale></TokenSale>
      <SecureBlockchain></SecureBlockchain>
      <ImageWithText></ImageWithText>
      <AppSection></AppSection>
    </div>
    </>
  );
}

export default App; 
