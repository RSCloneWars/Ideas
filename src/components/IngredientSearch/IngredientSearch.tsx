import React, { useEffect, useState } from 'react';

import { FilterUrl2, FreeApiKey1, FreeApiKey2 } from '@/constants';
import { IFilter, IrecipeInfo } from '@/types/Filter';
import { Service } from '@/types/Service';
import Searchcard from '@/components/Searchcard';
import styles from './index.scss';


const IngredientSearch = (): JSX.Element => {
    const [result, setResult] = useState<Service<IrecipeInfo[]>>({
      status: 'loading',
    });
    const [stateQuery, setStateQuery] = useState<string>('');

    useEffect(() => {
      if (result.status === 'loaded') {
      }
    }, [result]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch(`${FilterUrl2}?ingredients=${stateQuery}&number=10&apiKey=${FreeApiKey1}`)
        .then(response => response.json())
        .then((response: IrecipeInfo[]) => setResult({ status: 'loaded', data: response }))
        .catch((error: Error) => setResult({ status: 'error', error }));
    };

    const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
      setStateQuery(e.target.value);
    };

    return (
      <div>
      <form onSubmit={handleSubmit} className="form-inline my-3 ml-3">
        <p className="theme-title">Let's find your favorite dishes by ingredients in your fridge</p>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="query" className="sr-only">Search by ingredients</label>
          <input id="query" type="text" className="form-control" placeholder='Input ingredients' onChange={handleChangeQuery} />
        </div>
        <button type="submit" className="btn btn-primary mb-2 theme-button">Ok</button>
      </form>
      <div className={styles['box']}>
    {result.status === "loaded" && (result.data.map(card => <Searchcard
      id = {card.id}
      image= {card.image}
      title= {card.title}
      />))
    }
    </div>
    </div>
    );
  };
export default IngredientSearch;
