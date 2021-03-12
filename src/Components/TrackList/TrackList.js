import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList" key={track.id}>
                {this.props.tracks.map(prop => prop)}
            </div>
        );
    }
}