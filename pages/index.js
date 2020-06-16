import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

const App = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {' '}
      Breaking News:
      <ul>
        {articles.map((article) => (
          <li>
            {article.title}: {article.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

App.getInitialProps = async () => {
  const res = await fetch(
    'http://newsapi.org/v2/top-headlines?country=us&apiKey=b36e8b283ccc4069acef71bc361123c6'
  );
  const headliners = await res.json();
  const articles = headliners.articles;
  return {
    articles,
  };
};
export default App;
