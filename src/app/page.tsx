'use client'
import QuickSortVisualizer from "./components/QuickSortVisualizer";

export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center md:ml-64">
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
        <div className="flex flex-col items-center ml-36">
        <QuickSortVisualizer />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center">
            Alogrithm
          </h1>
          <p className="text-lg">
            1. Choose a pivot element from the array. <br />
            2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot. <br />
            3. Recursively apply the same process to the sub-arrays. <br />
            4. Combine the sorted sub-arrays to get the final sorted array. <br />
            5. Repeat the process until the entire array is sorted. <br />
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center">
            Analysis
          </h1>
          <p className="text-lg">
            1. Worst Case: O(n<sup>2</sup>) - occurs when the pivot is always the smallest or largest element. <br />
            2. Average Case: O(n log n) - occurs when the pivot divides the array into two equal halves. <br />
            3. Best Case: O(n log n) - occurs when the pivot divides the array into two equal halves. <br />
          </p>
        </div>
      </main>
    </div>
  );
}
