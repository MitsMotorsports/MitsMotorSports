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

    // Just in case onended event does not fire (fallback)
    const fallbackTimeout = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 1500); // match video length + small buffer

    return () => clearTimeout(fallbackTimeout);
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <video
        ref={videoRef}
        src="/public/ClubLogo.mp4" // adjust path if needed
        className="w-64 md:w-96 object-contain"
        muted
        autoPlay
        playsInline
      />
    </div>
  );
};

export default LogoAnimation;
