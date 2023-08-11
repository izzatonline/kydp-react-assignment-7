import "./App.css";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
// import WelcomeDialog from "./components/WelcomeDialog";

function App() {
    const [searchTerm, setSearchTerm] = useState(""); // Put "" to make sure the const are set as String
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const books = [
        {
            id: 1,
            title: "To Kill a Mockingbird",
        },
        {
            id: 2,
            title: "1984",
        },
        {
            id: 3,
            title: "The Great Gatsby",
        },
        {
            id: 4,
            title: "Pride and Prejudice",
        },
        {
            id: 5,
            title: "The Catcher in the Rye",
        },
        {
            id: 6,
            title: "The Lord of the Rings",
        },
        {
            id: 7,
            title: "To the Lighthouse",
        },
        {
            id: 8,
            title: "Brave New World",
        },
        {
            id: 9,
            title: "Moby-Dick",
        },
        {
            id: 10,
            title: "Fahrenheit 451",
        },
        {
            id: 11,
            title: "One Hundred Years of Solitude",
        },
        {
            id: 12,
            title: "The Hobbit",
        },
        {
            id: 13,
            title: "The Chronicles of Narnia",
        },
        {
            id: 14,
            title: "Harry Potter and the Sorcerer's Stone",
        },
        {
            id: 15,
            title: "The Alchemist",
        },
    ];

    const filterList = books.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
            <BookList list={filterList} />
            {/* <WelcomeDialog /> */}
        </>
    );
}

export default App;
