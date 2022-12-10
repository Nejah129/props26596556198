import "./App.css";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

function App() {
  const data = [
    {
      id: Math.random(),
      name: "Ford Musting",
      price: 50000,
      pic: "https://imgs.search.brave.com/7U-jwbTq44x0RujoWhwzWO9HZjPb_hn8_TPDCNcS_pc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMzLmhvdGNhcnNp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9m/ZWF0dXJlLWltYWdl/LTUwMC1ob3JzZXBv/d2VyLWNhcnMuanBn",
    },
    {
      id: Math.random(),
      name: "Ferari",
      price: 150000,
      pic: "https://imgs.search.brave.com/oVwaA0nvU6mvzypz_0wV1msSp0tKq3JnvQ1bZcem4Tc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bW90b3JiaXNjdWl0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNi9GZXJy/YXJpLUNhbGlmb3Ju/aWEtVC5qcGc",
    },
    {
      id: Math.random(),
      name: "mercedes-benz",
      price: 100000,
      pic: "https://imgs.search.brave.com/OdkYDKRBcH7XT2wUBntoDzepgye-R2HU0SzubOuYqQI/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5t/YXJpbm9wZXJmb3Jt/YW5jZW1vdG9ycy5j/b20vaW1hZ2V0YWcv/MTMzMjcvMTIvbC9V/c2VkLTIwMTctTWVy/Y2VkZXMtQmVuei1B/TUctR1QtUy5qcGc",
    },
  ];
const handleAlert=(x)=>{alert(`the price of ${x.name} is ${x.price}$`)}

  return (
    <div className="App">
      <ProductList list={data} functionAlert={handleAlert} />
      <Footer >
        
       
       {"hello from obj 0"}
       {"hello from obj2"}
       
        
      
        
      </Footer>
    </div>
  );
}

export default App;
