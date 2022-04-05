import { IMyApiProps } from "./MyApi.types";
import * as s from "./MyApi.style";

export default function MyApiPresenterPage(props: IMyApiProps) {
  return (
    <>
      <s.Wrapper>
        <s.LeageName>{props.footBall?.name} 순위</s.LeageName>
        <s.LeageSeason>{props.footBall?.seasonDisplay}</s.LeageSeason>
        <s.LeageStanding>
          <s.TemaBox>
            <s.TeamRank>순위</s.TeamRank>
            <s.HeadTeamNameLogoBox>팀명</s.HeadTeamNameLogoBox>
            <s.TeamWine>승</s.TeamWine>
            <s.TeamDraw>무</s.TeamDraw>
            <s.TeamLoss>패</s.TeamLoss>
            <s.TeamPoint>승점</s.TeamPoint>
          </s.TemaBox>
          {props.footBall?.standings?.map((el: any, index: number) => (
            <>
              <s.TemaBox key={el.team?.id}>
                <s.TeamRank>{index + 1}</s.TeamRank>
                <s.TeamNameLogoBox>
                  <s.TeamLogo>
                    <s.Img src={el.team?.logos[0]?.href} />
                  </s.TeamLogo>
                  <s.TeamName>{el.team?.name}</s.TeamName>
                </s.TeamNameLogoBox>
                <s.TeamWine>{el.stats[0]?.value}</s.TeamWine>
                <s.TeamDraw>{el.stats[1]?.value}</s.TeamDraw>
                <s.TeamLoss>{el.stats[2]?.value}</s.TeamLoss>
                <s.TeamPoint>{el.stats[6]?.value}</s.TeamPoint>
              </s.TemaBox>
            </>
          ))}
        </s.LeageStanding>
      </s.Wrapper>
    </>
  );
}
