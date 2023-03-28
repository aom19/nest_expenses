import { IsNotEmpty, IsString, IsNumber, IsPositive,IsOptional } from 'class-validator'
import { ReportType } from 'src/data'
import {Exclude , Expose} from 'class-transformer'






export class CreateReportDto{
    @IsNotEmpty()
    @IsString()
    source:string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount:number
    
}


export class UpdateReportDto{
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    source:string

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount:number
}

export class ReportResponseDto{
    
    id:string
    source:string
    amount:number


    @Expose({name:'created_at'})
    transformCreatedAt(){
        return this.created_at.toLocaleDateString()
    }
    @Exclude()
    created_at:Date

    @Exclude()
    updated_at:Date
    type:ReportType

    constructor(partial:Partial<ReportResponseDto>){
        Object.assign(this,partial)
    }

}