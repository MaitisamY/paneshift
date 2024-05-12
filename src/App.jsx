import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import './styles/paneshift-app.css'; // Import CSS file
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import PaneshiftLogo from './assets/logo.png'; // Import logo image

// Import necessary components and hooks
import { usePagination } from './hooks/usePagination';
import { ILLUSION } from './data/Illusion.js';
import Pagination from './components/Pagination';
import Table from './components/Table';
import PrePagination from './components/PrePagination';
import { ToastContainer } from 'react-toastify';
import { MdOutlineFileCopy } from 'react-icons/md';

// Main App component
function App() {
    // State and hooks initialization
    const [data, setData] = useState(ILLUSION);
    const {
        searchTerm,
        currentPage,
        indexOfFirstItem,
        indexOfLastItem,
        totalPages,
        selectedItems,
        setSelectedItems,
        handleSelection,
        handleCurrentPage,
        setCurrentPage,
        previousPage,
        nextPage,
        lastPage,
        firstPage,
        handleItemsPerPage,
        handleSearchTerm
    } = usePagination({ data: data });

    // Calculate items to display on current page
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    // Filter items based on search term
    const filteredItems = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Ensure currentPage does not exceed totalPages
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);

    // Render UI
    return (
        <>
            {/* Toast notification container */}
            <ToastContainer />

            {/* Header section */}
            <header>
                <p>
                    {/* Logo */}
                    <img src={PaneshiftLogo} alt="Logo" width={50} />
                    {/* Title */}
                    <h1>Paneshift</h1>
                </p>
                {/* Link to documentation */}
                <a target="_blank" href="https://muhammad-aitisam.gitbook.io/pagination/"><MdOutlineFileCopy size={20} /> Docs</a>
            </header>

            {/* Main content */}
            <main>
                {/* Introduction */}
                <h2>Welcome to Paneshift</h2>
                <p>The easiest pagination tool for React built on top of Vite+React</p>

                {/* Pre-pagination section */}
                <PrePagination
                    serachPlaceholder="Search illusions..."
                    totalPages={totalPages}
                    onHandleItemsPerPage={handleItemsPerPage}
                    onHandleSearchTerm={handleSearchTerm}
                    selectedItems={selectedItems}
                />

                {/* Table section */}
                <section>
                    <Table
                        data={data}
                        searchTerm={searchTerm}
                        onHandleSearchTerm={handleSearchTerm}
                        currentItems={currentItems}
                        filteredItems={filteredItems}
                        selectedItems={selectedItems}
                        onSetSelectedItems={setSelectedItems}
                        onHandleSelection={handleSelection}
                    />
                </section>

                {/* Pagination section */}
                <Pagination
                    data={data}
                    onHandleCurrentPage={handleCurrentPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onFirstPage={firstPage}
                    onPreviousPage={previousPage}
                    onNextPage={nextPage}
                    onLastPage={lastPage}
                />
            </main>

            {/* Footer */}
            <footer>
                <p>
                    {/* Footer content */}
                    Made with ❤️ by <a target="_blank" href="https://github.com/MaitisamY">Muhammad Aitisam Yaseen</a>
                </p>
            </footer>
            
            {/* Warning for small screens */}
            <div className="below-300-pixels">
                <p>We recommend using Paneshift above 300 pixels wide screens.</p>
            </div>
        </>
    );
}

export default App; // Export App component
