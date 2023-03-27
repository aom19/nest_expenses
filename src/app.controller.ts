import { Controller, Get,Post, Put,Delete, Param,Body } from '@nestjs/common';
import { AppService } from './app.service';
import {data,IData,IReport,ReportType} from './data'


@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type:ReportType): IData['report']{
    return data.report.filter(report => report.type === type)
  }



  @Get(':id')
  getReport(@Param('id') id:string , @Param('type') type:ReportType): IReport{
    return data.report.filter(report => report.type === type).find(report => report.id === id)
  }


  @Post()
  createReport(@Body() body:{source:string,amount:number} , @Param('type') type:ReportType){
    const report:IReport = {
      id:Math.random().toString(),
      source:body.source,
      amount:body.amount,
      created_at:new Date(),
      updated_at:new Date(),
      type:type
    }
    data.report.push(report)
    return report
  }


    
  

  @Put(':id')
  updateReport(@Body() body:{source:string,amount:number} , @Param('id') id:string , @Param('type') type:ReportType){
    const report = data.report.filter(report => report.type === type).find(report => report.id === id)
    
    report.source = body.source
    report.amount = body.amount
    report.updated_at = new Date()
    return report
   
  }

  @Delete(':id')
  deleteReport(@Param('id') id:string , @Param('type') type:ReportType
  ) {
    const report = data.report.filter(report => report.type === type).find(report => report.id === id)
    data.report = data.report.filter(report => report.id !== id)
    return report

  }




}
