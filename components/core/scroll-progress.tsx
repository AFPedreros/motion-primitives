'use client';

import { motion, SpringOptions, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { RefObject } from 'react';

interface ScrollProgressProps {
  className?: string;
  springOptions?: SpringOptions;
  style?: React.CSSProperties;
}

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, springOptions, style }, ref) => {
  const { scrollYProgress } = useScroll({
    container: ref as RefObject<HTMLDivElement>,
  });

  const scaleX = useSpring(scrollYProgress, {
    ...(springOptions ?? DEFAULT_SPRING_OPTIONS),
  });

  return (
    <motion.div
      className={cn('inset-x-0 top-0 h-1 origin-left', className)}
      style={{
        scaleX,
        ...style,
      }}
    />
  );
});
