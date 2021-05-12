import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';
import { Connection } from '../entities/Connection';

interface IConnectionCreate {
    socket_id: string;
    admin_id?: string;
    user_id: string;
    id?: string;
}

class ConnectionsService {

    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create( { socket_id, admin_id, user_id, id }: IConnectionCreate) {

        const connetion = this.connectionsRepository.create({
            socket_id,
            admin_id,
            user_id,
            id
        });

        await this.connectionsRepository.save(connetion);

        return connetion;
    }

    async listByUser(user_id: string) {

        const list = await this.connectionsRepository.find({
            where: { user_id },
            relations:["user"]
        });

        return list;

    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id,
        });

        return connection;
    }

}

export { ConnectionsService }