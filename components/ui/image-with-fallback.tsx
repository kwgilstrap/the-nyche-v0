import React, { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
};

const ImageWithFallback: React.FC<Props> = ({ src, alt, fallbackSrc = "/placeholder.jpg", className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;