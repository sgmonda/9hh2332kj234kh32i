import axios from "axios";
import { NextApiHandler } from "next";
import { User } from "../../common";

const ENDPOINT = 'https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission';

let cache: User[] = [];

const endpoint: NextApiHandler = async ({ headers }, res) => {
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
    } catch (err) {
      console.log('ERROR', err);
    }
    cache = data;
  }
  res.status(200).json(data);
};

export default endpoint;
