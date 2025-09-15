const CrudRepositories= require('./crud-repository');
const {Airplane}= require('../models');

class AirplaneRepository extends CrudRepositories{
    constructor(){
        super(Airplane)
    }
}

module.exports = AirplaneRepository;