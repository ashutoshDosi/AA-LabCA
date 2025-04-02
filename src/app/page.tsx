'use client'
import Image from "next/image";
import QuickSortVisualizer from "./components/QuickSortVisualizer";
import Head from "next/head";
import { use, useEffect } from "react";

export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Quick Sort Visualizer
          </h1>
          <p className="text-lg text-center">
            By: <br />
            16010423002: Aashna Parikh <br />
            16010423018: Ashutosh Dosi <br />
            16010423032: Divyesh Shirva <br />
            16010423034: Gargi Joshi
          </p>
        </div>
        <div className="flex flex-col items-center ml-8">
        <QuickSortVisualizer />
        </div>
      </main>
    </div>
  );
}
