import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class shortenLinkDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  fullLink: string;
}
