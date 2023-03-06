import React from "react";

interface ISvgOptions {
  width: number;
  height: number;
  className?: string;
  name: string;
}

const SvgIcons: React.FC<ISvgOptions> = ({ name, width, height, className }) => {
  if (name === 'wallet') {
    return (
      <svg width={width} height={height} className= {className} xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
      </svg>
    );
  }
  else
    return null;
};

export default SvgIcons;
