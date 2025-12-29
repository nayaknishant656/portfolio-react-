"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import DashboardHeader from "./DashboardHeader"
import DashboardBody from "./DashboardBody"
import DashboardFooter from "./DashboardFooter"
function Dashboard() {
  const [report, setReport] = useState('');

  useEffect(() => {
    const storedReport = localStorage.getItem('analysisReport');
    if (storedReport) {
      setReport(storedReport);
    }
  }, []);

  return (
    <>
    <Header/>
    <DashboardHeader/>
    <DashboardBody/>
    <DashboardFooter/>
     <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analysis Dashboard</h1>
      {report ? (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Analysis Report</h2>
          <div className="whitespace-pre-wrap text-sm">
            {report}
          </div>
          <button 
            onClick={() => {
              const blob = new Blob([report], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'analysis-report.txt';
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded color-black"
          >
            Download Report
          </button>
        </div>
      ) : (
        <p>No analysis report available</p>
      )}
    </div>
    </>
   
  );
}

export default Dashboard;