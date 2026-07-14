import Link from 'next/link';
import type { Post } from '@/types';
import { categoryLabel } from '@/lib/site';
import { formatDate, readingTime } from '@/lib/utils';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {post.featured_image && (
        <Link href={`/blog/${post.slug}`} className="relative block h-56 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featured_image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: 'grayscale(30%) brightness(92%)' }}
          />
          {/* Overlay azul sutil — efeito premium atemporal */}
          <span className="absolute inset-0 bg-primary-900/10" aria-hidden />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary-600 backdrop-blur">
            {categoryLabel(post.category)}
          </span>
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-serif text-xl font-semibold leading-snug text-dark-900">
          <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-primary-500">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-gray-600">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{formatDate(post.published_at)}</span>
          <span className="text-gray-300">•</span>
          <span>{readingTime(post.content)} min de leitura</span>
        </div>
      </div>
    </article>
  );
}
