// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MovieContract {
    struct Movie {
        string title;
        uint256 releaseYear;
        bool isAvailable;
    }

    uint256 public lastId;
    mapping(uint256 => Movie) movieMapping;

    event MovieAdded(uint256 Id, string title, uint256 releaseYear, bool isAvailable);
    event MovieRemoved(uint256 Id);

    function addMovie(string memory title, uint256 releaseYear, bool isAvailable) public {
        lastId++;
        movieMapping[lastId] = Movie(title, releaseYear, isAvailable);
        emit MovieAdded(lastId, title, releaseYear, isAvailable);
    }

    function removeMovie(uint256 Id) public {
        require(lastId >= Id, "Movie with the given Id does not exist");

        delete movieMapping[Id];
        emit MovieRemoved(Id);
    }
}