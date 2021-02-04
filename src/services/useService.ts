import { useEffect, useState } from 'react';

import { FilterUrl, FreeApiKey1, stateNumber } from '@/constants';
import { IFilter } from '@/types/Filter';
import { Service } from '@/types/Service';

const useService = (stateQuery: string): Service<IFilter[]> => {
  const [result, setResult] = useState<Service<IFilter[]>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(`${FilterUrl}?query=${stateQuery}&number=${stateNumber}&apiKey=${FreeApiKey1}`)
      .then(response => response.json())
      .then((response: IFilter[]) => setResult({ status: 'loaded', data: response }))
      .catch((error: Error) => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useService;
