export interface Collection {
  id: number;
  name: string;
  items: CollectionItem[];
}

export interface CollectionItem {
  _id: string;
  attributes: CollectionAttributes;
}

export interface CollectionAttributes {
  [key: string]: number;
}
