import { AudioLines } from "lucide-react";
const HandyHand = ({
  width = 24,
  height = 24,
  className,
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) => (
  <AudioLines
    width={width}
    height={height}
    className={className}
    aria-hidden="true"
  />
);
export default HandyHand;
