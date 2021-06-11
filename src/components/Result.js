import './Result.css';
import React, {useState, useEffect} from 'react';

// Use a local instance of the api
const API_URL = 'http://localhost:8000/api/name/';
const SKATTUR = "https://www.skatturinn.is/fyrirtaekjaskra/leit/kennitala/";
const KORT = "https://ja.is/kort/?q=";


export function ResultList({searchTerm}) {
  const [companies, setCompanies] = React.useState([]);
  useEffect(() => {
      async function fetchCompanyInfo() {
        const response = await fetch(API_URL + searchTerm);
        const json = await response.json();
        await setCompanies(json.results);
      }
      fetchCompanyInfo();
    }, [searchTerm]);

  if(companies.length === 0){
    return (
      <div className="result-list">
        <p> Ekkert fannst :( </p>
      </div>
    )
  }

  return (
    <div className="result-list">
      {companies.map((data, index) =>
        <Result
          key={index}
          name={data.name}
          kt={data.sn}
          addr={data.address}
        / >
      )}
    </div>
  );
}

export function Result(props) {

  return (
    <div className="result">
      <h2 className="result-name">{props.name}</h2>
      <div className="result-kt">
        <p  className="result-kt-number">
          Kennitala: {props.kt}
        </p>
        <a
          className="result-kt-link"
          href={SKATTUR + props.kt}
          target="_blank"
          rel="noreferrer"
        > skoða nánar á RSK</a>
      </div>

      <div className="result-address">
        <p  className="result-address-string">
          <b>Heimilisfang: </b>
          {props.addr}
          </p>
        <a
          className="result-address-link"
          href={KORT + props.addr}
          target="_blank"
          rel="noreferrer"
        > Sjá á korti </a>
      </div>
    </div>
  );
}

