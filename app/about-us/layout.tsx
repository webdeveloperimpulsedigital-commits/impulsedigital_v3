import React from 'react';

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/about.css?v=5" />
      {children}
    </>
  );
}
