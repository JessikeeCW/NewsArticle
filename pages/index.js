import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { async } from 'q';

const App = ({ articles }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // const saved = fetch('http:///localhost:3000/api/articles');
    // //finish connecting saved articles here
    // console.log(saved.json)
    // const res = saved.json();
    // console.log('usee effect res', res);
    // const savedArticle = res.state;
    // return {
    //   savedArticle,
    // };
  });

  const onClick = async (e) => {
    e.preventDefault();

    let target = e.target;
    // console.log('finding url', e.href);
    setState([
      ...state,
      {
        title: target.title,
        url: target.url,
      },
    ]);

    const res = await fetch('http:///localhost:3000/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(state[state.length - 1]),
    });
   
    const save = await res.json();
   
  };

  return (
    <div>
      {' '}
      Breaking News:
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article.title}: {article.url}
            <input
              name="save"
              type="button"
              value="Button"
              title={article.title}
              url={article.url}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

App.getInitialProps = async () => {
  const res = await fetch(process.env.API_KEY);

  const headliners = await res.json();
  const articles = headliners.articles;
  return {
    articles,
  };
};
export default App;
