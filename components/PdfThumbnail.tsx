'use client';
import React from 'react';

export default function PdfThumbnail({ url, alt }: { url: string; alt: string }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
      
      {/* 
        Native Browser PDF Renderer
        Using #page=1&toolbar=0&navpanes=0&scrollbar=0 forces it to display only the first page cleanly.
        pointerEvents: 'none' prevents the user from scrolling inside the iframe or clicking internal links.
      */}
      <iframe 
        src={`${url}#page=1&toolbar=0&navpanes=0&scrollbar=0`} 
        width="100%" 
        height="100%" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 2,
          border: 'none'
        }}
        title={alt}
      />

      {/* Invisible overlay to ensure the entire card remains clickable for the parent <a> tag or onClick handlers */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }} />
    </div>
  );
}
