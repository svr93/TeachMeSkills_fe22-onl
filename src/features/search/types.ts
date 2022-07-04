export type SearchResponse = {
  count: number;
  next: string;
  previous: string;
  results: {};
};
export type SearchPayload = {
	text:string
 };