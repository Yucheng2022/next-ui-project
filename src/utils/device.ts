export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  return (
    window.matchMedia('(max-width: 768px)').matches ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    'ontouchstart' in window
  );
}

export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function supportsHover(): boolean {
  if (typeof window === 'undefined') return true;
  
  return window.matchMedia('(hover: hover)').matches;
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export function shouldReduceAnimations(): boolean {
  return isMobileDevice() || isReducedMotion();
}
