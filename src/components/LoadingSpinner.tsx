const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-muted rounded-full animate-spin border-t-primary"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent rounded-full animate-ping border-t-accent-warm/30"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;