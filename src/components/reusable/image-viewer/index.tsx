import { useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { cn } from '@/lib/utils';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageClassName?: string;
  fullImageClassName?: string;
}

export const ImageViewer = ({
  src,
  alt,
  width,
  height,
  imageClassName,
  fullImageClassName,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
    }, 300); // Duration matches the CSS fade-out animation
  };

  return (
    <>
      <div className={styles.thumbnail} onClick={handleOpen}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(styles.thumbnailImage, imageClassName)}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {isOpen && (
        <div
          className={`${styles.overlay} ${isExiting ? styles.fadeOut : ''}`}
          onClick={handleClose}>
          <div
            className={`${styles.fullscreenImageContainer} ${
              isExiting ? styles.zoomOut : ''
            }`}>
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="contain"
              className={cn(styles.fullscreenImage, fullImageClassName)}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      )}
    </>
  );
};
