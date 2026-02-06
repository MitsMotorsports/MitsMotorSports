import { useEffect, useRef } from 'react';

interface LogoAnimationProps {
  onAnimationComplete?: () => void;
}

const LogoAnimation = ({ onAnimationComplete }: LogoAnimationProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // autoplay might be blocked, handle gracefully
      });
      video.onended = () => {
        if (onAnimationComplete) onAnimationComplete();
      };
    }

    const fallbackTimeout = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 1500);

    return () => clearTimeout(fallbackTimeout);
  }, [onAnimationComplete]);

};

export default LogoAnimation;