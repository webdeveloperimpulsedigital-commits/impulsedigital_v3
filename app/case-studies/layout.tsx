import React from 'react';

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/case-study.css?v=27" />
      {children}
    </>
  );
}
