import { useQuery } from '@tanstack/react-query';
import { fetchReviews } from '../api/featurable';

// -----------------------------------------------------------------------------
//  useReviews Hook
// -----------------------------------------------------------------------------

export const useReviews = () =>
  useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
