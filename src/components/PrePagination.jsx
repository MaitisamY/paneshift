import '../styles/paneshift-pagination.css'

import { FaTrashAlt } from 'react-icons/fa'

function PrePagination({ 
    serachPlaceholder,
    totalPages, 
    onHandleItemsPerPage, 
    onHandleSearchTerm, 
    selectedItems, 
}) {

    return (
        <div className="pre-pagination">
            <span>Total pages: {totalPages}</span>
            <input 
                type="text" 
                onChange={onHandleSearchTerm && onHandleSearchTerm} 
                placeholder={serachPlaceholder ? serachPlaceholder : 'Search...'} 
            />
            <div>
            {
                selectedItems && selectedItems.length > 1 && (
                    <button className="bg-red">
                        <FaTrashAlt /> Delete selection ({selectedItems.length})
                    </button>
                )
            }
            </div>
            <div>
            <span>Showing</span> <select name="items-per-page" id="items-per-page" onChange={onHandleItemsPerPage && onHandleItemsPerPage}>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </select> <span>rows</span>
            </div>
        </div>
    )
}

export default PrePagination
