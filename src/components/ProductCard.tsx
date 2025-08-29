import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gradient-card">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-sm font-medium text-primary mb-2">
          {product.brand}
        </p>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-price-primary">
              {formatPrice(product.price)}
            </span>
            
            {product.originalPrice && product.discountPercentage && (
              <div className="flex items-center gap-1">
                <span className="text-sm text-price-original line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="text-xs font-medium text-price-discount bg-accent-warm/20 px-1.5 py-0.5 rounded">
                  -{product.discountPercentage}%
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            {product.inStock ? (
              <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                In Stock
              </span>
            ) : (
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;