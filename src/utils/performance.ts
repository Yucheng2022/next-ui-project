// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let waiting = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!waiting) {
      func(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// 图片懒加载
export function lazyLoadImage(
  imageElement: HTMLImageElement,
  src: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageElement.src = src;
      resolve();
    };
    img.onerror = reject;
  });
}

// 性能监控
export function measurePerformance(name: string): () => void {
  const start = performance.now();
  return () => {
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
  };
}

// RAF 动画
export function animate(
  callback: (progress: number) => void,
  duration: number
): void {
  const start = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    callback(progress);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
