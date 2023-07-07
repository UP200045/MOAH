import User from '../../../../models/User';
import db from '../../../../utils/db';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || !user.isAdmin) {
    return res.status(401).send('admin signin required');
  }

  if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const user = await User.findOne({ _id: req.query.id });
  
  if (user) {
    if (user.email === 'admin@example.com') {
      return res.status(400).send({ message: 'No sea pendejo mijo el mero admin no se borra' });
    }

    // Eliminar el usuario manualmente
    await User.deleteOne({ _id: req.query.id });
    
    await db.disconnect();
    return res.status(200).send({ message: 'Ya mamo ese wey' });
  } else {
    await db.disconnect();
    return res.status(404).send({ message: 'Usuario no encontrado' });
  }
};



export default handler;
