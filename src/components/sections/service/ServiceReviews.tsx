import { Reveal } from "@/components/motion/Reveal";
import { GoogleReviews } from "@/components/sections/home/GoogleReviews";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Reviews (Page Blueprint §8): the Google reviews carousel (it carries its own rating header). */
export function ServiceReviews() {
  return (
    <section className="relative overflow-hidden bg-purple-950 py-section text-white">
      <div className="container-x">
        <SectionHeading
          light
          label="Google reviews"
          title="What our clients say."
          action={
            <TextLink href="/reviews/" light>
              Read our Google reviews
            </TextLink>
          }
        />
        <Reveal className="mt-12 lg:mt-16">
          <GoogleReviews />
        </Reveal>
      </div>
    </section>
  );
}
