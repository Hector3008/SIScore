export class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => await this.dao.getAll();
  getByID = async (id) => await this.dao.getByID(id);
  deleteByID = async (id) => await this.dao.deleteByID(id);
}
