import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Calendar, Star, TrendingUp, Users, Clock, Sparkles } from 'lucide-react';
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

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const created = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <div className="card-premium h-full flex flex-col overflow-hidden group">
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${getRandomGradient(index)}`} />
        
        {/* Card Header */}
        <CardHeader className="pb-4 flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className={`bg-gradient-to-r ${getRandomGradient(index)} text-white border-0 px-3 py-1 font-medium`}>
                  <Sparkles className="h-3 w-3 mr-1" />
                  Pitch
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {getTimeAgo(pitch.created_at)}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
                {pitch.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground line-clamp-2 text-base leading-relaxed">
                {pitch.tagline}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-6 pt-0">
          <div className="flex-1">
            <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
              {pitch.about_section}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                <Users className="h-4 w-4 text-blue-600" />
                <div>
                  <div className="font-semibold text-foreground">{pitch.features?.length || 0}</div>
                  <div className="text-xs">Features</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                <Star className="h-4 w-4 text-yellow-500" />
                <div>
                  <div className="font-semibold text-foreground">4.8</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4 bg-muted/30 rounded-lg p-3">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Created {formatDate(pitch.created_at)}</span>
            </div>
            
            {pitch.features && pitch.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {pitch.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-border text-muted-foreground hover:bg-muted/50 transition-colors">
                      {feature.length > 20 ? `${feature.slice(0, 20)}...` : feature}
                    </Badge>
                  ))}
                  {pitch.features.length > 2 && (
                    <Badge variant="outline" className="text-xs px-2 py-1 border-border text-muted-foreground">
                      +{pitch.features.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button asChild className={`flex-1 bg-gradient-to-r ${getRandomGradient(index)} hover:opacity-90 text-white font-semibold py-2.5 shadow-lg hover:shadow-xl transition-all duration-300`}>
              <Link to={`/pitch/${pitch.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                View Pitch
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 border-2 border-border hover:bg-muted/50 font-semibold py-2.5 transition-all duration-300">
              <Link to={`/pitch/${pitch.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </motion.div>
  );
}