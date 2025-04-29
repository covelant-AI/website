export interface RadialBlurBgProps {
    width: string;
    height: string;
    rotate: string;
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}

export default function RadialBlurBg({ width, height, rotate, top, left, bottom, right }: RadialBlurBgProps) {
    return (
        <div 
        className="absolute z-0"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(8, 113, 151, 0.04) 0%, rgba(0, 180, 173, 0.12) 50%, rgba(176, 199, 255, 0.2) 80%, rgba(176, 199, 255, 0) 100%)',
          width: width,
          height: height,
          rotate: rotate,
          top: top,
          left: left,
          bottom: bottom,
          right: right,
      }}
      />
    );
}