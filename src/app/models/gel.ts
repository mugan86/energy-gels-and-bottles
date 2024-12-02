export interface GelRecommendation {
  filterAll?: string;
  sport: string;
  duration: string;
  intensity: string;
  ideal_scenarios: string;
  recommended_ratios: { key: string; description: string; value: string }[];
}