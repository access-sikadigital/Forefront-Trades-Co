import { cn } from "@/lib/utils";

/** Official logomark artwork — path copied verbatim from public/brand/logo/logomark-orange.svg (500×500). */
export const LOGOMARK_PATH =
  "M493.562 0H6.43832L0 6.43998V493.56L6.43832 500H493.562L500 493.56V6.43998L493.562 0ZM42.1066 229.134V41.9887H228.818V229.134H42.1066ZM457.893 270.994V458.011H274.401C282.256 360.896 361.061 280.783 457.893 270.994ZM270.796 41.9887H457.893V228.49C337.626 238.408 240.149 337.455 232.037 457.883H42.1066V271.252H264.615L271.053 264.812V41.9887H270.796Z";

type Props = {
  className?: string;
  title?: string;
  /**
   * Adds an outline layer (data-mark="outline") over the filled mark (data-mark="fill")
   * so it can be drawn with DrawSVG and then filled — the end state is always the
   * untouched official artwork.
   */
  animated?: boolean;
};

export function Logomark({ className, title, animated = false }: Props) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={cn("block", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path data-mark="fill" d={LOGOMARK_PATH} fill="currentColor" />
      {animated && (
        <path
          data-mark="outline"
          d={LOGOMARK_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
