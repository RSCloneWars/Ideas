import React, { useEffect, useState } from 'react';

import { FilterUrl, FreeApiKey1, FreeApiKey2, stateNumber } from '@/constants';
import { IFilter, IrecipeInfo } from '@/types/Filter';
import { Service } from '@/types/Service';
import Searchcard from '@/components/Searchcard';
import styles from './Filter.scss';

const Filter = (): JSX.Element => {
  const [result, setResult] = useState<Service<IFilter>>({
    status: 'loading',
  });
  const [stateQuery, setStateQuery] = useState<string>('');

  useEffect(() => {
    if (result.status === 'loaded') {
      // console.log(result.data.results)
    }
  }, [result]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${FilterUrl}?query=${stateQuery}&maxFat=8&number=${stateNumber}&apiKey=${FreeApiKey1}`)
      .then(response => response.json())
      .then((response: IFilter) => setResult({ status: 'loaded', data: response }))
      .catch((error: Error) => setResult({ status: 'error', error }));
  };

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateQuery(e.target.value);
  };

  return (
    <div className='search_area'>
      <form onSubmit={handleSubmit} className="form-inline my-3 ml-3">
        <p className="theme-title">Let's find your favorite dishes</p>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="query" className="sr-only">Search by name</label>
          <input id="query" type="text" className="form-control" placeholder='Input title' onChange={handleChangeQuery} />
        </div>
        <button type="submit" className="btn btn-primary mb-2 theme-button">Ok</button>
      </form>
      <div className={styles['box']}>
        {result.status === "loaded" && (result.data.results.map(card => <Searchcard
          id={card.id}
          image={card.image}
          title={card.title}
        />))
        }
      </div>
    </div>
  );
};

export default Filter;
