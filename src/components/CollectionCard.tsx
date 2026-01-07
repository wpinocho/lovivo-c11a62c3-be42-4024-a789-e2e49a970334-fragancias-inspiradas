import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Sin imagen
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-foreground font-bold text-xl line-clamp-1 group-hover:text-secondary transition-colors">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md font-semibold">
                Destacada
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={(e) => {
              e.stopPropagation();
              onViewProducts(collection.id);
            }}
          >
            Ver Productos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}