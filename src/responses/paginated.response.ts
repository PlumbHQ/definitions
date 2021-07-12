export interface PaginationResponse<Entity> {
  results: Entity[];
  page: number;
  totalPages: number;
  start: number;
  end: number;
  pageLength: number;
  filteredCount: number;
  totalCount: number;
}
