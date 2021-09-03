import { useAppSelector } from '../store/hooks';
import { selector as authSelector } from '../store/auth';
import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Props<T> {
  endpoint: string;
  pageSize: number;
  ItemRenderer: FunctionComponent<Partial<T>>;
  initialItems?: T[];
  onChange?: (page: number, items: T[]) => void;
};

export function List<T>({ pageSize, endpoint, onChange, initialItems = [], ItemRenderer }: Props<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<T[]>(initialItems);
  const [page, setPage] = useState<number>(Math.floor(initialItems.length / pageSize));
  const auth = useAppSelector(authSelector);

  const observer = useRef<IntersectionObserver>();
  const lastItemRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetch(page);
        setPage(page + 1);
      }
    });
    if (node) observer.current.observe(node);
    console.log('last item ref', node);
  }, [isLoading]);

  const fetch = async (page: number = 0) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      console.log(`Fetching (page ${page})...`);
      const { data } = await axios.get(`${endpoint}?pageSize=${pageSize}&page=${page}`, { headers: { token: auth.user?.token } });
      const newItems = [...items, ...data];
      setItems(newItems);
      onChange?.(page, newItems);
      console.log(`${data.length} items fetched`);
    } catch (err) {
      console.error('Error', err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (!initialItems.length) fetch();
  }, [endpoint]);

  const placeholders = new Array(pageSize).fill({});

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, i) => (
        <li key={i} ref={i === items.length - 1 ? lastItemRef : null}>
          <ItemRenderer {...item} />
        </li>
      ))}
      {isLoading && placeholders.map((_, i: number) => (
        <li key={`placeholder-${i}`}>
          <ItemRenderer />
        </li>
      ))}
    </ul>
  );
}
