import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import "./dropdown.scss";

const Dropdown = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();
    const inputRef = useRef();

    let questions = [];

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.name;
        }
        return props.placeHolder;
    };

    const getOptions = () => {
        if (!searchValue) {
            return props.options;
        }
        return props.options.filter(
            (option) =>
                option.name.toLowerCase().indexOf(searchValue.toLowerCase()) >=
                0
        );
    };

    const getQuestions = (option) => {
        axios
            .get(route("getQuestionsForKnowledgeBase", option.profId))
            .then((response) => {
                if (response.status === 200) {
                    questions = response.data;
                    props.sendToParent(questions);
                }
            });
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.profId === option.profId;
    };

    return (
        <div className="dropdown">
            <div
                className="dropdown-input"
                onClick={handleInputClick}
                ref={inputRef}
            >
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        {showMenu ? (
                            <span className="dropdown__arrow-open"></span>
                        ) : (
                            <span className="dropdown__arrow-closed"></span>
                        )}
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="dropdown-menu">
                    {props.isSearchable && (
                        <div className="search-box">
                            <input
                                onChange={onSearch}
                                value={searchValue}
                                ref={searchRef}
                                placeholder="Поиск по профессиям"
                            />
                        </div>
                    )}
                    {getOptions().map((option) => (
                        <div
                            className={`dropdown-item ${
                                isSelected(option) && "selected"
                            }`}
                            key={option.profId}
                            onClick={() => {
                                onItemClick(option);
                                getQuestions(option);
                            }}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
