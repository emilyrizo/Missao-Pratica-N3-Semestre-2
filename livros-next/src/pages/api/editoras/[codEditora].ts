import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      // h) Pegar o código da editora da URL e responder com o nome
      const { codEditora } = req.query;
      const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({ nome: nomeEditora });
    } else {
      // i) Método não permitido
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    // i) Tratar exceções
    res.status(500).json({ message: 'Erro no servidor', error });
  }
};
