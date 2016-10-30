import express from 'express';
import validateInput from '../shared/validations/signup';

const router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(isValid) {
    res.send({ success: true});
  } else {
    res.status(400).send(errors);
  }
});

export default router;
