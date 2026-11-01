import React from "react";

const compnyNames = () => {
  const images = [
    {
      id: 1,
      src: "https://assets.heegantechnology.com/heegan/shared-logos/1788689072792-30e2c177-20b1-45c6-bcaf-7371eb9ec10b.png",
    },
    {
      id: 2,
      src: "https://assets.heegantechnology.com/heegan/shared-logos/1788689072792-30e2c177-20b1-45c6-bcaf-7371eb9ec10b.png",
    },
    {
        id:3,
        src:"https://assets.heegantechnology.com/heegan/shared-logos/1788689354565-69dd113c-40ef-4ab3-9f4c-f76259949010.png",
    },
  ];

  return (
    <div className="flex gap-4">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt="Heegan Logo"
          className="w-32 h-32 object-contain"
        />
      ))}
    </div>
  );
};

export default cs