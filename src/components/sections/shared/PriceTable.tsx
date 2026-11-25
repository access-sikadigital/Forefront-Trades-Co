import Link from "next/link";
import { inclGst, money, ranges, startingPrices, type PricedRoom } from "@/content/pricing";
import { cn } from "@/lib/utils";

/**
 * Starting prices by range (incl. GST) as a plain table. Scrolls sideways inside
 * its own box on narrow phones so the page never does.
 */
export function PriceTable({ rooms, caption, className }: { rooms: PricedRoom[]; caption: string; className?: string }) {
  return (
    <div className={cn("overflow-x-auto rounded-[6px] bg-white ring-1 ring-purple/8", className)}>
      <table className="w-full min-w-[520px] border-collapse text-left font-sans">
        <caption className="px-5 pt-5 pb-3 text-left text-sm font-medium text-ink/70 sm:px-6">{caption}</caption>
        <thead>
          <tr className="border-y border-purple/10 bg-cream-50">
            <th scope="col" className="px-5 py-3 sm:px-6">
              <span className="sr-only">Room</span>
            </th>
            {ranges.map((r) => (
              <th key={r.id} scope="col" className="label px-4 py-3 !text-[0.66rem] !tracking-[0.14em] text-purple/70">
                {r.short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rooms.map((k) => {
            const row = startingPrices[k];
            return (
              <tr key={k} className="border-b border-purple/8 last:border-b-0">
                <th scope="row" className="px-5 py-3.5 font-display text-base font-semibold text-purple sm:px-6">
                  <Link href={row.href} className="underline decoration-purple/25 underline-offset-4 hover:text-orange hover:decoration-orange">
                    {row.label}
                  </Link>
                </th>
                {row.ex.map((ex, i) => (
                  <td key={ranges[i].id} className="px-4 py-3.5 text-base text-ink tabular">
                    {ex == null ? "POA" : money(inclGst(ex))}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
