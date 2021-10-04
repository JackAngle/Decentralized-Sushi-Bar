import React from 'react';

function HomepageImage() {
  const url = 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a';
  return (
    <img src={url} style={{width: 650}} className="img-fluid p-3 rounded" alt='Golden Gate Bridge' />
  );
}

export default HomepageImage;
