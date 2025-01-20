import React from "react";
import styled from "styled-components";

const CampaignCard = ({ brand, payout, slots, progress, image, description }) => {
  return (
    <Card>
      <Image src={image} alt={brand} />
      <Info>
        <Brand>{brand}</Brand>
        <Payout>Payout: {payout}</Payout>
        <Slots>Slots: {slots}</Slots>
        <Description>{description}</Description>
        <Progress>
          <ProgressBar style={{ width: `${progress}%` }} />
        </Progress>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Brand = styled.h3`
  font-size: 1.2rem;
`;

const Payout = styled.p`
  font-size: 1rem;
  color: #444;
`;

const Slots = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const Progress = styled.div`
  width: 100%;
  background: #eee;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #4caf50;
`;

export default CampaignCard;
