// ImageDetails.tsx
import React from 'react';
import { ImageDetailsProps } from '../../types';
import style from './ImageDetails.module.scss';
import NextImg from '../../assets/images/next.png';
import PrevImg from '../../assets/images/previous.png';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ImageDetails: React.FC<ImageDetailsProps> = ({ template, first, last, setNextThumbnail, setPreviousThumbnail }) => {
  return (
    <div className={style.imageDetails}>
        <img src={`${SERVER_URL}/large/${template?.image}`} className={style.imageLarge} alt='Selected' />
        <ul className={style.descriptionList}>
          <li><span>ID:</span> {template?.id}</li>
          <li><span>Cost:</span> {template?.cost}</li>
          <li><span>Description:</span> {template?.description}</li>
          <li><span>Filename:</span> {template?.image}</li>
        </ul>
        <div className={style.imageControls}>
          <div className={style.imageControls}>
            <img src={PrevImg} onClick={setPreviousThumbnail} className={first ? style.disabled : ''} alt='previous'/>
            <img src={NextImg} onClick={setNextThumbnail} className={last ? style.disabled : ''} alt='next'/>
          </div>
      
        </div>
    </div>
  );
};

export default ImageDetails;