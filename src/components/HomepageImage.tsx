import React from 'react';

function HomepageImage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
    <img src={url} style={{width: 650}} className="img-fluid p-3 rounded" alt='Golden Gate Bridge' />
  );
}

export default HomepageImage;
