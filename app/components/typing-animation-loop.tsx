"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface TypingAnimationProps {
	textList: string[]
  repeat?: boolean
	delay: number
}

export default function TypingAnimation({ textList, repeat, delay }: TypingAnimationProps) {
  const textIndex = useMotionValue(0);
  const texts = textList

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  const updatedThisRoundLogic = (latest: number) => {
    if (updatedThisRound.get() === true && latest > 0) {
      updatedThisRound.set(false);
    } else if (updatedThisRound.get() === false && latest === 0) {
      if (textIndex.get() === texts.length - 1) {
        textIndex.set(0);
      } else {
        textIndex.set(textIndex.get() + 1);
      }
      updatedThisRound.set(true);
    }
  }

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        updatedThisRoundLogic(latest)
      }
    });
  }, []);

  return <motion.span className="inline">{displayText}</motion.span>;
}
