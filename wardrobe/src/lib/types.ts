export const CATEGORIES = ["Tops","Shirts","Outerwear","Bottoms","Shoes","Accessories"] as const;
export type Category = (typeof CATEGORIES)[number];
export interface Logo { description: string; brand?: string; box: [number, number, number, number]; confidence: number }
// A garment as stored in the cloud (D1). Images are served from R2 via /api/garments/:id/{original|processed|thumb}.
export interface Garment {
  id: string; name: string; category: Category;
  primaryColor?: string; colorHex?: string; secondaryColors?: string[];
  brand?: string; size?: string; notes?: string; hash?: string;
  status?: "ready" | "needs-review";
  bgStatus?: "removed" | "failed" | "skipped"; bgError?: string;
  logoStatus?: "not-configured" | "done"; logos?: Logo[];
  hasProcessed: boolean; createdAt: number; updatedAt: number;
}
// A garment in the browser before upload (blobs). Also the shape of legacy IndexedDB records.
export interface GarmentDraft extends Omit<Garment, "hasProcessed"> {
  imageBlob: Blob; processedBlob?: Blob; thumbBlob?: Blob;
}
export interface Trip {
  id: string; name: string; destination?: string; startDate?: string; endDate?: string; notes?: string;
  garmentIds: string[]; packedIds: string[]; createdAt: number; updatedAt: number;
}
