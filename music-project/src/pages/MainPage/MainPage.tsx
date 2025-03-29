
import { useState } from "react";
import { TrackCard } from "../../components/TrackCard/TrackCard";
import { Content, Header, SearchBar, SMainPage } from "./MainPage.styled";




export const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const testTracks = [
        { title: 'Song 1', artist: 'Artist 1' },
        { title: 'Song 2', artist: 'Artist 2' },
        { title: 'Song 3', artist: 'Artist 3' },
        { title: 'Love Story', artist: 'Taylor Swift' },
        { title: 'Radioactive', artist: 'Imagine Dragons' },
    ];

    // Фильтрация треков по названию или исполнителю
    const filteredTracks = testTracks.filter(
        (track) =>
            track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            track.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <SMainPage>
      <Header>Genius Clone</Header>
            <SearchBar
                placeholder="Поиск песен, исполнителей или альбомов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Content>
                {filteredTracks.length > 0 ? (
                    filteredTracks.map((track, index) => (
                        <TrackCard
                            key={index}
                            title={track.title}
                            artist={track.artist}
                        />
                    ))
                ) : (
                    <p>Ничего не найдено</p>
                )}
            </Content>
      </SMainPage>
    </>
  );
};
