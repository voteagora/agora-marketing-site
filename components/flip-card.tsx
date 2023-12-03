import React, { useState } from 'react';
import { motion, MotionStyle } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  width = '300px',
  height = '200px',
  className = ''
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles: MotionStyle = {
    position: 'relative',
    width, // Uses the width provided or defaults to '300px'
    height, // Uses the height provided or defaults to '200px'
    transformStyle: 'preserve-3d',
  };

  const faceStyles: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  return (
    <div onClick={flipCard} style={{ perspective: '1000px', cursor: 'pointer' }} className={className}>
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={cardStyles}
      >
        <div style={faceStyles}>
          {front}
        </div>
        <motion.div style={{ ...faceStyles, rotateY: 180 }}>
          {back}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;