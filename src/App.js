function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Cart</h2>
          <div className="cartItem">
            <img src="/img/goods/goods1.jpg" alt="Goods" />
            <div>
              <p>goods1</p>
              <b>90 $</b>
            </div>
            <img src="/img/cart.svg" alt='Remove' /> 

          </div>

        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={20} height={20} src='/igm/logo.jpg' />
          <div>
            <h3 className="text-uppercase">Category</h3>
            <p className="opacity-5"></p>
          </div>
        </div>  
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src='/igm/cart.svg' />
            <span>120 $</span>
          </li>
          <li>
            <img width={18} height={18} src='/igm/user.svg' />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="mb-40"All goods></h1>
        </div>
        <div className="search-block d-flex">
          <img src='/img/search.svg' alt="Search" />
          <input placeholder="catalog search" />
        </div>
          <div className="card">
            <div className="favorite">
              <img srs='img/heart-unliked.png alt=Unliked' />
            </div>
            <img width={200} height={200} src='/img/goods/goods1.jpg' alt='Goods' />
            <h5>A pen number 1</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>90 $</b>
            </div>
            <button className="button">
              <img width={50} height={50} src='/img/plus.svg' alt='Plus' />
            </button>
          </div>
          </div>
      <div className="card">
        <img width={200} height={200} src='/img/goods/goods2.jpg' alt='Goods' />
        <h5>A pen number 2</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price</span>
            <b>60 $</b>
          </div>
          <button className="button">
            <img width={50} height={50} src='/img/plus.svg' alt='Plus' />
          </button>
       </div>
     </div> 
     <div className="card">
        <img width={200} height={200} src='/img/goods/goods3.jpg' alt='Goods' />
        <h5>A pen number 3</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price</span>
            <b>50 $</b>
          </div>
          <button className="button">
            <img width={50} height={50} src='/img/plus.svg' alt='Plus' />
          </button>
       </div>
     </div>
    
   
     <div className="card">
        <img width={200} height={200} src='/img/goods/goods4.jpg' alt='Goods' />
        <h5>A pen number 4</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price</span>
            <b>110 $</b>
          </div>
          <button className="button">
            <img width={50} height={50} src='/img/plus.svg' alt='Plus' />
          </button>
       </div>
     </div>
     <div className="card">
        <img width={200} height={200} src='/img/goods/goods5.jpg' alt='Goods' />
        <h5>A pen number 5</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price</span>
            <b>40 $</b>
          </div>
          <button className="button">
            <img width={50} height={50} src='/img/plus.svg' alt='Plus' />
          </button>
       </div>
     </div> 
     <div className="card">
        <img width={200} height={200} src='/img/goods/goods6.jpg' alt='Goods' />
        <h5>A pen number 6</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price</span>
            <b>190 $</b>
          </div>
          <button className="button">
            <img width={50} height={50} src='/img/plus.svg' alt='Plus' />
          </button>
          </div>
       </div>
     </div>      
   </div>
  
);
}

export default App;
