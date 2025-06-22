import type { ProductData } from '../../types';
import classes from './ProductCard.module.scss';

type ProductCardProps = {
   product: ProductData;
};

export const ProductCard = (props: ProductCardProps) => {
   const { product } = props;

   const formatter = new Intl.NumberFormat('ru', {
      style: 'currency',
      currency: product.currency,
      minimumFractionDigits: 2,
   });

   return (
      <div className={classes.wrapperProduct}>
         <img src={product.imageUrl} />
         <div className={classes.productInfo}>
            <div className={classes.titleWrapper}>
               <p className={classes.titleMain}>{product.title.toUpperCase()}</p>
               <p className={classes.titleSemi}>{product.origin}</p>
            </div>
            <p className={classes.priceWithSign}>{formatter.format(product.price)}</p>
         </div>
      </div>
   );
};
