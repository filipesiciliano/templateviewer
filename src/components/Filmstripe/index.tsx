// Filmstrip.tsx
import React from 'react';
import Thumbnail from '../Thumbnail';
import { FilmstripProps } from '../../types';
import style from './Filmstrip.module.scss';

const Filmstrip: React.FC<FilmstripProps> = ({ templates, selectedThumbnailIndex, onThumbnailClick, offset }) => {
  const handleThumbnailClick = (index: number) => {
    onThumbnailClick(index);
  }
  
  return (
    <div className={style.filmstrip}>
      <div className={style.carrouselInner} style={{ transform: `translateX(${offset}px)` } }>
        {templates.map((template, index) => (
          <Thumbnail
            key={index}
            thumbnail={`/images/thumbnails/${template.thumbnail}`}
            thumbnailName={template.thumbnail}
            isSelected={index === selectedThumbnailIndex}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filmstrip;
