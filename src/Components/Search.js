import React, { useEffect, useState } from "react";

function Search(props) {
    const { List, setList } = props;
    const [search, setSearch] = useState("");
    const [lastSearches, setLastSearch] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setList(List);
    }, []);

    const setSearchItem = (e) => {
        setVisible(true);
        setSearch(e);
        if (e === "") setList(List);
    };

    const updateList = (e) => {
        if (e.key != "Enter") return;
        setVisible(false);
        if (search === (undefined || "" || null)) setList(List);
        else {
            setList(
                List.filter(
                    (item) =>
                        item.Name.toLowerCase().includes(search) ||
                        item.Class == search
                )
            );
        }
        if (lastSearches.length < 3) {
            setLastSearch([...lastSearches, search]);
        } else {
            let newList = [...lastSearches, search];
            newList.splice(0, 1);
            console.log(newList, "tsteaskjhdkjah");
            setLastSearch(newList);
        }
    };

    const deleteSearchItem = (elem) => {
        console.log(elem);
        if (!elem) return;
        setLastSearch(lastSearches.filter((item) => item !== elem));
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setSearchItem(e.target.value)}
                onKeyPress={(e) => updateList(e)}
                list="programmingLanguages"
                onFocus={() => setVisible(true)}
                onBlur={() => setVisible(false)}
            />
            <ul style={{ display: visible ? "block" : "none" }}>
                {lastSearches.map((item) => {
                    return (
                        <li
                            key={item}
                            onClick={() => {
                                setSearchItem(item);
                            }}
                        >
                            {item}
                            <span onClick={() => deleteSearchItem(item)}>
                                X
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Search;
