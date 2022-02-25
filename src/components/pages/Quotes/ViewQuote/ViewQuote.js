import React, { useEffect } from 'react';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import PreviewCard from './components/PreviewCard';

export default function ViewQuote() {
  useEffect(() => {
    document.body.classList.add("page-version-logs");
  },[])
  return (
    <div className="page-wrapper pt-3 pb-3">
      <div className="container">
        {/* Page Header */}
        <PageHeader />
        {/* Preview Card */}
        <PreviewCard />
      </div>
      {/* Page Footer */}
      <PageFooter />
    </div>
  );
};
