import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({
  front,
  back,
  width = "300px",
  height = "200px",
  className = "",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyles = {
    position: "relative",
    width, // Default width is 300px if not provided
    height, // Default height is 200px if not provided
    transformStyle: "preserve-3d",
  };

  const faceStyles = {
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  return (
    <div
      onClick={flipCard}
      style={{ perspective: "1000px", cursor: "pointer" }}
      className={className}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={cardStyles}
      >
        <div style={faceStyles}>{front}</div>
        <motion.div style={{ ...faceStyles, rotateY: 180 }}>{back}</motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
