'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const QuickSortVisualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [pivotIndex, setPivotIndex] = useState<number | null>(null);
  const [compareIndex, setCompareIndex] = useState<number | null>(null);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (sorting) return;
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
    setPivotIndex(null);
    setCompareIndex(null);
  };

  const quickSort = async (arr: number[], low = 0, high = arr.length - 1) => {
    if (low < high) {
      const pivotIdx = await partition(arr, low, high);
      await quickSort(arr, low, pivotIdx - 1);
      await quickSort(arr, pivotIdx + 1, high);
    }
  };

  const partition = async (arr: number[], low: number, high: number) => {
    const pivot = arr[high];
    setPivotIndex(high);
    let i = low - 1;
    for (let j = low; j < high; j++) {
      setCompareIndex(j);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPivotIndex(null);
    setCompareIndex(null);
    return i + 1;
  };

  const handleSort = async () => {
    if (sorting) return;
    setSorting(true);
    const arrCopy = [...array];
    await quickSort(arrCopy);
    setSorting(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-1 items-end">
        {array.map((value, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-sm mb-1">{value}</span>
            <motion.div
              className={`w-6 ${idx === pivotIndex ? 'bg-red-500' : idx === compareIndex ? 'bg-yellow-500' : 'bg-blue-500'}`}
              style={{ height: `${value * 3}px` }}
              layout
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <Button onClick={resetArray} disabled={sorting}>
          Reset Array
        </Button>
        <Button onClick={handleSort} disabled={sorting}>
          Quick Sort
        </Button>
      </div>
    </div>
  );
};

export default QuickSortVisualizer;
