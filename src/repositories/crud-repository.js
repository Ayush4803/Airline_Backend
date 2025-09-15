class CrudRepositories {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong while creating:", error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: { id }
            });
            return response; // number of rows deleted
        } catch (error) {
            console.log("Something went wrong while deleting:", error);
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response; // null if not found
        } catch (error) {
            console.log("Something went wrong while fetching:", error);
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response; // array of all records
        } catch (error) {
            console.log("Something went wrong while fetching all records:", error);
            throw error;
        }
    }

    async update(id,data) {
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response; 
        } catch (error) {
            console.log("Something went wrong while updating:", error);
            throw error;
        }
    }
}


module.exports=CrudRepositories;