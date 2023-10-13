import { PickType } from "@nestjs/swagger";
import { ProductEntity } from "../entities/product.entity";
import { IsArray, IsString } from "class-validator";

// export class CategoryDto {
//     @IsArray()
//     categoryId: number[];

//     @IsString()
//     @IsArray()
//     categoryName: string[];
// }

export class GetOneProductDto extends PickType(ProductEntity, [
    'productId',
    'coupangItemId',
    'coupangVendorId',
    'productName',
    'productImage',
    'isOutOfStock',
    'originalPrice',
    'currentPrice',
    'discountRate',
    'cardDiscount',
    'productUrl',
    'productPartnersUrl',
]) {
    @IsArray()
    categoryId: number[];

    @IsArray()
    @IsString()
    categoryName: string[];
}