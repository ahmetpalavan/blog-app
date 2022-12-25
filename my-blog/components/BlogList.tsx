type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts.length);
  return <div>BlogListt</div>;
}

export default BlogList;
