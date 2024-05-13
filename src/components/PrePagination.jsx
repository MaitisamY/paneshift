// Import necessary modules and styles
import '../styles/paneshift-pagination.css';
import { FaTrashAlt, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

// PrePagination component
function PrePagination({ 
    serachPlaceholder,
    totalPages, 
    onHandleItemsPerPage, 
    onHandleSearchTerm, 
    selectedItems,
}) {

    return (
        <>
            <div className="pre-pagination">
                {/* Display total pages */}
                <div className="first">
                    <span>Total pages: {totalPages}</span>
                    {/* Search input */}
                    <input 
                        type="text" 
                        onChange={onHandleSearchTerm && onHandleSearchTerm} 
                        placeholder={serachPlaceholder ? serachPlaceholder : 'Search...'} 
                    />
                </div>
                {/* Display delete button if multiple items are selected */}
                <div className="last">
                    {/* Dropdown to select items per page */}
                    <div>
                        <span>Showing</span> <select name="items-per-page" id="items-per-page" onChange={onHandleItemsPerPage && onHandleItemsPerPage}>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </select> <span>rows</span>
                    </div>
                </div>
            </div>
            <div className="more-options">
                <div className="first">
                    {
                        selectedItems && selectedItems.length > 1 && (
                            <button className="bg-red">
                                <FaTrashAlt /> Delete selection ({selectedItems.length})
                            </button>
                        )
                    }
                </div>
                {/* Display delete button if multiple items are selected */}
                <div className="last">
                    <button className="dropdown">
                        Sort by <FaSortAlphaDown />

                        <div className="menu">
                            <div className="content">
                                <a>
                                    Sort by <FaSortAlphaUp />
                                </a>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PrePagination; // Export PrePagination component

