const  EletroRepository = require('../repositories/EletroRepository');

class EletroController {
  async index(request, response){
    const  Eletro = await EletroRepository.findAll();
    
    if ( Eletro.length === 0){
      
      return response.status(404).json({ error: 'Produto em falta'});
    }

    response.json(Eletro);
  }

  async show(request, response){
    try{
      const { id } = request.params;
      const Eletro = await EletroRepository.findById(id);

      if(!Eletro){
        return response.status(404).json({ error: 'Produto não encontrado'});
      }

      response.json(Eletro);

    } catch(error){
      return response.status(400).json({ error: 'Id inválido'});
    }
  }

  async store(request, response){
    const { nome, tipo, preco } = request.body;

    if(!nome || !tipo || !preco){
      return response.status(400).json({ error: "necessario preenchimento de todos os dados"})
    }

    const Eletro = await EletroRepository.create({
      nome, tipo, preco,
    });

    response.json(Eletro);
  }

  async update(request, response){
    const { id } = request.params;
    const { nome, tipo, preco } = request.body;
    const EletroExists = await EletroRepository.findById(id);

    if (!EletroExists) {
      return response.status(404).json({ error: "Não existe Produto com esse id cadastrado"});
    }

    if (!nome || !tipo || !preco){
      return response.status(400).json({ error: "DAdos precisam ser cadastrados"});
    }

    const Eletro = await EletroRepository.update(id,{
      nome, tipo, preco
    });

    response.status(200).json({message:"produtos atualizados sucesso!"});
  }

  async delete(request, response) {
    try{
        const {id} = request.params;
        const Eletro = await EletroRepository.findById(id);

        if (!Eletro){
          return response.status(403).json({ error: "Produto não encontrado"});
        }

        const EletroDel = await EletroRepository.delete(id);
        return response.status(200).json({message:"Produto deletado com sucesso!"});

    } catch (error) {
      return response.status(400).json({ error:'IMpossivel deletar deletar'});
    }
  }
}

module.exports = new EletroController();
