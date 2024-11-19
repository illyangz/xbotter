import React from "react";

interface VideoBackgroundProps {
  src: string[];
  opacity?: number;
  blur?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  opacity = 0.1,
  blur = 1,
}) => {
  return (
    <div className="">
      <video>
        {src.map((source, index) => (
          <source
            key={index}
            src={source}
            type={`video/${source.split(".").pop()}`}
          />
        ))}
        Your browser does not support the video tag.
      </video>
      <div className=""></div>
    </div>
  );
};

export default VideoBackground;
