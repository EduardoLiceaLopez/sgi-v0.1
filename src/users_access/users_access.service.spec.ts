import { Test, TestingModule } from '@nestjs/testing';
import { UsersAccessService } from './users_access.service';

describe('UsersAccessService', () => {
  let service: UsersAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersAccessService],
    }).compile();

    service = module.get<UsersAccessService>(UsersAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
