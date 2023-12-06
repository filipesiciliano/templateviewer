// App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filmstrip from './components/Filmstripe';
import ImageDetails from './components/ImageDetails';
import { Template } from './types';
import style from './App.module.scss';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const App: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Template[]>(`${SERVER_URL}/listimages`);
        const { data } = response;

        setTemplates(data);
        setSelectedTemplate(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedThumbnailIndex < 2) {
      setOffset(0);
    } else {
      const wrapperWidth = 520;
      const itemWidth = 128;

      const centerPosition = wrapperWidth / 2;

      const itemPosition = selectedThumbnailIndex * itemWidth;

      const offsetNumber = centerPosition - itemPosition - itemWidth / 2;

      setOffset(offsetNumber);
    }
  }, [selectedThumbnailIndex]);

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnailIndex(index);
    setSelectedTemplate(templates[index]);
  };

  const isLastThumbnail = selectedThumbnailIndex === templates.length - 1;

  const handleSetNextThumbnail = () => {
    if (!isLastThumbnail) {
      const nextThumbnailIndex = selectedThumbnailIndex + 1;
      setSelectedThumbnailIndex(nextThumbnailIndex);
      setSelectedTemplate(templates[nextThumbnailIndex]);
    }
  }

  const handleSetPreviousThumbnail = () => {
    if (selectedThumbnailIndex > 0) {
      const previousThumbnailIndex = selectedThumbnailIndex - 1;
      setSelectedThumbnailIndex(previousThumbnailIndex);
      setSelectedTemplate(templates[previousThumbnailIndex]);
    }
  }

  return (
    <div className={style.gallery}>
      <h1>Image Gallery</h1>
      <ImageDetails 
        template={selectedTemplate} 
        first={selectedThumbnailIndex === 0} 
        last={isLastThumbnail} 
        setNextThumbnail={handleSetNextThumbnail} 
        setPreviousThumbnail={handleSetPreviousThumbnail} 
        />
      <Filmstrip
        templates={templates}
        selectedThumbnailIndex={selectedThumbnailIndex}
        onThumbnailClick={handleThumbnailClick}
        offset={offset}
      />
    </div>
  );
};

export default App;
