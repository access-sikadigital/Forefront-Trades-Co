import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { SplitLines } from "@/components/motion/SplitLines";
import type { Block, Post } from "@/content/blog";

const meta = (p: Post) => `${p.category} · ${p.readMinutes} min read`;

/**
 * Blog index: the first post with a photo is featured large; the rest are
 * typographic rows (no empty image blocks for posts without a photo).
 */
export function BlogList({ posts }: { posts: Post[] }) {
  const featured = posts.find((p) => p.image);
  const rest = posts.filter((p) => p !== featured);
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        {featured?.image && (
          <Reveal>
            <Link href={`/blog/${featured.slug}/`} className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-purple/10">
                <Photo
                  src={featured.image.src}
                  alt={featured.image.alt}
                  frame={4 / 3}
                  vw={{ desktop: 46, mobile: 92 }}
                  className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <p className="label !text-[0.66rem] !tracking-[0.14em] text-orange">{meta(featured)}</p>
                <h2 className="mt-4 text-h2 text-purple">{featured.title}</h2>
                <p className="mt-5 text-lead text-ink/75">{featured.excerpt}</p>
                <span className="label mt-8 inline-flex items-center gap-2.5 !text-[0.72rem] !tracking-[0.14em] text-purple">
                  Read the post
                  <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <Reveal as="ul" stagger={0.08} className="mt-16 border-t border-purple/15 lg:mt-24">
          {rest.map((p) => (
            <li key={p.slug} className="border-b border-purple/15">
              <Link href={`/blog/${p.slug}/`} className="group grid gap-3 py-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-10">
                <p className="label !text-[0.66rem] !tracking-[0.14em] text-orange lg:col-span-3">{meta(p)}</p>
                <div className="lg:col-span-8">
                  <h2 className="font-display text-[clamp(1.5rem,1.15rem+1.2vw,2.5rem)] leading-tight font-bold tracking-[-0.02em] text-purple transition-colors group-hover:text-orange">{p.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-ink/70 sm:text-lg">{p.excerpt}</p>
                </div>
                <span className="hidden justify-end lg:col-span-1 lg:flex">
                  <ArrowIcon className="size-5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Blog post header on charcoal: category, the title as the page H1, excerpt. */
export function PostHeader({ post }: { post: Post }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {post.image && <HeroBackdrop src={post.image.src} />}
      <div className="container-x relative pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-24">
        <div className="lg:max-w-[60%]">
          <Reveal>
            <Eyebrow light>
              <Link href="/blog/" className="hover:text-white">
                Blog
              </Link>
              <span aria-hidden className="text-white/40">/</span>
              {post.category}
            </Eyebrow>
          </Reveal>
          <SplitLines as="h1" className="mt-6 font-display text-h2 font-bold text-white max-sm:text-[length:min(2.5rem,9.2vw)]">
            {post.title.replace(/ (\S+)$/, " $1")}
          </SplitLines>
          <Reveal className="mt-6">
            <p className="text-lead text-white/75">{post.excerpt}</p>
            <p className="label mt-6 !text-[0.66rem] !tracking-[0.14em] text-white/50">{post.readMinutes} min read</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Blog post body: cover photo (if any), readable column, closing call to action. */
export function PostBody({ post }: { post: Post }) {
  return (
    <article className="relative bg-white pb-section">
      <div className="container-x pt-12 lg:pt-16">
        <div className="mx-auto max-w-3xl">
          {post.body.map((b, i) => (
            <PostBlock key={i} block={b} post={post} />
          ))}
        </div>
      </div>
    </article>
  );
}

function PostBlock({ block, post }: { block: Block; post: Post }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 mb-4 font-display text-[clamp(1.6rem,1.3rem+1vw,2.4rem)] leading-tight font-bold tracking-[-0.02em] text-purple first:mt-0">{block.text}</h2>;
    case "p":
      return <p className="mt-4 text-lg leading-relaxed text-ink/80 sm:text-xl">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/80 sm:text-xl">
              <span aria-hidden className="mt-3 size-1.5 shrink-0 bg-orange" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-6 space-y-5 border-l-2 border-orange/30 pl-6">
          {block.items.map((item, i) => (
            <li key={item.title}>
              <p className="font-display text-xl font-semibold text-purple">
                <span className="mr-2 text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
                {item.title}
              </p>
              <p className="mt-1 text-lg leading-relaxed text-ink/75">{item.text}</p>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <div className="-mx-gutter mt-14 bg-purple px-gutter py-8 text-white sm:mx-0 sm:rounded-[6px] sm:p-9">
          <p className="font-display text-[clamp(1.3rem,1.1rem+0.8vw,1.8rem)] leading-snug font-semibold">{block.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/book-a-consultation/">Book a free consultation</Button>
            <Button href={post.related.href} variant="outline-light" arrow={false}>
              {post.related.label}
            </Button>
          </div>
        </div>
      );
  }
}
