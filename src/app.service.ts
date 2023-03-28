import { Injectable } from '@nestjs/common';
import {data,IData,IReport,ReportType} from './data'
import { ReportResponseDto } from './dto/report.dto';


interface ICreateReport{
  source:string,
  amount:number

}
interface IUpdateReport{
  source?:string,
  amount?:number
}

@Injectable()
export class AppService {
 getAllReports(type:ReportType): ReportResponseDto[]
  {
    
    return data.report.filter(report => report.type === type).map(x => {
      return new ReportResponseDto(x)
    })

      
  }

  getReport(id:string , type:ReportType): ReportResponseDto
  {
    return  new ReportResponseDto(data.report.filter(report => report.type === type).find(report => report.id === id))
  }

  createReport(body:ICreateReport , type:ReportType):ReportResponseDto
  {

    const report:IReport = {
      id:Math.random().toString(),
      source:body.source,
      amount:body.amount,
      created_at:new Date(),
      updated_at:new Date(),
      type:type
    }
    data.report.push(report)
    return new ReportResponseDto(report)
  }

  updateReport(body:IUpdateReport , id:string , type:ReportType):ReportResponseDto
  {
    const report = data.report.filter(report => report.type === type).find(report => report.id === id)
    
    report.source = body.source
    report.amount = body.amount
    report.updated_at = new Date()
    return new ReportResponseDto(report)
   
  }

  deleteReport(id:string , type:ReportType):ReportResponseDto
  {
    const report = data.report.filter(report => report.type === type).find(report => report.id === id)
    data.report = data.report.filter(report => report.id !== id)
    return new ReportResponseDto(report)
  }

}
