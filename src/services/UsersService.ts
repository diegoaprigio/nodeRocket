import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { User } from '../entities/User';


class UsersService {
    
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {

        //verificar se usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        // Se existir, retornar user
        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        })
         
        await this.usersRepository.save(user);

        //Se não existir, salvar no DB
        return user;
    }
}

export { UsersService }