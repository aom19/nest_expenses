import { Controller, Get,Post, Put,Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(){
    return []
  }



  @Get(':id')
  getReportbyId() {
    return 'Hello World!';
  }

  @Post()
  createReport() {
    return 'created'
  }

  @Put(':id')
  updateReport() {
    return 'updated'
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted'
  }




}
