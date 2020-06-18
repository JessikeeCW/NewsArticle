import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';


const App = ({ articles }) => {
  //sets the state , which will have an array of objects
  const [state, setState] = useState([]);
  
  //once the save button is clicked, save the selected article to the database
  const onClick = async () => {
    const res = await fetch('http:///localhost:3000/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(state[state.length - 1]),
    });
    const save = await res.json();
  };

  //displays the entire application. It will loop through the props and render out individual cards containing the news article's information.
  return (
    <div>
      <Layout />
      {articles.map((article, index) => (
        <Card key={index} index={index} title={article.title} url={article.url} onClick={(e) => {
          e.preventDefault();
          setState([
            ...state,
            {
              title: article.title,
              url: article.url,
            },
          ])
          onClick();
        }} />
      ))}
    </div>
  );
};
//fetches the news articles from the News API and returns out an array of article objects
App.getInitialProps = async () => {
  const res = await fetch(process.env.API_KEY);

  const headliners = await res.json();
  const articles = headliners.articles;
  return {
    articles,
  };
};
export default App;
