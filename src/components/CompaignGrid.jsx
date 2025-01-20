import React from "react";
import styled from "styled-components";
import CampaignCard from "./CompaignCard";

const CampaignGrid = ({ campaigns }) => {
  return (
    <GridContainer>
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} {...campaign} />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

export default CampaignGrid;

