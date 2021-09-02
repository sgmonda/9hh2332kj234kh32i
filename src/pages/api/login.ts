import { NextApiHandler } from "next";
import { promisify } from 'util';

const sleep = (seconds: number) => promisify(setTimeout)(1000 * seconds);

const endpoint: NextApiHandler = async ({ body }, res) => {
  await sleep(Math.random() * 2 + 1); // Simulate a delay
  if (body.username !== 'test' || body.password !== 'test') {
    return res.status(403).json({ error: 'Combinación de usuario y contraseña incorrecta' });
  }
  res.status(200).json({ name: 'Rodrigo', role: 'basic', id: 'xxxxx' });
};

export default endpoint;
