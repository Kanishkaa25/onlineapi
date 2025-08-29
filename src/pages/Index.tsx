import ProductGrid from '../components/ProductGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Catalog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover amazing products
          </p>
        </div>
      </header>

      {/* Product Grid Section */}
      <main className="container mx-auto px-4 py-12">
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
