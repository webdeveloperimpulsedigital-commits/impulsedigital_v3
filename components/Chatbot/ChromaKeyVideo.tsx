'use client';

import React, { useRef, useEffect } from 'react';

interface ChromaKeyVideoProps {
  src: string;
  className?: string;
  width: number;
  height: number;
}

export default function ChromaKeyVideo({ src, className, width, height }: ChromaKeyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;

    const processFrame = () => {
      if (!video || video.paused || video.ended) return;

      // Draw current video frame to canvas
      ctx.drawImage(video, 0, 0, width, height);
      
      try {
        const frame = ctx.getImageData(0, 0, width, height);
        const data = frame.data;
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        // Auto-detect background color from the top-left pixel (0,0)
        const r_bg = data[0];
        const g_bg = data[1];
        const b_bg = data[2];

        // Helper to check if pixel is background (desaturated and not extremely dark)
        const isBg = (idx: number) => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          
          // Distance to the corner background pixel
          const dist = Math.sqrt(
            (r - r_bg) ** 2 +
            (g - g_bg) ** 2 +
            (b - b_bg) ** 2
          );

          if (dist < 35) {
            return true;
          }

          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          
          // Don't flood bright white robot body pixels
          if (min > 230) {
            return false;
          }

          // Shadow grey
          return (max - min < 25) && (min > 70);
        };

        // Seed from borders
        for (let x = 0; x < width; x++) {
          // Top row
          const idxTop = x * 4;
          if (isBg(idxTop)) {
            queue.push(x);
            visited[x] = 1;
          }
          // Bottom row
          const yBottom = height - 1;
          const idxBottom = (yBottom * width + x) * 4;
          if (isBg(idxBottom)) {
            queue.push(yBottom * width + x);
            visited[yBottom * width + x] = 1;
          }
        }

        for (let y = 0; y < height; y++) {
          // Left column
          const idxLeft = (y * width) * 4;
          if (isBg(idxLeft)) {
            queue.push(y * width);
            visited[y * width] = 1;
          }
          // Right column
          const xRight = width - 1;
          const idxRight = (y * width + xRight) * 4;
          if (isBg(idxRight)) {
            queue.push(y * width + xRight);
            visited[y * width + xRight] = 1;
          }
        }

        // Flood fill
        let head = 0;
        while (head < queue.length) {
          const curr = queue[head++];
          const cx = curr % width;
          const cy = Math.floor(curr / width);

          const neighbors = [
            { nx: cx + 1, ny: cy, next: curr + 1 },
            { nx: cx - 1, ny: cy, next: curr - 1 },
            { nx: cx, ny: cy + 1, next: curr + width },
            { nx: cx, ny: cy - 1, next: curr - width }
          ];

          for (const { nx, ny, next } of neighbors) {
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (!visited[next]) {
                if (isBg(next * 4)) {
                  visited[next] = 1;
                  queue.push(next);
                }
              }
            }
          }
        }

        // Set all background pixels to transparent
        for (let i = 0; i < width * height; i++) {
          if (visited[i]) {
            data[i * 4 + 3] = 0;
          }
        }

        // Smooth edges transition (feathering)
        for (let y = 1; y < height - 1; y++) {
          for (let x = 1; x < width - 1; x++) {
            const idx = y * width + x;
            if (!visited[idx]) {
              const pIdx = idx * 4;
              let hasBgNeighbor = false;
              if (
                visited[idx + 1] ||
                visited[idx - 1] ||
                visited[idx + width] ||
                visited[idx - width]
              ) {
                hasBgNeighbor = true;
              }

              if (hasBgNeighbor) {
                const r = data[pIdx];
                const g = data[pIdx + 1];
                const b = data[pIdx + 2];
                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                // Clean up edge pixels
                if (max - min < 45 && min > 120) {
                  data[pIdx + 3] = 0;
                }
              }
            }
          }
        }

        ctx.putImageData(frame, 0, 0);
      } catch (err) {
        console.error('Error processing video frame chroma key:', err);
      }

      animationFrameId = requestAnimationFrame(processFrame);
    };

    const handlePlay = () => {
      animationFrameId = requestAnimationFrame(processFrame);
    };

    video.addEventListener('play', handlePlay);

    // If already playing
    if (!video.paused) {
      animationFrameId = requestAnimationFrame(processFrame);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener('play', handlePlay);
      }
    };
  }, [src, width, height]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={className}
      />
    </>
  );
}
