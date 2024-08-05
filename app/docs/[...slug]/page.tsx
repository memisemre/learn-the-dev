import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getFileContents } from '@/library/getFileContents';
export default async function RemoteMdxPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const fileContents = await getFileContents(slug);

  if (!fileContents) {
    notFound();
  }

  return <MDXRemote source={fileContents} />;
}
