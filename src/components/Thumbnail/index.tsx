// Thumbnail.tsx
import React from 'react';
import { ThumbnailProps } from '../../types';
import style from './Thumbnail.module.scss';

const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail, thumbnailName, isSelected, onClick }) => {
  return (
    <div className={style.thumbnail}>
      <img
        src={thumbnail}
        alt="Thumbnail"
        className={`${isSelected ? style.selected : ''}`}
        onClick={onClick}
      />
      <p>{thumbnailName}</p>
    </div>
  );
};

export default Thumbnail;
