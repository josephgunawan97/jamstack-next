import axios from "axios";
import Link from "next/link";

const Porto = ({ title, posts }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {posts &&
          posts.map((post, index) => {
            return (
              <div key={index}>
                <p>
                  Posted on {post.publish_date}, Tag: {post.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Porto;

export async function getStaticProps({ params }) {
  const title = params.title;
  const response = await axios.get(
    `http://localhost:8000/api/title/travel`
  );
  const posts = response.data;
  console.log(posts)
  return {
    props: { title, posts },
  };
}