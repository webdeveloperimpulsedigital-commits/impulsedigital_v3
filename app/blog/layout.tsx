import React from 'react';

export default function BlogLayout({
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
