import { useEffect, useRef, useState } from "react";

type AnimatedNumberOptions = {
  durationMs?: number;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function shouldReduceMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

export function useAnimatedNumber(
  value: number,
  { durationMs = 600 }: AnimatedNumberOptions = {}
) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const [animatedValue, setAnimatedValue] = useState(safeValue);
  const currentValueRef = useRef(safeValue);

  useEffect(() => {
    if (shouldReduceMotion() || durationMs <= 0) {
      currentValueRef.current = safeValue;
      setAnimatedValue(safeValue);
      return;
    }

    const startValue = currentValueRef.current;
    const delta = safeValue - startValue;

    if (Math.abs(delta) < 0.01) {
      currentValueRef.current = safeValue;
      setAnimatedValue(safeValue);
      return;
    }

    let animationFrame = 0;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const nextValue = startValue + delta * easeOutCubic(progress);

      currentValueRef.current = nextValue;
      setAnimatedValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
        return;
      }

      currentValueRef.current = safeValue;
      setAnimatedValue(safeValue);
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [durationMs, safeValue]);

  return animatedValue;
}
