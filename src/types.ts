export interface Template {
  id: string;
  cost: number;
  description: string;
  thumbnail: string;
  title: string;
  image: string;
}

export interface ThumbnailProps {
  thumbnail: string;
  thumbnailName: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface FilmstripProps {
  templates: Template[];
  selectedThumbnailIndex: number;
  onThumbnailClick: (index: number) => void;
  offset: number;
}

export interface ImageDetailsProps {
  template: Template | null;
  first: boolean;
  last: boolean;
  setNextThumbnail: () => void;
  setPreviousThumbnail: () => void;
}