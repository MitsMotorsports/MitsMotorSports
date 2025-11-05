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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <video
        ref={videoRef}
        src="/ClubLogo.mp4" // Fixed path - removed /public
        className="w-48 h-48 object-contain" // Compact size for all screens
        muted
        autoPlay
        playsInline
      />
    </div>
  );
};

export default LogoAnimation;