import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Calendar, Star, TrendingUp, Users } from 'lucide-react';
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

  const getRandomGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-emerald-500 to-teal-600',
      'from-orange-500 to-red-600',
      'from-purple-500 to-pink-600',
      'from-indigo-500 to-blue-600',
      'from-green-500 to-emerald-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group overflow-hidden">
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${getRandomGradient(index)}`} />
        
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                {pitch.name}
              </CardTitle>
              <CardDescription className="text-slate-600 line-clamp-2 text-base leading-relaxed">
                {pitch.tagline}
              </CardDescription>
            </div>
            <Badge className={`ml-3 bg-gradient-to-r ${getRandomGradient(index)} text-white border-0 px-3 py-1 font-medium`}>
              Pitch
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-6 pt-0">
          <div className="flex-1">
            <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
              {pitch.about_section}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Users className="h-4 w-4" />
                <span>{pitch.features?.length || 0} Features</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Star className="h-4 w-4" />
                <span>4.8 Rating</span>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-slate-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Created {formatDate(pitch.created_at)}
            </div>
            
            {pitch.features && pitch.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {pitch.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-slate-200 text-slate-600">
                      {feature.length > 20 ? `${feature.slice(0, 20)}...` : feature}
                    </Badge>
                  ))}
                  {pitch.features.length > 2 && (
                    <Badge variant="outline" className="text-xs px-2 py-1 border-slate-200 text-slate-600">
                      +{pitch.features.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            <Button asChild className={`flex-1 bg-gradient-to-r ${getRandomGradient(index)} hover:opacity-90 text-white font-semibold py-2.5`}>
              <Link to={`/pitch/${pitch.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                View Pitch
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 border-2 border-slate-200 hover:bg-slate-50 font-semibold py-2.5">
              <Link to={`/pitch/${pitch.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}