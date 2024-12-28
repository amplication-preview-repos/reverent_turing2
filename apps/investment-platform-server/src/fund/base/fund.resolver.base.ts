/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Fund } from "./Fund";
import { FundCountArgs } from "./FundCountArgs";
import { FundFindManyArgs } from "./FundFindManyArgs";
import { FundFindUniqueArgs } from "./FundFindUniqueArgs";
import { CreateFundArgs } from "./CreateFundArgs";
import { UpdateFundArgs } from "./UpdateFundArgs";
import { DeleteFundArgs } from "./DeleteFundArgs";
import { FundService } from "../fund.service";
@graphql.Resolver(() => Fund)
export class FundResolverBase {
  constructor(protected readonly service: FundService) {}

  async _fundsMeta(
    @graphql.Args() args: FundCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Fund])
  async funds(@graphql.Args() args: FundFindManyArgs): Promise<Fund[]> {
    return this.service.funds(args);
  }

  @graphql.Query(() => Fund, { nullable: true })
  async fund(@graphql.Args() args: FundFindUniqueArgs): Promise<Fund | null> {
    const result = await this.service.fund(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Fund)
  async createFund(@graphql.Args() args: CreateFundArgs): Promise<Fund> {
    return await this.service.createFund({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Fund)
  async updateFund(@graphql.Args() args: UpdateFundArgs): Promise<Fund | null> {
    try {
      return await this.service.updateFund({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Fund)
  async deleteFund(@graphql.Args() args: DeleteFundArgs): Promise<Fund | null> {
    try {
      return await this.service.deleteFund(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
