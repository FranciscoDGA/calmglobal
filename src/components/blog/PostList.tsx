import type { Post } from '@/types';
import { PostCard } from './PostCard';

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        Nenhum post encontrado. Volte em breve — novos conteúdos toda semana. ✨
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
