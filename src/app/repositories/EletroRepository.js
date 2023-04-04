const EletroModel = require('../Models/EletroModel');

class EletroRepository{
  async findAll() {
    const Eletro = await EletroModel.find();
    return Eletro;
  }

  async findById(id){
    const Eletro = await EletroModel.findById(id);
    return Eletro;
  }

  async delete(id){
    const Eletro = await EletroModel.findByIdAndDelete(id);
    return Eletro;
  }

  async create({nome, tipo, preco, }) {
    const createdEletro = await EletroModel.create({
      nome,
      tipo,
      preco,
    });
    return createdEletro;
  }

  async update(id,{nome, tipo, preco,}) {
    try{
        const updatedEletro = await EletroModel.findByIdAndUpdate(id, {
          nome,
          tipo,
          preco,
        });
        return updatedEletro;
    } catch (error){
      return response.status(400).json({ error: 'Não foi possivel Realizar o update' });
    }
  }
}

module.exports = new EletroRepository();
