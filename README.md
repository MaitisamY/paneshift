# Paneshift Pagination

Paneshift Pagination is an easy-to-use pagination tool for React built on top of Vite+React. It simplifies the process of implementing pagination in your React projects, offering various features such as search functionality, customizable items per page, and selection of multiple items.

## Getting Started

To get started with Paneshift Pagination, follow these steps:

1. **Clone or Fork the Repository:**

    You can clone or fork the Paneshift repository from [GitHub](https://github.com/MaitisamY/paneshift).

    ```bash
    git clone https://github.com/MaitisamY/paneshift.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd paneshift
    ```

3. **Install Dependencies:**

    Install the required dependencies using npm or yarn.

    ```bash
    npm install or npm i
    ```

    or

    ```bash
    yarn install
    ```

4. **Start the Development Server:**

    Run the development server to see the pagination tool in action.

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

5. **Explore the Demo:**

    Open your browser and navigate to `http://localhost:5137` to explore the demo and interact with the pagination tool.

## Features

- **Pagination:** Easily navigate through pages of data.
- **Search:** Search for specific items within the dataset.
- **Items Per Page:** Customize the number of items displayed per page.
- **Selection:** Select multiple items from the dataset.
- **Responsive:** Designed to work seamlessly across different screen sizes.

## Must Know

- **usePagination.js** All of the logic for the pagination is located in this file. Located at root/src/hooks/ => usePagination.js
- **Illusion.js** Dummy data used. Located at root/src/data/ => Illusion.js
```
    const ILLUSION = [
    {
        id: 1,
        name: "Illusion 1",
        age: 25,
        the_dream: "I saw I was drowning, I saw I was dying and no one was around to hear me screaming and shouting.",
        remark: "I was dead scared!"
    },
    {
        id: 2,
        name: "Illusion 2",
        age: 30,
        the_dream: "I dreamt I was flying over a vast ocean, feeling free and weightless.",
        remark: "It was exhilarating!"
    },
    {
        id: 3,
        name: "Illusion 3",
        age: 22,
        the_dream: "I found myself in a forest filled with talking animals and mystical creatures.",
        remark: "It felt like a magical adventure!"
    },
    ...
    ...
    ...
    ]
```

- **App.jsx** Your App's entry point. 
```
    These two imports are cruicial for the current pagination to work.

    import { usePagination } from './hooks/usePagination';
    import { ILLUSION } from './data/Illusion.js';

    You just need to pass your (API's Fetched) data i.e right now the dummy data "Illusion".
    And destructure and get the states and functions out of usePagination hook.

    const { someState, someFunction } = usePagination({ data: Illusion });
```

- **PrePagination.jsx** Total pages, search filter, bulk selection option and row selection UI.
- **Table.jsx** The table's UI.
- **Pagination.jsx** Total rows and Pagination buttons UI.

## Documentation

For detailed documentation and examples, visit [Paneshift Documentation](https://muhammad-aitisam.gitbook.io/paneshift/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Made with ❤️ by [Muhammad Aitisam Yaseen](https://github.com/MaitisamY).
[Email](m.aitisamyaseen@gmail.com).