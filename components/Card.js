import React from 'react';

//contains the news article infomation and displays the card
const Card = ({ index, title, url, onClick }) => {
 // renders out the cards based upon the information that was prop drilled down
  return (
    <div className="row justify-content-center">
      <div className="col-sm-11">
        <div className="card  m-2" key={index}>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <a className="card-text" href={url}>
              {url}
              <input
                className="btn btn-warning text-white float-right "
                name="save"
                type="button"
                value="Save"
                onClick={onClick}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
