import React from 'react';
import { Card, Image, Info, Title, Artist } from './TrackCard.styled';

interface TrackCardProps {
    title: string;
    artist: string;
    imageUrl?: string;
}

export const TrackCard: React.FC<TrackCardProps> = ({ title, artist, imageUrl }) => {
    return (
        <Card>
            <Image src={imageUrl || 'https://via.placeholder.com/150'} alt={title} />
            <Info>
                <Title>{title}</Title>
                <Artist>{artist}</Artist>
            </Info>
        </Card>
    );
};


