import { useState } from 'react';
import { generateMockDatas } from './utils';
import { ProductCard } from './components/ProductCard';
import classes from './App.module.scss';

function App() {
   const [products] = useState(() => generateMockDatas(40));
   return (
      <div className={classes.List}>
         {products.map((product) => (
            <ProductCard product={product} key={product.id} />
         ))}
      </div>
   );
}

export default App;
