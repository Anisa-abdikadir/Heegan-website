
import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiArrowUpRight,
  FiMessageSquare,
  FiCalendar,
} from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "erp-guide",
    title: "What Is ERP? A Practical Guide for Growing Businesses in Somalia",
    excerpt:
      "How connected sales, inventory, accounting, and project operations help growing businesses stay organized and in control.",
    preview:
      "A customer asks whether a product is available. You check with your storekeeper, who checks a spreadsheet. Meanwhile, your accountant is still...",
    image:
      "https://assets.heegantechnology.com/heegan/blogs/1794050286404-18d52be7-d76b-4a99-bd87-a14fcb7369d3.png",
    date: "Nov 7, 2026",
    author: {
      name: "Hassan Ali Hassan",
    },
    comments: 0,
    href: "/insights/what-is-erp",
  },
];

const recentPosts = [
  {
    id: "erp-guide",
    title: "What Is ERP? A Practical Guide for Growing Businesses...",
    date: "Nov 7, 2026",
    image:
      "https://assets.heegantechnology.com/heegan/blogs/1794050286404-18d52be7-d76b-4a99-bd87-a14fcb7369d3.png",
    href: "/insights/what-is-erp",
  },
];

const PostCard = ({ post }) => {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-3 transition-shadow duration-300 hover:shadow-md">
      {/* IMAGE */}
      <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-[#f7f4ee]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* META */}
      <div className="mt-3 flex items-center gap-2 px-1 text-[11px] text-slate-500">
        <FiCalendar size={12} />
        <span>{post.date}</span>
        <span className="text-slate-300">•</span>
        <CiUser className="h-4 w-4 text-slate-500" />
        <span className="truncate text-[#1f3461]">
          {post.author.name}
        </span>
      </div>

      {/* TITLE */}
      <h2 className="mt-3 px-1 text-sm font-bold leading-snug text-[#0f1a2e]">
        {post.title}
      </h2>

      {/* EXCERPT */}
      <p className="mt-2 px-1 text-xs leading-relaxed text-slate-500">
        {post.excerpt}
      </p>

      {/* PREVIEW */}
      <p className="mt-3 px-1 text-xs leading-relaxed text-slate-500">
        {post.preview}
      </p>

      {/* FOOTER */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 px-1 pt-4">
        <Link
          to={post.href}
          className="flex items-center gap-1 text-xs font-semibold text-[#0f1a2e] transition-colors hover:text-sky-500"
        >
          Read article
          <FiArrowUpRight size={14} />
        </Link>

        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <FiMessageSquare size={12} />
          {post.comments}
        </span>
      </div>
    </article>
  );
};

const InsightsBlog = () => {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return posts;

    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.preview.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-32 pb-20 sm:px-6">
      {/* HEADER */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="inline-block rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-[10px] font-bold text-[#0b2a6f]">
            Insights
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0f1a2e] sm:text-5xl">
            Ideas, stories and updates from Heegan
          </h1>

          <p className="mt-4 max-w-md text-xs leading-relaxed text-slate-500">
            Explore our latest technology insights, business updates and practical
            perspectives.
          </p>
        </div>

        {/* SEARCH */}
        <div className="relative w-full md:w-72">
          <FiSearch
            size={14}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-sky-400 bg-white py-2.5 pr-4 pl-10 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-200"
          />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-10 border-t border-slate-200" />

      {/* CONTENT - LEFT & RIGHT */}
    <div className="mt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-3">
        {/* LEFT - BLOG CARDS */}
        <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-1">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="col-span-full py-10 text-sm text-slate-500">
              No articles found.
            </p>
          )}
        </div>

        {/* RIGHT - SIDEBAR */}
        <div className="flex min-w-0 flex-col gap-6">

          {/* RECENT POSTS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#0f1a2e]">
                Recent posts
              </h3>
              <span className="text-[10px] text-slate-400">
                {recentPosts.length}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              {recentPosts.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="group flex items-start gap-3"
                >
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#f7f4ee]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold leading-snug text-[#0f1a2e] transition-colors group-hover:text-sky-500">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      {item.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-[#1f3461] p-5 text-white">
            <span className="text-[10px] font-bold text-sky-400">
              Heegan Insights
            </span>

            <h3 className="mt-3 text-sm font-bold leading-snug">
              Stay informed with our latest updates.
            </h3>

            <p className="mt-2 text-[11px] leading-relaxed text-sky-100">
              Technology, Innovation and business insights from the Heegan team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsBlog;
