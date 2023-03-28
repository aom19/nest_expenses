import { Controller, Get,Post, Put,Delete, Param,Body, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import {data,IData,IReport,ReportType} from './data'
import {CreateReportDto,ReportResponseDto,UpdateReportDto} from './dto/report.dto'


@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type:ReportType): ReportResponseDto[]{
    return this.appService.getAllReports(type)

  }



  @Get(':id')
  getReport(@Param('id', ParseIntPipe) id:string , @Param('type') type:ReportType): ReportResponseDto{
    return this.appService.getReport(id,type)
  }


  @Post()
  createReport(@Body() body:CreateReportDto , @Param('type') type:ReportType):ReportResponseDto{
      return this.appService.createReport(body,type)
  }

  @Put(':id')
  updateReport(@Body() body:UpdateReportDto , @Param('id',ParseIntPipe) id:string , @Param('type') type:ReportType):ReportResponseDto{
    return this.appService.updateReport(body,id,type)
  }

  @Delete(':id')
  deleteReport(@Param('id',ParseIntPipe) id:string , @Param('type') type:ReportType
  ):ReportResponseDto {
    return this.appService.deleteReport(id,type)
  }


}
