export class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => await this.dao.getAll();
  getByID = async (id) => await this.dao.getByID(id);
  deleteByID = async (id) => await this.dao.deleteByID(id);
}

export class ProformsRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => await this.dao.getAll();
  getByCode = async (code) => {
    return await this.dao.getByCode(code);
  };
  deleteByID = async (id) => await this.dao.deleteByID(id);

  update = async (code, data) => {
    await this.dao.updateByCode(code, data);}
    
  create = async (data) => {
    console.log("proformsRepository.create here");
    await this.dao.create(data);
  };
}
