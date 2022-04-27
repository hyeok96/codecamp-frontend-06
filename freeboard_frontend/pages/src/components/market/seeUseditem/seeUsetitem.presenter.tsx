import { IUseditem } from "../../../common/types/generated/types";
import * as s from "./seeUsetitem.style";
import { ISeeUestiemProps } from "./seeUsetitem.type";
import { imageError } from "../../../common/utils/utils";
import { v4 as uuid4 } from "uuid";
import { Fragment } from "react";

export default function SeeUseditemPresenterPage(props: ISeeUestiemProps) {
  return (
    <s.Wrapper>
      <s.Title>오늘 본 상품</s.Title>
      {props.barketsItems.map((el: IUseditem) => (
        <Fragment key={uuid4()}>
          <s.UseditemImg>
            <s.Img
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
              onError={imageError}
            />
          </s.UseditemImg>
          <s.UseditemName>{el.name}</s.UseditemName>
          <s.UseditemRemarks>{el.remarks}</s.UseditemRemarks>
          <s.UseditemPrice>{el.price}</s.UseditemPrice>
          <s.UseditemTags>
            {el.tags?.map((tagEl) => (
              <span key={uuid4()}>{tagEl}</span>
            ))}
          </s.UseditemTags>
        </Fragment>
      ))}
    </s.Wrapper>
  );
}
