
// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface Author {
  name: string;
  avatarUrl: string | null;
  profileUrl: string | null;
}

interface Rating {
  value: number;
  max: number;
}

export interface Review {
  id: string;
  platform: string;
  author: Author;
  title: string | null;
  text: string;
  originalText: string | null;
  languageCode: string;
  rating: Rating;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  lastSyncedAt: string | null;
  metadata: Record<string, unknown>;
  url: string | null;
}

interface Summary {
  reviewsCount: number;
  rating: number;
  writeAReviewUri: string;
}

export interface FeaturableWidgetResponse {
  success: boolean;
  widget: {
    uuid: string;
    reviews: Review[];
    isExampleReviews: boolean;
    gbpLocationUuid: string;
    gbpLocationSummary: Summary;
    showBranding: boolean;
  };
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const FEATURABLE_ENDPOINT = import.meta.env.VITE_FEATURABLE_ENDPOINT;

// -----------------------------------------------------------------------------
//  Fetch Reviews
// -----------------------------------------------------------------------------

export async function fetchReviews(): Promise<Review[]> {
  const response = await fetch(FEATURABLE_ENDPOINT);

  // Early Return
  if (!response.ok) {
    throw new Error(`Failed to fetch reviews: ${response.status}`);
  }

  const data = await response.json() as FeaturableWidgetResponse;
  const reviews = data.widget.reviews;
  return reviews;
};
