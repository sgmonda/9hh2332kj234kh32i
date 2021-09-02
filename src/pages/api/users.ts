import axios from "axios";
import { NextApiHandler } from "next";
import { User } from "../../common";

const ENDPOINT = 'https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission';

let cache: User[] = [];

(async () => {
  try {
    const { data } = await axios.get(ENDPOINT);
    cache = data;
  } catch (err) {
    console.log('ERROR', err);
  }
})()

const endpoint: NextApiHandler = async ({ headers }, res) => {
  const { token } = headers;
  if (token !== 'TEST_TOKEN') {
    // Only authorized users can list data
    return res.status(403).json({ error: 'Unauthorized' });
  }
  const data = cache;
  res.status(200).json(data);
};

export default endpoint;
