import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Calendar } from 'lucide-react';
import { SavedPitch } from '@/types/pitch';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PitchCardProps {
  pitch: SavedPitch;
  index: number;
}

export function PitchCard({ pitch, index }: PitchCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-gray-900 line-clamp-1">
                {pitch.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 mt-1 line-clamp-2">
                {pitch.tagline}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700 border-blue-200">
              Pitch
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {pitch.about_section}
            </p>
            
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <Calendar className="h-3 w-3 mr-1" />
              Created {formatDate(pitch.created_at)}
            </div>
            
            {pitch.features && pitch.features.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {pitch.features.slice(0, 3).map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature.length > 20 ? `${feature.slice(0, 20)}...` : feature}
                    </Badge>
                  ))}
                  {pitch.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{pitch.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex gap-2 pt-4 border-t border-gray-100">
            <Button asChild variant="default" size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Link to={`/pitch/${pitch.id}`}>
                <Eye className="h-4 w-4 mr-1" />
                View
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link to={`/pitch/${pitch.id}/edit`}>
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}