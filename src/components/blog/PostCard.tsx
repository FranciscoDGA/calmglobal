import Link from 'next/link';
import type { Post } from '@/types';
import { Card } from '@/components/ui';
import { categoryLabel } from '@/lib/site';
import { formatDate, readingTime } from '@/lib/utils';

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="flex h-full flex-col">
      {post.featured_image && (
        <Link href={`/blog/${post.slug}`} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featured_image}
            alt={post.title}
            className="h-48 w-full object-cover"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs">
          <span className="rounded bg-primary-100 px-2 py-1 font-medium text-primary-800">
            {categoryLabel(post.category)}
          </span>
          <span className="text-gray-500">{formatDate(post.published_at, 'dd MMM yyyy')}</span>
          <span className="text-gray-400">· {readingTime(post.content)} min</span>
        </div>
        <h3 className="mb-2 text-lg font-bold leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-gray-600">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary-600 hover:underline"
        >
          Ler mais →
        </Link>
      </div>
    </Card>
  );
}
