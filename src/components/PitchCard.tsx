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
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 group">
        <CardHeader className="pb-3 lg:pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg lg:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {pitch.name}
              </CardTitle>
              <CardDescription className="text-sm lg:text-base text-gray-600 mt-1 lg:mt-2 line-clamp-2">
                {pitch.tagline}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="ml-2 lg:ml-3 bg-blue-100 text-blue-700 border-blue-200 text-xs lg:text-sm px-2 lg:px-3 py-1">
              Pitch
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-4 lg:p-6 pt-0">
          <div className="flex-1">
            <p className="text-sm lg:text-base text-gray-600 line-clamp-3 mb-3 lg:mb-4 leading-relaxed">
              {pitch.about_section}
            </p>
            
            <div className="flex items-center text-xs lg:text-sm text-gray-500 mb-3 lg:mb-4">
              <Calendar className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
              Created {formatDate(pitch.created_at)}
            </div>
            
            {pitch.features && pitch.features.length > 0 && (
              <div className="mb-4 lg:mb-6">
                <h4 className="text-sm lg:text-base font-medium text-gray-700 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  {pitch.features.slice(0, 3).map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs lg:text-sm px-2 py-1">
                      {feature.length > 25 ? `${feature.slice(0, 25)}...` : feature}
                    </Badge>
                  ))}
                  {pitch.features.length > 3 && (
                    <Badge variant="outline" className="text-xs lg:text-sm px-2 py-1">
                      +{pitch.features.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 pt-4 border-t border-gray-100">
            <Button asChild variant="default" size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm lg:text-base py-2 lg:py-3">
              <Link to={`/pitch/${pitch.id}`}>
                <Eye className="h-4 w-4 mr-1 lg:mr-2" />
                View
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1 text-sm lg:text-base py-2 lg:py-3">
              <Link to={`/pitch/${pitch.id}/edit`}>
                <Edit className="h-4 w-4 mr-1 lg:mr-2" />
                Edit
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}