import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function RemoteMdxPage() {
  const res = await fetch('https://raw.githubusercontent.com/memisemre/try/main/try.mdx');
  const markdown = await res.text();

  return <MDXRemote source={markdown} />;
}
