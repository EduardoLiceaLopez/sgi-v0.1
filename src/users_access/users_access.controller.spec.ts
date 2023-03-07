import { Test, TestingModule } from '@nestjs/testing';
import { UsersAccessController } from './users_access.controller';
import { UsersAccessService } from './users_access.service';

describe('UsersAccessController', () => {
  let controller: UsersAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersAccessController],
      providers: [UsersAccessService],
    }).compile();

    controller = module.get<UsersAccessController>(UsersAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
