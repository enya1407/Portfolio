import svg0 from "./assets/images/svg0.svg";
import screenshot0 from "./assets/images/screenshot_0.png";
import svg1 from "./assets/images/svg1.svg";
import screenshot1 from "./assets/images/screenshot_1.png";
import svg2 from "./assets/images/svg2.svg";
import screenshot2 from "./assets/images/screenshot_2.png";
import svg3 from "./assets/images/svg3.svg";
import screenshot3 from "./assets/images/screenshot_3.png";
import svg4 from "./assets/images/svg4.svg";
import screenshot4 from "./assets/images/screenshot_4.png";
import svg5 from "./assets/images/svg5.svg";
import screenshot5 from "./assets/images/screenshot_5.png";
import svg6 from "./assets/images/svg6.svg";
import screenshot6 from "./assets/images/screenshot_6.png";
import svg7 from "./assets/images/svg7.svg";
import screenshot7 from "./assets/images/screenshot_7.png";

export const dataProjects = [
    {
        id: 0,
        name: "datagrid",
        svg: svg0,
        screenshot: screenshot0,
        text: {
            stack: [
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Redux",
                "Redux-thunk",
                "antd"],
            headerDescription: "Interactive table using React & Redux.",
            description: ["Technical task:", "Sorting by one column",
                "Filtering by the entered text. Search for a substring in the selected number of columns",
                "Filtering by boolean column is implemented using the toggle UI element",
                "Filtering by enum column is implemented. When filtering by enum column, multiple values can be selected.",
                "Virtualization of rows for displaying a large amount of data has been implemented",
                "A row of the table can be selected by clicking. With the help of held down Ctrl / shift, you can select several rows at the same time, delete one or all selected ones.",
                "You can customize the visibility of the columns, the number of displayed rows",
                "Fixed table header aka sticky header, Fixed left column.",
                "The data can be used both locally and randomly generated through an API request",
                "Saving values for sorting, filtering, column visibility are stored in localStorage",
                "Export data to CSV file",
                "Filter valuesfor text and enum columns can be passed to querystring",
            ]
        },

        code:
            "https://github.com/enya1407/datagrid/tree/master",
        webSite:
            "https://enya1407-datagrid.netlify.app/"
    },
    {
        id: 1,
        name:
            "songbird",
        svg:
        svg1,
        screenshot:
        screenshot1,
        text: {
            stack: [
                "HTML",
                "SCSS",
                "JavaScript",
                "React",
                "React Hooks",
                "antd",
            ],
            headerDescription: '"Guess the melody" game',
            description: ["The minimum page width at which the application is displayed correctly is 320 px",
                " Custom audio player with volume control.",
                "Self-prepared database",
                "A song in a block with a question is randomly selected from a list with answer options",
                "When you click on one of the items in the list with answer options, information about him is displayed in the block with the description of the artist",
                "If the player has chosen the correct answer, the title and image of the artist is displayed in the block with the question, the audio player stops playing",
                "At the start of the game score: 0. If the player gave the correct answer on the first try,",
                "his score increases by 5 points, each next attempt gives one point less, if the correct answer is given only from the last, sixth attempt, the player receives 0 points for him",
                "Sound and color indication is used for correct and incorrect answers of the player.",
                'When the player has given the correct answer, the "Next" button is activated and he gets the opportunity to go to the next question',
                'After the last question, the game score is displayed: "You have scored *** points out of *** possible"',
                "If the maximum possible number of points is not scored, the player is invited to go through the quiz again",
                "If the maximum possible number of points is scored, congratulations and a notification about the end of the game are displayed (the correct answers are displayed in the console for convenience)",
            ]
        },
        code:
            "https://github.com/enya1407/songbird/tree/songbird/songbird",
        webSite:
            "https://enya1407-songbird.netlify.app/"
    }
    ,
    {
        id: 2,
        name:
            "savanna",
        svg: svg2,
        screenshot: screenshot2,
        text: {
            stack: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "React Hooks",
                "bootstrap"],
            headerDescription: 'A prototype of a training game from the lingualeo.com',
            description: ["Technical task:",
                "The minimum page width at which it is displayed correctly is 320 px.",
                "You can select the difficulty level of words",
                "Training words are randomly generated",
                "You can choose the answer both with the mouse and using the keyboard",
                "The current word falls for a limited time, if the answer is not given, then it is defended as incorrect",
                "Different sound signal for correct and incorrect answer",
                "if the answer is not correct, the word is highlighted in red, at the same time it shows the correct answer.",
                "For every wrong answer, a star is lost",
                "After every third correct answer, the color and size of the circle responsible for progress changes",
                "It is possible to turn off the sound",
                "At the end of the game, a window appears with short and extended statistics"
            ]
        },
        code:
            "https://github.com/enya1407/savanna",
        webSite:
            "https://enya1407-savanna.netlify.app/"
    }
    ,

    {
        id: 3,
        name:
            "fancy weather",
        svg: svg3,
        screenshot: screenshot3,
        text:
            {
                stack: ["HTML",
                    "SCSS",
                    "JavaScript",
                    "Webpack",
                    "bootstrap"],
                headerDescription:
                    "Single page application that showing weather forecast",
                description:
                    ["Technical task:",
                        "The minimum page width at which it is displayed correctly is 320 px.",
                        "The user's location is automatically determined, and the weather forecast is based on his location.",
                        "You can change the location by entering the appropriate request in the input field.",
                        "The current location is visible on the map",
                        "The background image is generated taking into account the season and time of day of the current location",
                        "Real-time clock of the current location,",
                        "Language changeover (en / ru / be), temperature unit changeover (° C / ° F)",
                        'language and units are stored in the "LocalStorage"'
                    ]
            }
        ,
        code: "https://github.com/enya1407/enya1407-RS2020Q1/tree/fancy-weather/fancy-weather",
        webSite:
            "https://enya1407-fancy-weather.netlify.app/"
    }
    ,
    {
        id: 4,
        name:
            "movie search",
        svg:
        svg4,
        screenshot:
        screenshot4,
        text:
            {
                stack: ["HTML",
                    "SCSS",
                    "JavaScript",
                    "Webpack",
                    "bootstrap"],
                headerDescription:
                    "Single page application that displays movie information as requested by the user",
                description:
                    ["Technical task:", "OMDb RESTful API is used to obtain information",
                        "The minimum width at which the application is displayed correctly is 320 px",
                        "The search is carried out by the full title of the film or by part of the title",
                        "If the user enters a correct search query, for which the API returns a result, the information on the cards with films is updated",
                        "When executing a search query, the first page of the search result is loaded from the API",
                        "The number of displayed cards adjusts to the page width (there can be from 1 to 4 cards)",
                        "Each card displays the following information about the movie: title, poster, release date, IMDb rating.",
                        "Cards can be flipped, a slider / swiper is used for this",
                        "When the end of the slider / swiper is reached, the next page of the search result from the API is loaded, if there is still data to load for this search query",
                        "Pagination works on the principle of infinite scrolling",
                        "If the user enters an invalid search query for which the API returns an error, an error notification is displayed",
                    ]
            }
        ,
        code:
            "https://github.com/enya1407/enya1407-RS2020Q1/tree/movie-search/movie-search",
        webSite:
            "https://enya1407-movie-search.netlify.app/"
    }
    ,
    {
        id: 5,
        name:
            "english for kids",
        svg:
        svg5,
        screenshot:
        screenshot5,
        text:
            {
                stack: ["HTML",
                    "SCSS",
                    "JavaScript",
                    "Webpack"],
                headerDescription:
                    "Single page application application for learning English words",
                description:
                    ["Technical task:", "The minimum width at which the application is displayed correctly is 320 px",
                        " Switching between training mode and game mode occurs by clicking on the Train / Play switch.",
                        "There is a pull-down menu with links to all word categories",
                        "The progress of the training is recorded in the statistics, the statistics can be reset.",
                        "The main page of the application contains links to pages with categories of words, the category page contains the category name and cards with words of the corresponding topic.",
                        "In training mode:",
                        "When you click on the card, the pronunciation of the word in English sounds.",
                        " Each card has a button, when clicked on which the card rotates, the translation of the word is indicated on the reverse side.",
                        " In game mode:",
                        " The button and the text on the card are hidden.",
                        'After clicking on the "Start game" button, the English pronunciation of a random word from those on the page sounds.',
                        "For a correct and incorrect answer, different sound signals sound, a filled or empty asterisk appears.",
                        " Until the correct answer is given, the word does not change.",
                        "If the answer is correct, the word changes, the card becomes inactive.",
                        "When all the words in the category are guessed, depending on whether mistakes were made, a different sound signal sounds, a different picture appears."
                    ]
            }
        ,
        code:
            "https://github.com/enya1407/enya1407-RS2020Q1/tree/english-for-kids/english-for-kids",
        webSite:
            "https://enya1407-english-for-kids.netlify.app/"
    }
    ,
    {
        id: 6,
        name:
            "virtual keyboard",
        svg: svg6,
        screenshot: screenshot6,
        text:
            {
                stack: [
                    "HTML",
                    "CSS",
                    "JavaScript"],
                headerDescription:
                    "Simple virtual keyboard supporting two languages",
                description:
                    ["Technical task:",
                        "Pressing a button on the physical keyboard should highlight the pressed button on the virtual keyboard,",
                        " If several buttons are pressed, all pressed buttons are highlighted.",
                        "The virtual keyboard can switch between Russian and English layouts, while the symbols of the selected language are displayed on the buttons",
                        "The selected language is retained after reloading the page.",
                        "Clicks on the buttons with the mouse on the virtual keyboard and pressing the buttons on the physical keyboard display characters in the input.",
                        "Pressing the down-up-left-right arrows realizes the navigation by input.",
                        "Pressing enter should perform a carriage return, tab creates a horizontal indent.",
                        "Backspace deletes the character before the cursor, del deletes the character after the cursor.",
                        "The remaining shift, alt, ctrl, caps lock, space should work like in a real keyboard."
                    ]
            }
        ,
        code:
            "https://github.com/enya1407/codejam-virtual-keyboard/tree/gh-pages",
        webSite:
            "https://enya1407-virtual-keyboard.netlify.app/"
    }
    ,
    {
        id: 7,
        name:
            "Singolo",
        svg:
        svg7,
        screenshot:
        screenshot7,
        text:
            {
                stack: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "figma"],
                headerDescription:
                    "Responsive landing page made for pseudo company.",
                description:
                    ["Technical task:",
                        "The minimum width at which the application is displayed correctly is 320 px",
                        '"Pixel Perfect" layout based on figma layout.',
                        "Header:",
                        "Switching by anchors with smooth animation.",
                        "When scrolling, the current menu item is highlighted.",
                        "Slider:",
                        "When you press the buttons, the image changes smoothly.",
                        "Slider is written without using any third party libraries.",
                        'When you press the phone, the screen "turns off"',
                        "Portfolio:",
                        "When switching tabs at the top of the block, the new tab should become active.",
                        "The pictures below should change their positions.",
                        "Forms:",
                        'When you click "send", if a valid name and email are entered, a modal window appears with the entered text.',
                        "The form is not being submitted."
                    ]
            }
        ,
        code:
            "https://github.com/enya1407/singolo",
        webSite:
            "https://enya1407.github.io/singolo/"
    }
]