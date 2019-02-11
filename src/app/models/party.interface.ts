import { Tag } from "./tag.interface";

export interface Party {
  id: string;
  name: string;
  tags: Tag[];
}
