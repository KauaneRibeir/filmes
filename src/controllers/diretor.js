import diretor from "../models/diretor.js";

async function store(req, res) {
  try {
    await diretor.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await diretor.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const content = await diretor.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    await diretor.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

export default {
  store,
  index,
  show,
  update,
};