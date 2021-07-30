export class BaseEntity {
  constructor(partial: Partial<BaseEntity>) {
    Object.assign(this, partial);
  }

  id?: string;
}

export class DatesEntity {
  createdAt: string;
  updatedAt: string;
}
