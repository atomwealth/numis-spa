export interface Collection {
  id: number;
  name: string;
  items: CollectionItem[];
}

export interface CollectionItem {
  id: number;
  attributes: Object;
}
