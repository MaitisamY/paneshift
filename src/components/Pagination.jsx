// Pagination component
function Pagination({ 
    data, 
    onHandleCurrentPage, 
    currentPage, 
    totalPages, 
    onFirstPage, 
    onPreviousPage, 
    onNextPage, 
    onLastPage 
}) {
    return (
        <div className="pagination">
            {/* Display total number of rows */}
            <span>Total rows: {data.length}</span>
            <div>
                {/* Button to go to first page */}
                {currentPage > 1 && (
                    <button onClick={onFirstPage}>
                        {'First'}
                    </button>
                )}

                {/* Button to go to previous page */}
                <button 
                    onClick={onPreviousPage}
                    disabled={currentPage === 1}
                >
                    {'Prev'}
                </button>

                {/* Render ellipsis button if currentPage > 3 and totalPages > 5 */}
                {currentPage > 3 && totalPages > 5 && (
                    <button onClick={() => onHandleCurrentPage(currentPage - 2)}>
                        ...
                    </button>
                )}

                {/* Render button for currentPage - 1 */}
                {currentPage > 1 && (
                    <button onClick={() => onHandleCurrentPage(currentPage - 1)}>
                        {currentPage - 1}
                    </button>
                )}

                {/* Button for current page */}
                <button className="active">{currentPage}</button>

                {/* Render button for currentPage + 1 */}
                {currentPage < totalPages && (
                    <button onClick={() => onHandleCurrentPage(currentPage + 1)}>
                        {currentPage + 1}
                    </button>
                )}

                {/* Render button for currentPage + 2 */}
                {currentPage < totalPages - 1 && (
                    <button onClick={() => onHandleCurrentPage(currentPage + 2)}>
                        ...
                    </button>
                )}

                {/* Button to go to next page */}
                <button 
                    onClick={onNextPage}
                    disabled={currentPage === totalPages}
                >
                    {'Next'}
                </button>

                {/* Button to go to last page */}
                {currentPage < totalPages && (
                    <button onClick={onLastPage}>
                        {'Last'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Pagination; // Export Pagination component
