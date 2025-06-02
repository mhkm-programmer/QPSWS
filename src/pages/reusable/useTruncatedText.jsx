import React, { useState } from "react";

// Function to handle truncated text and "Read More" toggle
const useTruncatedText = (text, maxLength = 100) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText =
    text.length > maxLength && !isExpanded
      ? `${text.slice(0, maxLength)}...`
      : text;

  return {
    truncatedText,
    isExpanded,
    toggleExpand,
    showReadMore: text.length > maxLength,
  };
};

export default useTruncatedText;