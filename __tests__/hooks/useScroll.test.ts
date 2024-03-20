import { act, renderHook } from '@testing-library/react';
import { useScroll } from '@app/hooks/useScroll';

describe('useScroll', () => {
  it('should return false when the page is not scrolled', () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(false);
  });

  it('should return true when the page is scrolled', () => {
    const { result } = renderHook(() => useScroll());

    const originalScrollY = window.scrollY;

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    // Set scroll position to 0
    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);

    // Restore the original scroll position
    act(() => {
      window.scrollY = originalScrollY;
      window.dispatchEvent(new Event('scroll'));
    });
  });
});
