import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getFileContent } from '@/helpers/getFileContent';

export default async function RemoteMdxPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const fileContents = await getFileContent(slug);

  if (!fileContents) {
    notFound();
  }

  return <MDXRemote source={fileContents} />;
}
