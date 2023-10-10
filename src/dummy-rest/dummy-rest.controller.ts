import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { DummyRestService } from './dummy-rest.service';
import { CreateDummyRestDto } from './dto/create-dummy-rest.dto';
import { UpdateDummyRestDto } from './dto/update-dummy-rest.dto';
import { gqlDto } from './dto/query.dto';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
@Controller('dummy-rest')
export class DummyRestController {
  constructor(
    private readonly dummyRestService: DummyRestService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Post()
  create(@Body() createDummyRestDto: CreateDummyRestDto) {
    return this.dummyRestService.create(createDummyRestDto);
  }

  @Post('sendGql')
  sendQuery(@Body() body: gqlDto) {
    return this.dummyRestService.sendQuery(body.gqlString);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dummyRestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDummyRestDto: UpdateDummyRestDto,
  ) {
    return this.dummyRestService.update(+id, updateDummyRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dummyRestService.remove(+id);
  }
}
