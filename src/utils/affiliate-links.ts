/**
 * Generates an affiliate link based on source, section, label, and optional params
 * @param source - Source of the link (e.g., 'homepage', 'blog')
 * @param section - Section within the source (e.g., 'header', 'footer')
 * @param label - Specific label for tracking
 * @param params - Optional additional parameters
 * @returns Affiliate link URL with tracking parameters
 */
export function getAffiliateLink(
  source: string,
  section: string,
  label: string,
  params?: Record<string, string>
): string {
  // Base affiliate URL - your actual affiliate link
  const baseUrl = 'https://www.anrdoezrs.net/click-9083409-15629775';
  
  // Build tracking parameters - these will be added to your existing URL
  const trackingParams = `&utm_source=${source}&utm_medium=${section}&utm_campaign=${label}`;
  
  // Additional params as query string
  const additionalParams = params 
    ? Object.entries(params)
        .map(([key, value]) => `&${key}=${value}`)
        .join('')
    : '';
  
  // Return full URL with tracking parameters
  return `${baseUrl}${trackingParams}${additionalParams}`;
}

/**
 * Gets the appropriate booking provider based on destination and activity type
 * Uses the real affiliate link but adds additional parameters
 * 
 * @param destinationId - ID of the destination
 * @param activityType - Type of activity (e.g., 'hotel', 'flight', 'tour')
 * @returns The affiliate link with additional tracking parameters
 */
export function getBookingProvider(destinationId: number, activityType: string): string {
  // Base affiliate URL
  const baseUrl = 'https://www.anrdoezrs.net/click-9083409-15629775';
  
  // Build activity-specific tracking parameters
  return `${baseUrl}&utm_source=destination-${destinationId}&utm_medium=${activityType}&utm_campaign=recommendation`;
}

/**
 * Creates a deep link to a specific destination on the affiliate partner site
 * 
 * @param destination - The destination slug or ID
 * @param type - The type of content (e.g., 'hotel', 'flight')
 * @returns Deep link to the specific destination
 */
export function getDestinationLink(destination: string, type: string = 'hotel'): string {
  // Base affiliate URL
  const baseUrl = 'https://www.anrdoezrs.net/click-9083409-15629775';
  
  // Build destination-specific tracking parameters
  return `${baseUrl}&utm_source=destination-page&utm_medium=${type}&utm_campaign=${destination}`;
}