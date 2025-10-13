import React from "react";

interface SupademoEmbedProps {
  demoId: string;
  width?: string;
  height?: string;
}

const SupademoEmbed: React.FC<SupademoEmbedProps> = ({
  width = "100%",
  height = "600",
}) => {
  const src = "https://app.supademo.com/embed/cmgnkm3dj0jfuywygdh1kwzhj?embed_v=2&utm_source=embed";

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      title="Supademo Embed"
      style={{ borderRadius: "12px" }}
    />
  );
};

export default SupademoEmbed;
