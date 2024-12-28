/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MarketAnalysisService } from "../marketAnalysis.service";
import { MarketAnalysisCreateInput } from "./MarketAnalysisCreateInput";
import { MarketAnalysis } from "./MarketAnalysis";
import { MarketAnalysisFindManyArgs } from "./MarketAnalysisFindManyArgs";
import { MarketAnalysisWhereUniqueInput } from "./MarketAnalysisWhereUniqueInput";
import { MarketAnalysisUpdateInput } from "./MarketAnalysisUpdateInput";

export class MarketAnalysisControllerBase {
  constructor(protected readonly service: MarketAnalysisService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MarketAnalysis })
  async createMarketAnalysis(
    @common.Body() data: MarketAnalysisCreateInput
  ): Promise<MarketAnalysis> {
    return await this.service.createMarketAnalysis({
      data: data,
      select: {
        analysisTitle: true,
        createdAt: true,
        description: true,
        id: true,
        industryFocus: true,
        publicationDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MarketAnalysis] })
  @ApiNestedQuery(MarketAnalysisFindManyArgs)
  async marketAnalyses(
    @common.Req() request: Request
  ): Promise<MarketAnalysis[]> {
    const args = plainToClass(MarketAnalysisFindManyArgs, request.query);
    return this.service.marketAnalyses({
      ...args,
      select: {
        analysisTitle: true,
        createdAt: true,
        description: true,
        id: true,
        industryFocus: true,
        publicationDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MarketAnalysis })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async marketAnalysis(
    @common.Param() params: MarketAnalysisWhereUniqueInput
  ): Promise<MarketAnalysis | null> {
    const result = await this.service.marketAnalysis({
      where: params,
      select: {
        analysisTitle: true,
        createdAt: true,
        description: true,
        id: true,
        industryFocus: true,
        publicationDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MarketAnalysis })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMarketAnalysis(
    @common.Param() params: MarketAnalysisWhereUniqueInput,
    @common.Body() data: MarketAnalysisUpdateInput
  ): Promise<MarketAnalysis | null> {
    try {
      return await this.service.updateMarketAnalysis({
        where: params,
        data: data,
        select: {
          analysisTitle: true,
          createdAt: true,
          description: true,
          id: true,
          industryFocus: true,
          publicationDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MarketAnalysis })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMarketAnalysis(
    @common.Param() params: MarketAnalysisWhereUniqueInput
  ): Promise<MarketAnalysis | null> {
    try {
      return await this.service.deleteMarketAnalysis({
        where: params,
        select: {
          analysisTitle: true,
          createdAt: true,
          description: true,
          id: true,
          industryFocus: true,
          publicationDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
