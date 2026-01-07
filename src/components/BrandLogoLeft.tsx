export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center gap-3">
      <img 
        src="/logo.svg" 
        alt="Fragrance Collection Logo"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">FRAGRANCE</span>
        <span className="text-xs text-muted-foreground tracking-widest">COLLECTION</span>
      </div>
    </a>
  )
}