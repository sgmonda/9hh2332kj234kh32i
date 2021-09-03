import axios from "axios";
import { NextApiHandler } from "next";
import { User } from "../../common";

const ENDPOINT = 'https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission';

let cache: User[] = [];

const endpoint: NextApiHandler = async ({ headers, query }, res) => {
  const { token } = headers;
  if (token !== 'TEST_TOKEN') {
    // Only authorized users can list data
    return res.status(403).json({ error: 'Unauthorized' });
  }
  let data: User[] = cache;
  if (!data.length) {
    try {
      const resp = await axios.get(ENDPOINT);
      data = resp.data;
      cache = data;
    } catch (err) {
      console.error('ERROR', err);
    }
  }

  const page = parseInt(String(query.page));
  const pageSize = parseInt(String(query.pageSize));
  const items = data.slice(pageSize * page, pageSize * (page + 1));

  setTimeout(() => {
    res.status(200).json(items);
  }, Math.random() * 1000);

};

export default endpoint;
