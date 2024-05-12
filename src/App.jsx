import './styles/paneshift-app.css'
import 'react-toastify/dist/ReactToastify.css'
import PaneshiftLogo from './assets/logo.png'

import { useState, useEffect } from 'react'
import { MdOutlineFileCopy } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'

import { usePagination } from './hooks/usePagination'
import { ILLUSION } from './data/Illusion.js'

import Pagination from './components/Pagination'
import Table from './components/Table'
import PrePagination from './components/PrePagination'

function App() {

    const [data, setData] = useState(ILLUSION)

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
    } = usePagination({ data: data })

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    const filteredItems = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);

    return (
        <>
            <ToastContainer />

            <header>
                <p>
                    <img src={PaneshiftLogo} alt="Logo" width={50} />
                </p>
                <a target="_blank" href="https://muhammad-aitisam.gitbook.io/pagination/"><MdOutlineFileCopy size={20} /> Docs</a>
            </header>

            <main>
                <h2>Welcome to Paneshift</h2>
                <p>The easiest pagination tool for React built on top of Vite+React</p>
                
                <PrePagination
                    serachPlaceholder="Search illusions..."
                    totalPages={totalPages}
                    onHandleItemsPerPage={handleItemsPerPage}
                    onHandleSearchTerm={handleSearchTerm}
                    selectedItems={selectedItems}
                />

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

            <footer>
                <p>
                    Made with ❤️ by <a target="_blank" href="https://github.com/MaitisamY">Muhammad Aitisam Yaseen</a>
                </p>
            </footer>
            
            <div className="below-300-pixels">
                <p>We recommend using Paneshift above 300 pixels wide screens.</p>
            </div>
        </>
        
    )
}

export default App