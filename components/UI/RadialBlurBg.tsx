export interface RadialBlurBgProps {
  background: string;
  width: string;
  height: string;
  rotate: string;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export default function RadialBlurBg({
  width,
  height,
  rotate,
  top,
  left,
  bottom,
  right,
  background,
}: RadialBlurBgProps) {
  return (
    <div
      className="absolute -z-10"
      style={{
        background: background,
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
