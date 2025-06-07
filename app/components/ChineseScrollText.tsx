'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ChineseScrollTextProps {
  text: string;
  className?: string;
  speed?: number;
  columnsPerScreen?: number;
  charsPerColumn?: number;
  slideDuration?: number;
}

const COLUMN_WIDTH = 40;
const COLUMN_GAP = 32;

const ChineseScrollText: React.FC<ChineseScrollTextProps> = ({
  text,
  className = '',
  speed = 10,
  columnsPerScreen = 8,
  charsPerColumn = 12,
  slideDuration = 5,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [iteration, setIteration] = useState(0);

  const cleanText = useMemo(
    () => text.replace(/[^\u4e00-\u9fff]/g, ''),
    [text]
  );

  useEffect(() => {
    setDisplayedText('');

    if (cleanText.length > 0) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < cleanText.length) {
            return cleanText.slice(0, prev.length + 1);
          }
          clearInterval(interval);
          setTimeout(() => {
            setIteration((prevIteration) => prevIteration + 1);
          }, 3000);
          return prev;
        });
      }, speed);
      return () => clearInterval(interval);
    }
  }, [cleanText, speed, iteration]);

  const columns = useMemo(() => {
    const cols: string[][] = [];
    for (let i = 0; i < displayedText.length; i++) {
      const colIndex = Math.floor(i / charsPerColumn);
      const char = displayedText[i];
      if (!cols[colIndex]) {
        cols[colIndex] = [];
      }
      cols[colIndex].push(char);
    }
    return cols;
  }, [displayedText, charsPerColumn]);

  const totalColumns = columns.length;
  const hiddenColumns = Math.max(0, totalColumns - columnsPerScreen);
  const offsetX = hiddenColumns * (COLUMN_WIDTH + COLUMN_GAP);

  return (
    // 修改处：移除了所有背景和边框相关的类
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* 修改处：提高了纹理的可见度 */}
      <div className="absolute inset-0 bg-[url('/bamboo-texture.png')] opacity-50"></div>
      <div className="relative z-10 p-8 h-full">
        <motion.div
          className="flex flex-row-reverse gap-8"
          animate={{ x: offsetX }}
          transition={{ ease: 'linear', duration: slideDuration }}
        >
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1 shrink-0">
              {Array.from({ length: charsPerColumn }).map((_, rowIndex) => {
                const char = column[rowIndex];
                return (
                  <div
                    key={`${colIndex}-${rowIndex}`}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {char && (
                      <motion.span
                        className="text-3xl font-bold text-black"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {char}
                      </motion.span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-2 left-2 right-2">
        <div className="w-full bg-transparent h-1">
          <div
            className="bg-black h-1 rounded-full"
            style={{
              width: `${
                (displayedText.length / (cleanText.length || 1)) * 100
              }%`,
              transition: 'width 0.2s linear',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChineseScrollText;
