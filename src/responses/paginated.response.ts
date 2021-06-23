export interface PaginationResponse<Entity> {
  results: Entity[];
  filteredCount: number;
  totalCount: number;
}
