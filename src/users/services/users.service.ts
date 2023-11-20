import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDTO } from '../dto/createUser.dto';
import { UpdateUserDTO } from '../dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) { }

  public async getAllUsers(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find()
    } catch (error) {
      throw new Error(error)
    }
  }

  public async getUserById(id: string): Promise<UserEntity> {
    try {
      return await this.userRepository.createQueryBuilder('user').where({ id }).getOne()
    } catch (error) {
      throw new Error(error)
    }
  }

  public async createUser(body: CreateUserDTO): Promise<UserEntity> {
    try {
      return await this.userRepository.save(body)
    } catch (error) {
      throw new Error(error)
    }
  }

  public async updateUser(body: UpdateUserDTO, id: string): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body)

      if(user.affected === 0){
        return undefined
      }

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async deleteUser(id: string): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id)

      if(user.affected === 0){
        return undefined
      }

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}
