import React, { useEffect } from 'react';
import PageHeader from './components/PageHeader';
import Filter from './components/Filter';
import List from './components/List';

export default function QuotesList() {
    useEffect(() => {
        document.body.classList.add("page-quotes-listing");
    },[])
  return (
        <div className="page-wrapper pt-3 pb-3">
            <div className="container-fluid">
                {/* Page Header */}
                <PageHeader />
                {/* Page Filter */}
                <Filter />
                {/* Quotes List */}
                <List />
            </div>
        </div>
  );
};
