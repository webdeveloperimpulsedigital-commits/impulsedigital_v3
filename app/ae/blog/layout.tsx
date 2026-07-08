import React from 'react';

export default function AeBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/blog.css?v=1" />
      {children}
    </>
  );
}
